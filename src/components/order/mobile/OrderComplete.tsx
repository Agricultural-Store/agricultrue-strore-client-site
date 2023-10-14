import { Box, Button, Typography } from "@mui/material";
import React from "react";

const OrderComplete = () => {
  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="img"
        src="/images/order-complete.svg"
        mb="24px"
      />
      <Typography
        variant="h3"
        lineHeight="30px"
      >
        Đơn hàng đã đặt thành công
      </Typography>
      <Typography
        mt="8px"
        lineHeight="28px"
        whiteSpace="pre-wrap"
        textAlign="center"
        mb="24px"
        fontSize="14px"
      >
        {"Cảm ơn bạn đã mua sắm! Đơn đặt hàng của bạn\nđang được vận chuyển."}
      </Typography>
      <Button
        fullWidth
        variant="outlined"
      >
        Xem đơn hàng
      </Button>
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: "12px" }}
        // onClick={handleClose}
      >
        Xong
      </Button>
    </Box>
  );
};

export default OrderComplete;
