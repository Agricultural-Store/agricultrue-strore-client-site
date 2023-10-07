import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";

type Props = {
  onPrevious?: () => void;
  onNext?: () => void;
};

const OrderSummary = ({ onNext, onPrevious }: Props) => {
  return (
    <Box
      width="27%"
      height="277px"
      p="24px"
      borderRadius="6px"
      position="sticky"
      top="100px"
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
          <Typography lineHeight="32px">210.000đ</Typography>
        </Box>
        <Box
          mb="8px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          lineHeight="32px"
        >
          <Typography lineHeight="32px">Giảm giá</Typography>
          <Typography lineHeight="32px">-50,000₫</Typography>
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
          160.000đ
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
        >
          Tiếp tục
        </Button>
      </Box>
    </Box>
  );
};

export default OrderSummary;
