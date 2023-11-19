import { Product } from "./product";

export type ProductDetail = {
  id: number;
  productName?: string;
  productImages?: string[];
  productPrice?: number;
  productDiscount?: number;
  productQuantity?: number;
  productDescription?: string;
  productCategory?: string;
  productSummaryDescription?: string;
  isFavorites?: boolean;
  productDetail?: {
    type?: string;
    humidity?: string;
    flexibleIndex?: string;
    protein?: string;
    sugarIndex?: string;
    fiber?: string;
    axitFolic?: string;
    mineral?: string;
    elasticity?: string;
    grainStructure?: string;
    brokenGrainRating?: string;
  };
  productRelated?: Product[];
};
