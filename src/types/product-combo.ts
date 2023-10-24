import { ListOptions } from "./shared";

export interface ProductCombo {
  id: number;
  comboName?: string;
  comboImage?: string;
  comboDescription?: string;
  createAt?: string;
  updateAt?: string;
  comboDescriptionSummary?: string
}


export type ProductComboFilterParams = ListOptions<ProductCombo> 