import { ListOptions } from "./shared";

export interface Product {
  id: number;
  productName?: string;
  productImage?: string;
  productPrice?: number;
  productDiscount?: number;
}

export type ProductCreateInput = Omit<Product, "id">;

export type ProductUpdateInput = Partial<ProductCreateInput>;

export type ProductFilterParams = ListOptions<Product> & {
  category?: string[] | string[];
};
