"use client";
import React, { useContext, useEffect } from "react";
import useMedia from "@/hooks/shared/useMedia";
import HomeDesktop from "./desktop";
import { AppContext } from "@/providers/AppContext";
import { useSearchParams } from "next/navigation";
import HomeMobile from "./mobile";

const Home = () => {
  const { media } = useMedia();
  const { setOpenAuth } = useContext(AppContext);
  const params = useSearchParams();

  useEffect(() => {
    const loginUrl = params.get("loginUrl");
    if (loginUrl) {
      setOpenAuth(true);
    }
  }, [params, setOpenAuth]);

  if (media) {
    return <HomeMobile />;
  }

  return <HomeDesktop />;
};

export default Home;
