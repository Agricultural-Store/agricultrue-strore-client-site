import ArrowRightIcon from "@/components/shared/icons/ArrowRightIcon";
import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  category?: string;
};

const ProductDetailBreadcrumbs = ({ category }: Props) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      mt="48px"
      mb="16px"
    >
      <Typography fontSize="14px">Trang chủ</Typography>
      <ArrowRightIcon />
      <Typography fontSize="14px">Sản phẩm</Typography>
      <ArrowRightIcon />
      <Typography
        fontSize="14px"
        fontWeight={500}
      >
        {category}
      </Typography>
    </Box>
  );
};

export default ProductDetailBreadcrumbs;
