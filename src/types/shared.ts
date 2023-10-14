export enum SortOrderEnum {
  ASC = "asc",
  DESC = "desc",
}

export interface SortOptions<T> {
  sortBy: keyof T;
  sortOrder: "asc" | "desc";
}

// eslint-disable-next-line
export type ListOptions<T = any> = Partial<T> & {
  limit?: number;
  offset?: number;
  search?: string;
  sortField?: keyof T;
  sortOrder?: SortOrderEnum;
  searchValue?: string;
  searchField?: keyof T;
  relation?: string;
};

export interface ListResponse<T> {
  items: T[];
  total: number;
  options: ListOptions<T>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ApiResponse<T, Option = any> {
  data: T;
  total?: number;
  message?: string;
  statusCode: number;
  filter?: ListOptions<Option>;
}

export interface ErrorResponse<T> {
  code: string;
  message: string;
  details?: {
    [Key in keyof T]: string;
  };
}

export type FetchMethod = "GET" | "POST" | "PUT" | "DELETE";

export type FetchOptions<Params = unknown, Body = unknown> = {
  method?: FetchMethod;
  path: string;
  params?: Params;
  body?: Body;
  headers?: {
    [key: string]: string;
  };
};

export type OptionType = {
  value: string | number;
  label: string;
};
