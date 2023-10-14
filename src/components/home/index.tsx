"use client";
import React, { useContext, useEffect } from "react";
import useMedia from "@/hooks/shared/useMedia";
import HomeDesktop from "./desktop";
import { AppContext } from "@/providers/AppContext";
import { useSearchParams } from "next/navigation";
import HomeMobile from "./mobile";
import { Box } from "@mui/material";
import News from "../news";

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
    return (
      <>
        <HomeMobile />;
        <Box sx={{ pb: "48px", mt: "120px" }}>
          <News />
        </Box>
      </>
    );
  }

  return (
    <>
      <HomeDesktop />;
      <Box sx={{ pb: "48px", mt: "120px" }}>
        <News />
      </Box>
    </>
  );
};

export default Home;
