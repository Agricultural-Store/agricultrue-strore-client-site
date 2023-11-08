import RoundedEditIcon from "@/components/shared/icons/RoundedEditIcon";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import OrderOverviewTable from "./OrderOverviewTable";
import { ProductInCart } from "@/types/cart";
import useUserAddress from "@/hooks/user/useUserAddress";
import { Address } from "@/types/address";

type Props = {
  onBackStep: (step: number) => void;
  data?: ProductInCart[];
  addressId?: number;
};

const OrderOverview = ({ onBackStep, data, addressId }: Props) => {
  const [address, setAddress] = useState<Address>();

  const { data: addresses } = useUserAddress();

  const handleEditAddress = () => {
    onBackStep(1);
  };

  const handleEditPayment = () => {
    onBackStep(2);
  };

  useEffect(() => {
    const _address = addresses?.data.find((add) => add.addressId === addressId);
    setAddress(_address);
  }, [addresses, addressId]);

  return (
    <Box my="24px">
      <Divider></Divider>
      <OrderOverviewTable data={data} />
      <Divider></Divider>
      <Box py="16px">
        <Typography
          variant="h3"
          lineHeight="30px"
        >
          Địa chỉ giao hàng
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "16px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "6px", my: "8px" }}>
            <Typography
              fontSize="16px"
              fontWeight={500}
              lineHeight="28px"
            >
              Họ tên:{" "}
              <Typography
                fontWeight="normal"
                component="span"
              >
                {address?.customerName}
              </Typography>
            </Typography>
            <Typography
              fontSize="16px"
              fontWeight={500}
              lineHeight="28px"
            >
              Điện thoại:{" "}
              <Typography
                fontWeight="normal"
                component="span"
              >
                {address?.phone}
              </Typography>
            </Typography>
            <Typography
              fontSize="16px"
              fontWeight={500}
              lineHeight="28px"
            >
              Địa chỉ:{" "}
              <Typography
                fontWeight="normal"
                component="span"
              >
                {address?.addressDetail}
              </Typography>
            </Typography>
          </Box>
          <IconButton onClick={handleEditAddress}>
            <RoundedEditIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider></Divider>
      <Box py="16px">
        <Typography
          variant="h3"
          lineHeight="30px"
        >
          Phương thức thanh toán
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "16px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            fontSize="16px"
            fontWeight={500}
            lineHeight="28px"
          >
            Phương thức::{" "}
            <Typography
              fontWeight="normal"
              component="span"
            >
              Thẻ tín dụng
            </Typography>
          </Typography>
          <IconButton onClick={handleEditPayment}>
            <RoundedEditIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderOverview;
