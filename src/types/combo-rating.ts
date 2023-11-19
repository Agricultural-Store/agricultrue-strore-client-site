export interface ComboRating {
  id: number;
  comboId?: number;
  userId?: number;
  feedback?: string;
  productRating?: number;
  isDeleted?: boolean;
  createAt?: string;
  updateAt?: string;
  user?: {
    name?: string;
    avatar?: string;
  };
}

export type ComboRatingInput = {
  rating: number;
  feedback: string;
};
