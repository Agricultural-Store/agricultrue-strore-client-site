import { CartContext } from "@/providers/CartContext";
import { ProductInCart } from "@/types/cart";
import { calcPriceDiscount } from "@/utils/count";
import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useContext, useEffect, useMemo, useState } from "react";

type Props = {
  onPrevious?: () => void;
  onNext?: () => void;
  data?: ProductInCart[];
  onChange?: (originValue: number, discountValue: number) => void;
  disabled?: boolean;
};

const OrderSummary = ({
  onNext,
  onPrevious,
  data: dataProps,
  onChange,
  disabled,
}: Props) => {
  const [data, setData] = useState<ProductInCart[]>();

  const { product } = useContext(CartContext);

  const originalPrice = useMemo(() => {
    return (
      data?.reduce(
        (pre, curr) => pre + (curr?.productPrice || 0) * (curr?.productCount ?? 1),
        0,
      ) || 0
    );
  }, [data]);

  const discountPrice = useMemo(
    () =>
      data?.reduce(
        (pre, curr) =>
          pre +
          calcPriceDiscount(curr.productPrice, curr.productDiscount) *
            (curr?.productCount ?? 1),
        0,
      ) || 0,
    [data],
  );

  useEffect(() => {
    onChange?.(originalPrice, discountPrice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originalPrice, discountPrice]);

  useEffect(() => {
    if (product) {
      setData([product]);
    } else {
      setData(dataProps);
    }
  }, [dataProps, product]);

  return (
    <Box
      width="35%"
      height="277px"
      p="24px"
      borderRadius="6px"
      position="sticky"
      ml="40px"
      top="20px"
      sx={{ bgcolor: (theme) => `${theme.palette.color?.bgPrimary}14` }}
    >
      <Typography
        variant="h3"
        lineHeight="30px"
        mb="16px"
      >
        Tóm tắt
      </Typography>
      <Box>
        <Divider></Divider>
        <Box
          my="8px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          lineHeight="32px"
        >
          <Typography lineHeight="32px">Tạm tính</Typography>
          <Typography lineHeight="32px">{originalPrice.toLocaleString()}đ</Typography>
        </Box>
        <Box
          mb="8px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          lineHeight="32px"
        >
          <Typography lineHeight="32px">Giảm giá</Typography>
          <Typography lineHeight="32px">-{discountPrice.toLocaleString()}₫</Typography>
        </Box>
        <Divider></Divider>
      </Box>
      <Box
        mt="8px"
        mb="16px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        lineHeight="32px"
      >
        <Typography
          fontSize="18px"
          fontWeight={500}
          lineHeight="32px"
        >
          Tổng
        </Typography>
        <Typography
          fontSize="18px"
          fontWeight={500}
          lineHeight="32px"
        >
          {(originalPrice - discountPrice).toLocaleString()}đ
        </Typography>
      </Box>
      <Box
        display="flex"
        gap="20px"
      >
        <Button
          variant="outlined"
          fullWidth
          onClick={onPrevious}
          sx={{ textTransform: "capitalize" }}
        >
          Trở về
        </Button>
        <Button
          variant="contained"
          fullWidth
          onClick={onNext}
          sx={{ textTransform: "capitalize" }}
          disabled={disabled}
        >
          Tiếp tục
        </Button>
      </Box>
    </Box>
  );
};

export default OrderSummary;
