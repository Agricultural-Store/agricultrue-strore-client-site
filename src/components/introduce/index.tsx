"use client";
import useMedia from "@/hooks/shared/useMedia";
import React from "react";
import IntroduceDesktop from "./desktop";

const Introduce = () => {
  const { media } = useMedia();

  if (media) {
    return null;
  }

  return <IntroduceDesktop />;
};

export default Introduce;
