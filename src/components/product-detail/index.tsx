"use client";

import useMedia from "@/hooks/shared/useMedia";
import React from "react";
import ProductDetailDesktop from "./desktop";
import ProductDetailMobile from "./mobile";

const ProductDetail = () => {
  const { media } = useMedia();

  if (media) {
    return <ProductDetailMobile />;
  }
  return <ProductDetailDesktop />;
};

export default ProductDetail;
