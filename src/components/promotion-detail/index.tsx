"use client";

import useMedia from "@/hooks/shared/useMedia";
import React from "react";
import PromotionDetailDesktop from "./desktop";
import ProductDetailMobile from "./mobile";

const PromotionDetail = () => {
  const { media } = useMedia();

  if (media) {
    return <ProductDetailMobile />;
  }
  return <PromotionDetailDesktop />;
};

export default PromotionDetail;
