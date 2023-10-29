import { AppContext } from "@/providers/AppContext";
import { Typography, Button, Box } from "@mui/material";
import React, { useContext } from "react";

const CartAuth = () => {
  const { setOpenAuth, setOpenCart } = useContext(AppContext);

  const handleClick = () => {
    setOpenCart(false);
    setOpenAuth(true);
  };

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
        textAlign="center"
      >
        Vui lòng đăng nhập để có thể xem giỏ hàng của bạn!
      </Typography>
      <Button
        variant="contained"
        fullWidth
        sx={{ mt: "24px" }}
        onClick={handleClick}
      >
        Đăng nhập
      </Button>
    </Box>
  );
};

export default CartAuth;
