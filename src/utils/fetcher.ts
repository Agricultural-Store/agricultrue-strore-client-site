import appConfig from "@/config/env";
import { ErrorResponse, FetchOptions } from "@/types/shared";
import { buildQueryString } from "@/utils/query";
import axios, { AxiosError } from "axios";
import { getSession } from "next-auth/react";

export async function fetcher<Data, Params, Body>(
  options: FetchOptions<Params, Body>,
): Promise<Data> {
  let url = appConfig.API_HOST + options.path;
  let body;

  const session = await getSession();
  const headers: Record<string, string> = {};

  if (session?.user?.token) {
    headers["Authorization"] = `Bearer ${session?.user?.token}`;
  }

  if (options.params) {
    url += buildQueryString(options.params as Record<string, string | number>);
  }

  if (options?.body) {
    if (options.body instanceof FormData) {
      body = options.body;
    } else {
      body = JSON.stringify(options.body);
      headers["Content-Type"] = "application/json";
    }
  }

  return axios({
    url,
    method: options?.method || "GET",
    headers: {
      ...headers,
      ...options?.headers,
    },
    data: body,
  })
    .then((res) => res.data)
    .catch((err) => {
      if (err instanceof AxiosError) {
        if (err.response?.data) {
          const error: ErrorResponse<Data> = err.response?.data;
          throw error;
        }
        const error: ErrorResponse<Data> = {
          statusCode: err.status,
          message: err.message,
        };
        throw error;
      }
      const error: ErrorResponse<Data> = {
        statusCode: 400,
        message: err.message,
      };
      throw error;
    });

  // return fetch(url, {
  //   method: options?.method || "GET",
  //   // credentials: "include", // include, same-origin, omit
  //   mode: "cors", // no-cors, cors, same-origin
  //   headers: {
  //     ...headers,
  //     ...options?.headers,
  //   },
  //   body,
  // }).then(async (res) => {
  //   if (!res.ok) {
  //     if (res.body && res.headers.get("Content-Type")?.includes("application/json")) {
  //       const error: ErrorResponse<Data> = await res.json();
  //       throw error;
  //     } else {
  //       const error: ErrorResponse<Data> = {
  //         statusCode: res.status,
  //         message: res.statusText,
  //       };
  //       throw error;
  //     }
  //   }

  //   return res.json();
  // });
}
