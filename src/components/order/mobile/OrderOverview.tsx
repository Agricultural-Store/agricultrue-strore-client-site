import RoundedEditIcon from "@/components/shared/icons/RoundedEditIcon";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import OrderOverviewTable from "./OrderOverviewTable";

type Props = {
  onBackStep: (step: number) => void;
};

const OrderOverview = ({ onBackStep }: Props) => {
  const handleEditAddress = () => {
    onBackStep(1);
  };

  const handleEditPayment = () => {
    onBackStep(2);
  };

  return (
    <Box my="24px">
      <OrderOverviewTable />
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
              fontWeight={700}
              lineHeight="28px"
            >
              Họ tên:{" "}
              <Typography
                fontWeight="normal"
                component="span"
                fontSize="inherit"
              >
                Dinh Phuc Khang
              </Typography>
            </Typography>
            <Typography
              fontSize="14px"
              fontWeight={700}
              lineHeight="28px"
            >
              Điện thoại:{" "}
              <Typography
                fontSize="inherit"
                fontWeight="normal"
                component="span"
              >
                0123 456 789
              </Typography>
            </Typography>
            <Typography
              fontSize="14px"
              fontWeight={700}
              lineHeight="28px"
            >
              Địa chỉ:{" "}
              <Typography
                fontWeight="normal"
                component="span"
                fontSize="inherit"
              >
                Khoa Công nghệ phần mềm, Trường Công nghệ Thông tin & Truyền thông, Trường
                Đại học Cần Thơ
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
            Phương thức thanh toán
          </Typography>
          <IconButton onClick={handleEditPayment}>
            <RoundedEditIcon />
          </IconButton>
        </Box>
        <Typography
          fontSize="14px"
          fontWeight={700}
          lineHeight="28px"
        >
          Phương thức::{" "}
          <Typography
            fontWeight="normal"
            component="span"
            fontSize="inherit"
          >
            Thẻ tín dụng
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default OrderOverview;
