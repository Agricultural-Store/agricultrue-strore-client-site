import { Box, Typography } from "@mui/material";
import React from "react";
import ProductDetailRatingForm from "./ProductDetailRatingForm";
import ProductDetailRatingList from "./ProductDetailRatingList";
import useMedia from "@/hooks/shared/useMedia";
import useProductRatingList from "@/hooks/product/useProductRatingList";
import { useParams } from "next/navigation";

const ProductRating = () => {
  const { media } = useMedia();
  const params = useParams();

  const { data, isLoading, isValidating } = useProductRatingList(+(params.id as string));

  return (
    <Box>
      <Typography sx={{ fontWeight: 700, fontSize: media ? "18px" : "20px", mb: "20px" }}>
        Đánh giá từ người dùng
      </Typography>
      <ProductDetailRatingList
        ratingList={data?.data}
        isLoading={isLoading || isValidating}
      />
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: media ? "18px" : "20px",
          mb: "20px",
          mt: "50px",
        }}
      >
        Đánh giá sản phẩm
      </Typography>
      <ProductDetailRatingForm />
    </Box>
  );
};

export default ProductRating;
