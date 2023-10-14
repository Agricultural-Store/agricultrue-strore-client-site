"use client";
import React from "react";
import OrderDesktop from "./desktop";
import { Box } from "@mui/material";
import useMedia from "@/hooks/shared/useMedia";
import OrderMobile from "./mobile";

const Order = () => {
  const { media } = useMedia();

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
