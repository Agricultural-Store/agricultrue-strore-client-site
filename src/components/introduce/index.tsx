"use client";
import useMedia from "@/hooks/shared/useMedia";
import React from "react";
import IntroduceDesktop from "./desktop";
import IntroduceMobile from "./mobile";

const Introduce = () => {
  const { media } = useMedia();

  if (media) {
    return <IntroduceMobile />;
  }

  return <IntroduceDesktop />;
};

export default Introduce;
