import { combineQueryParams, extractQueryParams } from "@/utils/query";
import { useRouter } from "next-intl/client";
import { useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

function useQueryParams<T = Record<string, string | number>>(
  defaultValue?: Partial<T>,
): [T, (newValue: Partial<T>) => void] {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramString = `${searchParams}`;

  const value = useMemo(() => {
    const extractedValue = extractQueryParams(paramString);
    return {
      ...defaultValue,
      ...extractedValue,
    } as T;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramString]);

  const setValue = useCallback(
    (newValue: Partial<T>) => {
      const params = combineQueryParams(
        paramString,
        newValue as Record<string, string | number>,
      );
      router.push(`?${params}`);
    },
    [router, paramString],
  );

  return [value, setValue];
}

export default useQueryParams;
