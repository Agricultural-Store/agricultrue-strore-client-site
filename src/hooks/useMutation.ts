import "client-only";
import { ErrorResponse, FetchOptions } from "@/types/shared";
import useSWRMutation, { SWRMutationConfiguration } from "swr/mutation";
import { fetcher } from "@/utils/fetcher";
import { useSWRConfig } from "swr";
import { ApiResponse } from "../types/shared";

export type MutateRelatedDataList<T> = {
  /** The (API) path of the data list which should be mutated */
  mutatePath: string | string[];
  /** Used to compare new data with list item, default using `id` property to compare the 2 objects */
  isEqual?: (a: T, b: T) => boolean;
  /** Specify where to insert new data if it isn't found from the list, leave `undefined` to skip inserting */
  insertOnNotFound?: "start" | "end";
  /** Use when `delete` data. The matched data should be removed from the list instead of update. */
  shouldRemove?: boolean;
  /** Re-call API to update the list instead of manually update cache. Useful when you don't know where to insert new data in */
  shouldRevalidate?: boolean;
};

export type WithID = { data: { id?: unknown } };

/** Wrapped mutation of SWR, see more at https://swr.vercel.app/docs/mutation#useswrmutation */
function useMutation<Data extends WithID, Body = unknown, Params = unknown>(
  options: FetchOptions<Params, Body> & {
    mutateRelatedDataList?: MutateRelatedDataList<Data>;
  },
  config?: SWRMutationConfiguration<Data, ErrorResponse<Data>>,
) {
  const { mutate } = useSWRConfig();
  const { mutateRelatedDataList, ...fetchOpts } = options;

  return useSWRMutation<
    Data,
    ErrorResponse<Data>,
    FetchOptions<Params, Body>,
    Partial<FetchOptions<Params, Body>> | undefined
  >(
    {
      path: fetchOpts.path,
      params: fetchOpts.params,
    },
    (_, { arg }) =>
      fetcher<Data, Params, Body>({
        ...fetchOpts,
        ...arg,
      } as FetchOptions<Params, Body>),
    {
      ...config,
      revalidate: false,
      onSuccess: (_response, _key, _config) => {
        mutate<Data>(
          (key) =>
            typeof key === "object" &&
            (key as FetchOptions<Params, Body>)?.path == fetchOpts.path,
          (currentData) => {
            return {
              ...currentData,
              ..._response,
            };
          },
          {
            revalidate: false,
          },
        );
        if (!!mutateRelatedDataList) {
          const {
            mutatePath,
            insertOnNotFound,
            shouldRemove,
            shouldRevalidate,
            isEqual,
          } = mutateRelatedDataList;

          if (shouldRemove) {
            mutate<Data>(
              (key) =>
                typeof key === "object" &&
                (key as FetchOptions<Params, Body>)?.path == fetchOpts.path,
              undefined,
              {
                revalidate: false,
              },
            );
          }

          mutate<ApiResponse<Data>>(
            (key) => {
              const path = (key as FetchOptions<Params, Body>)?.path;
              if (typeof mutatePath === "string") {
                return typeof key === "object" && path && mutatePath === path;
              }
              return typeof key === "object" && path && mutatePath.includes(path);
            },
            (currentData) => {
              if (!currentData || shouldRevalidate) {
                return currentData;
              }

              if (!Array.isArray(currentData.data)) {
                return currentData;
              }

              const index = currentData.data?.findIndex((item) => {
                if (!!isEqual) {
                  return isEqual(item, _response);
                }
                return item.id === _response.data.id;
              });

              if (shouldRemove) {
                return {
                  ...currentData,
                  total: currentData?.total ? currentData.total - 1 : 0,
                  items: [
                    ...currentData.data?.slice(0, index),
                    ...currentData.data?.slice(index + 1),
                  ],
                };
              }

              const updatedData = { ...currentData };

              if (!Array.isArray(updatedData.data)) {
                return updatedData;
              }

              if (index < 0) {
                if (insertOnNotFound) {
                  if (updatedData.total) updatedData.total += 1;
                  if (insertOnNotFound == "start") {
                    updatedData.data?.unshift(_response.data);
                  }
                  if (insertOnNotFound == "end") {
                    updatedData.data?.push(_response.data);
                  }
                }
              } else {
                if (updatedData.data) updatedData.data[index] = _response.data;
              }

              return updatedData;
            },
            {
              revalidate: !!shouldRevalidate,
            },
          );
        }
        if (!!config?.onSuccess) {
          config?.onSuccess(_response, _key, _config);
        }
      },
    } as SWRMutationConfiguration<Data, ErrorResponse<Data>>,
  );
}

export default useMutation;
