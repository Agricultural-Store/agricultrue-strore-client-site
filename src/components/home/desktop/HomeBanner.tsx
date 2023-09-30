"use client";

import { Box, Button, Typography } from "@mui/material";
import React from "react";

const HomeBanner = () => {
  return (
    <Box sx={{ height: "600rem", position: "relative" }}>
      <Box sx={{ height: "600rem", position: "relative" }}>
        <Box
          component="img"
          src="/images/home-banner.png"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0.6), transparent,transparent)",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "48rem",
        }}
      >
        <Typography
          sx={{
            fontSize: "36rem",
            lineHeight: "54rem",
            color: "color.textWhite",
            fontWeight: 600,
          }}
        >
          Vùng đất lúa gạo tươi tốt
        </Typography>
        <Typography
          sx={{
            fontSize: "42rem",
            lineHeight: "63rem",
            color: "color.textPrimary300",
            fontWeight: 600,
          }}
        >
          Sông Cửu Long
        </Typography>
        <Box
          component="img"
          src="/images/home-line.svg"
        ></Box>
        <Typography
          sx={{
            fontSize: "16rem",
            fontWeight: 400,
            lineHeight: "28.80rem",
            color: "color.textWhite",
            whiteSpace: "pre-line",
          }}
        >
          {
            "Vùng đồng bằng Sông Cửu Long – Nơi bao la của những cánh đồng lúa xanh mướt, là\nnguồn cung cấp gạo ngon cho cả nước và quốc tế."
          }
        </Typography>
        <Box sx={{ mt: "36rem" }}>
          <Button
            variant="contained"
            sx={{
              height: "42rem",
              width: "150rem",
              px: "24rem",
              textTransform: "capitalize",
              mr: "12rem",
            }}
          >
            Mua Ngay
          </Button>
          <Button
            variant="outlined"
            sx={{
              height: "42rem",
              width: "150rem",
              px: "24rem",
              textTransform: "capitalize",
              borderWidth: "2rem",
              borderColor: "#D9EDD7",
              color: "#D9EDD7",
            }}
          >
            Liên Hệ
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeBanner;
