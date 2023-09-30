"use client";
import React from "react";
import PromotionDesktop from "./desktop";
import useMedia from "@/hooks/shared/useMedia";

const Promotion = () => {
  const { media } = useMedia();

  if (media) {
    return null;
  }
  return <PromotionDesktop />;
};

export default Promotion;
