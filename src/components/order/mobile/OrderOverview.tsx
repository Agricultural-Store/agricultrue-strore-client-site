import RoundedEditIcon from "@/components/shared/icons/RoundedEditIcon";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import React, { useContext, useEffect, useMemo, useState } from "react";
import OrderOverviewTable from "./OrderOverviewTable";
import { ProductInCart } from "@/types/cart";
import { calcPriceDiscount } from "@/utils/count";
import { CartContext } from "@/providers/CartContext";
import { Address } from "@/types/address";
import useUserAddress from "@/hooks/user/useUserAddress";

type Props = {
  onBackStep: (step: number) => void;
  data?: ProductInCart[];
  onChange?: (originValue: number, discountValue: number) => void;
  addressId?: number;
};

const OrderOverview = ({ onBackStep, data: dataProps, onChange, addressId }: Props) => {
  const [data, setData] = useState<ProductInCart[]>();
  const [address, setAddress] = useState<Address>();

  const { data: addresses } = useUserAddress();

  const { product } = useContext(CartContext);
  const handleEditAddress = () => {
    onBackStep(1);
  };

  useEffect(() => {
    const _address = addresses?.data.find((add) => add.addressId === addressId);
    setAddress(_address);
  }, [addresses, addressId]);

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
    <Box my="24px">
      <OrderOverviewTable data={data} />
      <Box py="16px">
        <Box
          sx={{
            display: "flex",
            gap: "16px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            lineHeight="30px"
          >
            Địa chỉ giao hàng
          </Typography>
          <IconButton onClick={handleEditAddress}>
            <RoundedEditIcon />
          </IconButton>
        </Box>
        <Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "6px", my: "8px" }}>
            <Typography
              fontSize="14px"
              fontWeight={500}
              lineHeight="28px"
            >
              Họ tên:{" "}
              <Typography
                fontWeight="normal"
                component="span"
                fontSize="inherit"
              >
                {address?.customerName}
              </Typography>
            </Typography>
            <Typography
              fontSize="14px"
              fontWeight={500}
              lineHeight="28px"
            >
              Điện thoại:{" "}
              <Typography
                fontSize="inherit"
                fontWeight="normal"
                component="span"
              >
                {address?.phone}
              </Typography>
            </Typography>
            <Typography
              fontSize="14px"
              fontWeight={500}
              lineHeight="28px"
            >
              Địa chỉ:{" "}
              <Typography
                fontWeight="normal"
                component="span"
                fontSize="inherit"
              >
                {address?.addressDetail}
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider></Divider>
      <Box py="16px">
        <Box
          sx={{
            display: "flex",
            gap: "16px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            lineHeight="30px"
          >
            Tóm tắt
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
        >
          <Typography
            fontSize="14px"
            fontWeight={500}
            lineHeight="28px"
          >
            Tạm tính:
          </Typography>
          <Typography
            fontWeight="normal"
            component="span"
            fontSize="14px"
          >
            {originalPrice.toLocaleString()}đ
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
        >
          <Typography
            fontSize="14px"
            fontWeight={500}
            lineHeight="28px"
          >
            Giảm giá:
          </Typography>
          <Typography
            fontWeight="normal"
            component="span"
            fontSize="14px"
          >
            -{discountPrice.toLocaleString()}đ
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
        >
          <Typography
            fontSize="14px"
            fontWeight={500}
            lineHeight="28px"
          >
            Tổng:
          </Typography>
          <Typography
            fontWeight="normal"
            component="span"
            fontSize="14px"
          >
            {(originalPrice - discountPrice).toLocaleString()}đ
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderOverview;
