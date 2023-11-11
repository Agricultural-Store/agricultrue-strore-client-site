import { ProductDetail } from "./product-detail";

export interface ProductComboDetail {
  id: number;
  comboName?: string;
  comboImages?: string[];
  comboDescription?: string;
  comboDescriptionSummary?: string;
  isDeleted?: boolean;
  createAt?: Date;
  updateAt?: Date;
  products?: ProductDetail[];
  comboPrice?: number;
  comboDiscount?: number;
}
