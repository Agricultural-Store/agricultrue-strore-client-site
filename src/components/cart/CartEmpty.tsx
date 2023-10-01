import { Box, Typography } from "@mui/material";
import React from "react";

const CartEmpty = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 100px)",
        flexDirection: "column",
      }}
    >
      <Box
        component="img"
        src="/images/empty-cart.svg"
      />
      <Typography
        variant="h3"
        mt="24px"
        lineHeight="30px"
      >
        Giỏ hàng của bạn đang trống
      </Typography>
      <Typography
        textAlign="center"
        lineHeight="28px"
      >
        Chưa có sản phẩm nào trong giỏ hàng. Hãy mua sắm để làm đầy giỏ hàng của bạn!
      </Typography>
    </Box>
  );
};

export default CartEmpty;
