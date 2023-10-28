import { ProductInCart } from "./cart";

export enum PaymentMethod {
  CASH = "CASH",
  CREDIT = "CREDIT",
}

export interface CartContextType {
  product?: ProductInCart;
  setProduct: (product?: ProductInCart) => void;
}

export interface OrderCreateInput {
  productIds: number[];
  addressId: number;
  totalPrice: number;
  discountPrice: number;
  paymentMethod: PaymentMethod;
  note: string;
}
