import { Product } from "@/types/product";

export const getProduct = (): Product | null => {
  const product = localStorage.getItem("product");
  if (product) {
    return JSON.parse(product);
  }
  return null;
};

export const saveProduct = (product: Product) => {
  const _product = {
    ...product,
    productCount: 1,
  };
  localStorage.setItem("product", JSON.stringify(_product));
};
