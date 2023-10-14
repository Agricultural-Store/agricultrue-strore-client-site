"use client";
import React from "react";
import useMedia from "@/hooks/shared/useMedia";
import FooterMobile from "./FooterMobile";
import FooterDesktop from "./FooterDesktop";

const MainFooter = () => {
  const { media } = useMedia();
  if (media) return <FooterMobile />;
  return <FooterDesktop />;
};

export default MainFooter;
