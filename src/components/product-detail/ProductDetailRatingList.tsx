import { Box, Typography } from "@mui/material";
import React from "react";
import ProductDetailRatingItem from "./ProductDetailRatingItem";
import { ProductRating } from "@/types/product-rating";
import CustomizedLoading from "../shared/CustomizedLoading";

type Props = {
  ratingList?: ProductRating[];
  isLoading?: boolean;
};

const ProductDetailRatingList = ({ ratingList, isLoading }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="20px"
    >
      {isLoading && (
        <Box
          textAlign="center"
          display="flex"
          justifyContent="center"
        >
          <CustomizedLoading
            color="green"
            size="small"
          />
        </Box>
      )}
      {!isLoading && ratingList?.length === 0 && (
        <Typography textAlign="center">Chưa có bình luận nào!</Typography>
      )}
      {!isLoading &&
        ratingList?.map((rating, index) => (
          <ProductDetailRatingItem
            key={index}
            rating={rating}
          />
        ))}
    </Box>
  );
};

export default ProductDetailRatingList;
