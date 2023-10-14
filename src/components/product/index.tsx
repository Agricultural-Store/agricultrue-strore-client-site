"use client";
import useMedia from "@/hooks/shared/useMedia";
import React from "react";
import ProductDesktop from "./desktop";
import ProductMobile from "./mobile";

const Product = () => {
  const { media } = useMedia();

  if (media) {
    return <ProductMobile />;
  }
  return <ProductDesktop />;
};

export default Product;
