import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";

const ProfileOrderDetailSummary = () => {
  return (
    <Box>
      <Typography
        variant="h3"
        lineHeight="30px"
        mb="16px"
        mt="24px"
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
          <Typography lineHeight="32px">120.000đ</Typography>
        </Box>
        <Box
          mb="8px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          lineHeight="32px"
        >
          <Typography lineHeight="32px">Giảm giá</Typography>
          <Typography lineHeight="32px">-30,000₫</Typography>
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
          fontWeight={700}
          lineHeight="32px"
        >
          Tổng
        </Typography>
        <Typography
          fontSize="18px"
          fontWeight={700}
          lineHeight="32px"
        >
          90.000đ
        </Typography>
      </Box>
      <Box>
        <Button
          variant="outlined"
          fullWidth
          color="error"
          sx={{ textTransform: "capitalize", mb: "12px" }}
        >
          Hủy đơn hàng
        </Button>
        <Button
          variant="contained"
          fullWidth
          sx={{ textTransform: "capitalize" }}
        >
          Mua lại
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileOrderDetailSummary;
