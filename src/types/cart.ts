export interface ProductInCart {
  id: number;
  productImage?: string;
  productName?: string;
  productQuantity?: number;
  productPrice?: number;
  productDiscount?: number;
  productCount?: number;
  isCombo?: boolean
}

export interface ComboInCart {
  id: number;
  comboImage?: string;
  comboName?: string;
  comboQuantity?: number;
  comboPrice?: number;
  comboDiscount?: number;
  comboCount?: number;
}

export interface ProductInCartCreateInput {
  productId: string;
  productCount: string;
}
