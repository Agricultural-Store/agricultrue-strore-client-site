"use client";
import React, { useContext, useEffect } from "react";
import OrderDesktop from "./desktop";
import { Box } from "@mui/material";
import useMedia from "@/hooks/shared/useMedia";
import OrderMobile from "./mobile";
import { CartContext } from "@/providers/CartContext";
import useUserCart from "@/hooks/user/useUserCart";
import { redirect } from "next/navigation";

const Order = () => {
  const { media } = useMedia();
  const { setProduct, product } = useContext(CartContext);

  const { data } = useUserCart();

  useEffect(() => {
    return () => setProduct(undefined);
  }, [setProduct]);

  if (data?.data.length === 0 && !product) {
    redirect("/product");
  }

  if (media) {
    return <OrderMobile />;
  }

  return (
    <Box
      width={{
        lg: "85%",
        sm: "100%",
      }}
      sx={{
        m: "0 auto",
        pt: "48px",
        paddingX: {
          sm: "48px !important",
          lg: "0px !important",
        },
      }}
    >
      <OrderDesktop />
    </Box>
  );
};

export default Order;
