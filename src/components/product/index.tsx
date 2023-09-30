"use client";
import useMedia from "@/hooks/shared/useMedia";
import React from "react";
import ProductDesktop from "./desktop";

const Product = () => {
  const { media } = useMedia();

  if (media) {
    return null;
  }
  return <ProductDesktop />;
};

export default Product;
