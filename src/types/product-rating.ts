export type ProductRating = {
  username: string;
  userImage: string;
  productRating: number;
  feedback: string;
  createdAt: string;
};

export type ProductRatingInput = Omit<ProductRating, "userImage" | "createdAt"> & {
  mail: string;
};
