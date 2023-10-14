"use client";
import React from "react";
import PromotionDesktop from "./desktop";
import useMedia from "@/hooks/shared/useMedia";
import PromotionMobile from "./mobile";

const Promotion = () => {
  const { media } = useMedia();

  if (media) {
    return <PromotionMobile />;
  }
  return <PromotionDesktop />;
};

export default Promotion;
