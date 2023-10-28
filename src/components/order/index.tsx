"use client";
import React, { useContext, useEffect } from "react";
import OrderDesktop from "./desktop";
import { Box } from "@mui/material";
import useMedia from "@/hooks/shared/useMedia";
import OrderMobile from "./mobile";
import { CartContext } from "@/providers/CartContext";

const Order = () => {
  const { media } = useMedia();
  const { setProduct } = useContext(CartContext);

  useEffect(() => {
    return () => setProduct(undefined);
  }, [setProduct]);

  if (media) {
    return <OrderMobile />;
  }

  return (
    <Box p="48px">
      <OrderDesktop />
    </Box>
  );
};

export default Order;
