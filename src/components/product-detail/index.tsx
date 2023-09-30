"use client";

import useMedia from "@/hooks/shared/useMedia";
import React from "react";
import ProductDetailDesktop from "./desktop";

const ProductDetail = () => {
  const { media } = useMedia();

  if (media) {
    return null;
  }
  return <ProductDetailDesktop />;
};

export default ProductDetail;
