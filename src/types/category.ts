export interface Category {
  id: number;
  categoryName?: string;
  productQuantity?: string;
}

export type CategoryCreateInput = Pick<Category, "categoryName">;
