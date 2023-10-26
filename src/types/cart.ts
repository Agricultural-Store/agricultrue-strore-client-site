export interface ProductInCart {
  id: number;
  productImage?: string;
  productName?: string;
  productQuantity?: number;
  productPrice?: number;
  productDiscount?: number;
}

export interface ProductInCartCreateInput {
  productId: number;
  productCount: number;
}
