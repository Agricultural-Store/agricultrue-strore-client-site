import { Box } from "@mui/material";
import React from "react";
import ProductDetailRatingItem from "./ProductDetailRatingItem";
import { ProductRating } from "@/types/product-rating";

type Props = {
  ratingList: ProductRating[];
};

const ProductDetailRatingList = ({ ratingList }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="20px"
    >
      {ratingList.map((rating, index) => (
        <ProductDetailRatingItem
          key={index}
          rating={rating}
        />
      ))}
    </Box>
  );
};

export default ProductDetailRatingList;
