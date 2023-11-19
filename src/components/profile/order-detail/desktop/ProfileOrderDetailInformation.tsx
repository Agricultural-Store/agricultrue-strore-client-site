import { UserOrder } from "@/types/user";
import { Box, Typography, Divider } from "@mui/material";
import React from "react";

type Props = {
  order?: UserOrder;
};

const ProfileOrderDetailInformation = ({ order }: Props) => {
  return (
    <>
      <Box py="16px">
        <Typography
          variant="h3"
          lineHeight="30px"
        >
          Địa chỉ nhận hàng
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "16px",
            mt: "16px",
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
                {order?.customerName}
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
                {order?.phone}
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
                {order?.address}
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ my: "16px" }}></Divider>
      <Box>
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
            mt: "16px",
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
              {order?.paymentMethod}
            </Typography>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ProfileOrderDetailInformation;
