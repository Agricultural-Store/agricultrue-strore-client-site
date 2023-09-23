"use client";
import React from "react";
import useMedia from "@/hooks/shared/useMedia";
import HomeDesktop from "./desktop";

const Home = () => {
  const { media } = useMedia();

  if (media) {
    return null;
  }

  return <HomeDesktop />;
};

export default Home;
