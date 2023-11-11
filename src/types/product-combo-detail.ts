import { ProductDetail } from "./product-detail";

export interface ProductComboDetail {
  id: number;
  comboName: string;
  comboImage: string[];
  comboDescription: string;
  comboDescriptionSummary: string;
  isDeleted: boolean;
  createAt: Date;
  updateAt: Date;
  products: ProductDetail[];
}
