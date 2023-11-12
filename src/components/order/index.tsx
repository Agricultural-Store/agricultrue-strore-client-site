"use client";
import React, { useContext, useEffect } from "react";
import OrderDesktop from "./desktop";
import { Container } from "@mui/material";
import useMedia from "@/hooks/shared/useMedia";
import OrderMobile from "./mobile";
import { CartContext } from "@/providers/CartContext";
import useUserCart from "@/hooks/user/useUserCart";
import { redirect } from "next/navigation";
import PaymentCheckout from "./PaymentCheckout";

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
    return (
      <PaymentCheckout>
        <OrderMobile />
      </PaymentCheckout>
    );
  }

  return (
    <Container
      sx={{
        py: "48px",
        paddingX: {
          sm: "48px !important",
          lg: "0px !important",
        },
      }}
    >
      <PaymentCheckout>
        <OrderDesktop />
      </PaymentCheckout>
    </Container>
  );
};

export default Order;
