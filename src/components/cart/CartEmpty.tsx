import useMedia from "@/hooks/shared/useMedia";
import { AppContext } from "@/providers/AppContext";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next-intl/client";
import React, { useContext } from "react";

const CartEmpty = () => {
  const { setOpenCart } = useContext(AppContext);
  const { media } = useMedia();

  const router = useRouter();

  const handleClick = () => {
    setOpenCart(false);
    router.push("/product");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: media ? "calc(100vh - 350px)" : "calc(100vh - 100px)",
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
      <Button
        variant="contained"
        fullWidth
        sx={{ mt: "24px" }}
        onClick={handleClick}
      >
        Mua Ngay
      </Button>
    </Box>
  );
};

export default CartEmpty;
