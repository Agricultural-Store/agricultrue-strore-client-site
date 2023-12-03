"use client";

import { Container } from "@mui/material";
import React from "react";
import NewsDetailDesktop from "./desktop/NewsDetailDesktop";

const NewsDetail = () => {
  return (
    <Container
      sx={{
        paddingX: {
          sm: "48px !important",
          lg: "0px !important",
        },
        py: "64px",
      }}
    >
      <NewsDetailDesktop />
    </Container>
  );
};

export default NewsDetail;
