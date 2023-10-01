"use client";

import useMedia from "@/hooks/shared/useMedia";
import React from "react";
import AuthDesktop from "./desktop";

const Auth = () => {
  const { media } = useMedia();

  if (media) {
    return null;
  }

  return <AuthDesktop />;
};

export default Auth;
