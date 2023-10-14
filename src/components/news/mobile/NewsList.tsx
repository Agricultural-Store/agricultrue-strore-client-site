"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import NewsItem from "../NewsItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const NewsListMobile = () => {
  return (
    <Box>
      <Typography
        sx={{ my: "48px", textAlign: "center", fontSize: "28px", fontWeight: 600 }}
      >
        Tin Tức
      </Typography>
      <Box
        sx={{ width: "100%", height: "auto", position: "relative", overflow: "hidden" }}
      >
        <Box mb="12px">
          <NewsItem />
        </Box>
        <Box mb="12px">
          <NewsItem />
        </Box>{" "}
        <Box mb="12px">
          <NewsItem />
        </Box>{" "}
        <Box mb="12px">
          <NewsItem />
        </Box>
      </Box>
    </Box>
  );
};

export default NewsListMobile;
