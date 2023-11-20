import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next-intl/client";
import React from "react";

const OrderFail = () => {
  const router = useRouter();

  const handleMoveOrderHistory = () => {
    router.push("/profile/order");
  };

  const handleMoveProduct = () => {
    router.push("/product");
  };

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
        src="/images/fail-icon.png"
        mb="24px"
      />
      <Typography
        variant="h3"
        lineHeight="30px"
      >
        Đơn hàng đã đặt thất bại
      </Typography>
      <Typography
        mt="8px"
        lineHeight="28px"
        whiteSpace="pre-wrap"
        textAlign="center"
        mb="24px"
        fontSize="14px"
      >
        {
          "Rất tiếc, đơn hàng của bạn không thể được xử lý\nlúc này. Vui lòng thử lại sau."
        }
      </Typography>
      <Button
        fullWidth
        variant="outlined"
        color="error"
        onClick={handleMoveOrderHistory}
      >
        Xem lại
      </Button>
      <Button
        fullWidth
        variant="contained"
        color="error"
        sx={{ mt: "12px" }}
        onClick={handleMoveProduct}
      >
        Xong
      </Button>
    </Box>
  );
};

export default OrderFail;
