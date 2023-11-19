export type ProductRating = {
  productRating: number;
  feedback: string;
  createAt: string;
  user?: {
    name?: string;
    avatar?: string;
  };
};

export type ProductRatingInput = {
  rating: number;
  feedback: string;
};
