export interface ProductInCart {
  id: number;
  productImage?: string;
  productName?: string;
  productQuantity?: number;
  productPrice?: number;
  productDiscount?: number;
  productCount?: number;
}

export interface ProductInCartCreateInput {
  productId: string;
  productCount: string;
}
