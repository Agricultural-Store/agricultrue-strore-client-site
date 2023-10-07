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
      <Divider></Divider>
      <OrderOverviewTable />
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
              fontWeight={700}
              lineHeight="28px"
            >
              Họ tên:{" "}
              <Typography
                fontWeight="normal"
                component="span"
              >
                Dinh Phuc Khang
              </Typography>
            </Typography>
            <Typography
              fontSize="16px"
              fontWeight={700}
              lineHeight="28px"
            >
              Điện thoại:{" "}
              <Typography
                fontWeight="normal"
                component="span"
              >
                0123 456 789
              </Typography>
            </Typography>
            <Typography
              fontSize="16px"
              fontWeight={700}
              lineHeight="28px"
            >
              Địa chỉ:{" "}
              <Typography
                fontWeight="normal"
                component="span"
              >
                Khoa Công nghệ phần mềm, Trường Công nghệ Thông tin & Truyền thông, Trường
                Đại học Cần Thơ
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
            fontWeight={700}
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
