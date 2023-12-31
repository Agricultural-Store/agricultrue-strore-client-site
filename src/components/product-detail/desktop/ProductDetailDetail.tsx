import { ProductDetail } from "@/types/product-detail";
import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  product?: ProductDetail;
};

const ProductDetailDetail = ({ product }: Props) => {
  const renderItem = (label?: string, value?: string) => {
    return (
      <Box
        display="flex"
        my="1px"
      >
        <Typography
          width="200px"
          fontSize="18px"
          fontWeight={600}
        >
          {label}
        </Typography>
        <Typography sx={{ width: "calc(100% - 200px)" }}>{value}</Typography>
      </Box>
    );
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {renderItem("Loại hạt", product?.productDetail?.type)}
      {renderItem("Độ ẩm", product?.productDetail?.humidity)}
      {renderItem("Chỉ số dẻo", product?.productDetail?.flexibleIndex)}
      {renderItem("Protein", product?.productDetail?.protein)}
      {renderItem("Tỷ lệ hạt gãy", product?.productDetail?.brokenGrainRating)}
      {renderItem("Chỉ số đường", product?.productDetail?.sugarIndex)}
      {renderItem("Chất xơ", product?.productDetail?.fiber)}
      {renderItem("Axit Folic", product?.productDetail?.axitFolic)}
      {renderItem("Chất khoáng", product?.productDetail?.mineral)}
      {renderItem("Độ đàn hồi", product?.productDetail?.elasticity)}
      {renderItem("Cấu trúc hạt", product?.productDetail?.grainStructure)}
    </Box>
  );
};

export default ProductDetailDetail;
