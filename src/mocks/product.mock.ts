import { ListOptions, ListResponse } from "@/types/shared";
import { extractQueryParams } from "@/utils/query";
import { FetchMockStatic } from "@gr2m/fetch-mock";
import { Product } from "@/types/product";

export default function mockProducts(fetchMock: FetchMockStatic) {
  const products = [] as Product[];

  return fetchMock.get(
    "path:/api/products",
    (path) => {
      const options = extractQueryParams(path) as ListOptions<Product>;
      const { offset = 0, limit = 10 } = options;

      return {
        items: products.slice(offset, offset + limit),
        total: products.length,
        options,
      } as ListResponse<Product>;
    },
    { delay: 1000 },
  );
}
