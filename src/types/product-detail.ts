export type ProductDetail = {
  id: number;
  productName?: string;
  productImages?: string[];
  productPrice?: number;
  productDiscount?: number;
  productQuantity?: number;
  productDescription?: string;
  productCategory?: string;
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
};


