export type ProductRating = {
  username: string;
  userImage: string;
  productRating: number;
  feedback: string;
  createdAt: string;
};

export type ProductRatingInput = {
  rating: number;
  feedback: string;
}
