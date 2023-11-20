import { useEnqueueSnackbar } from "@/hooks/shared/useEnqueueSnackbar";
import useMedia from "@/hooks/shared/useMedia";
import { ProductInCart } from "@/types/cart";
import { calcPriceDiscount } from "@/utils/count";
import { Box, Button, Divider, Typography } from "@mui/material";
import { useRouter } from "next-intl/client";
import React, { useMemo } from "react";

type Props = {
  products: ProductInCart[];
  onClose?: (bool: boolean) => void;
};

const CartSummary = ({ products, onClose }: Props) => {
  const { media } = useMedia();
  const router = useRouter();
  const [setEnqueue] = useEnqueueSnackbar();
  const originalPrice = useMemo(
    () =>
      products.reduce(
        (pre, curr) => pre + (curr?.productPrice || 0) * (curr?.productCount ?? 1),
        0,
      ),
    [products],
  );

  const discountPrice = useMemo(
    () =>
      products.reduce(
        (pre, curr) =>
          pre +
          calcPriceDiscount(curr.productPrice, curr.productDiscount) *
            (curr?.productCount ?? 1),
        0,
      ),
    [products],
  );

  const handlePayment = () => {
    if (originalPrice - discountPrice < 20000) {
      setEnqueue("Hóa đơn phải tối thiểu 20,000đ", "error");
      return;
    }
    onClose?.(false);
    router.push("/order");
  };

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
        onClick={handlePayment}
        sx={{ mt: "16px", textTransform: "capitalize" }}
      >
        Thanh toán
      </Button>
    </Box>
  );
};

export default CartSummary;
