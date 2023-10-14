"use client";
import useMedia from "@/hooks/shared/useMedia";
import React from "react";
import ProductDesktop from "./desktop";
import ProductMobile from "./mobile";
import { Box } from "@mui/material";
import News from "../news";

const Product = () => {
  const { media } = useMedia();

  if (media) {
    return (
      <>
        <ProductMobile />
        <Box sx={{ pb: "48px", mt: "60px" }}>
          <News />
        </Box>
      </>
    );
  }
  return (
    <>
      <ProductDesktop />
      <Box sx={{ pb: "48px", mt: "60px" }}>
        <News />
      </Box>
    </>
  );
};

export default Product;
