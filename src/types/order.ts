import { ComboInCart, ProductInCart } from "./cart";

export enum PaymentMethod {
  CASH = "CASH",
  CREDIT = "CREDIT",
}

export interface CartContextType {
  product?: ProductInCart;
  setProduct: (product?: ProductInCart) => void;
  combo?: ComboInCart;
  setCombo: (combo: ComboInCart) => void;
}

export interface OrderCreateInput {
  products: { id: number; productCount?: number }[];
  addressId: number;
  totalPrice: number;
  discountPrice: number;
  paymentMethod: PaymentMethod;
  note: string;
  isCombo?: boolean;
}

export interface PaymentCreateKey {
  clientSecret?: string;
}

export interface PaymentCreateKeyInput {
  amount: number;
}
