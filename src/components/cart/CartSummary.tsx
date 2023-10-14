import useMedia from "@/hooks/shared/useMedia";
import { ProductInCart } from "@/types/cart";
import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useMemo } from "react";

type Props = {
  products: ProductInCart[];
};

const CartSummary = ({ products }: Props) => {
  const { media } = useMedia();
  const originalPrice = useMemo(
    () => products.reduce((pre, curr) => pre + curr.productPrice, 0),
    [products],
  );

  const discountPrice = useMemo(
    () =>
      products.reduce(
        (pre, curr) => pre + (curr.productPrice * curr.productDiscount) / 100,
        0,
      ),
    [products],
  );

  return (
    <Box py="24px">
      <Typography variant="h2">Tóm tắt</Typography>
      <Divider sx={{ my: "16px" }}></Divider>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography
          fontSize={media ? "14px" : "18px"}
          lineHeight="36px"
        >
          Tạm tính
        </Typography>
        <Typography
          variant="h4"
          lineHeight="36px"
          fontSize={media ? "14px" : "16px"}
        >
          {originalPrice.toLocaleString()}đ
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography
          fontSize={media ? "14px" : "18px"}
          lineHeight="36px"
        >
          Giảm giá
        </Typography>
        <Typography
          variant="h4"
          lineHeight="36px"
          fontSize={media ? "14px" : "16px"}
        >
          {discountPrice.toLocaleString()}đ
        </Typography>
      </Box>
      <Divider sx={{ my: "16px" }}></Divider>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography
          fontSize={media ? "14px" : "18px"}
          lineHeight="36px"
        >
          Tổng
        </Typography>
        <Typography
          variant="h4"
          lineHeight="36px"
          fontSize={media ? "14px" : "16px"}
        >
          {(originalPrice - discountPrice).toLocaleString()}đ
        </Typography>
      </Box>
      <Button
        variant="contained"
        fullWidth
        sx={{ mt: "16px", textTransform: "capitalize" }}
      >
        Thanh toán
      </Button>
    </Box>
  );
};

export default CartSummary;
