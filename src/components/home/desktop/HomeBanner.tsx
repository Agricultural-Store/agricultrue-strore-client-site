"use client";

import { Box, Button, Typography } from "@mui/material";
import React from "react";

const HomeBanner = () => {
  return (
    <Box sx={{ height: "600px", position: "relative" }}>
      <Box sx={{ height: "600px", position: "relative" }}>
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
          left: "48px",
        }}
      >
        <Typography
          sx={{ fontSize: "36px", lineHeight: "54px", color: "color.textWhite" }}
        >
          Vùng đất lúa gạo tươi tốt
        </Typography>
        <Typography
          sx={{ fontSize: "42px", lineHeight: "63px", color: "color.textPrimary300" }}
        >
          Sông Cửu Long
        </Typography>
        <Box
          component="img"
          src="/images/home-line.svg"
        ></Box>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "28.80px",
            color: "color.textWhite",
            whiteSpace: "pre-line",
          }}
        >
          {
            "Vùng đồng bằng Sông Cửu Long – Nơi bao la của những cánh đồng lúa xanh mướt, là\nnguồn cung cấp gạo ngon cho cả nước và quốc tế."
          }
        </Typography>
        <Box sx={{ mt: "36px" }}>
          <Button
            variant="contained"
            sx={{
              height: "42px",
              width: "150px",
              px: "24px",
              textTransform: "capitalize",
              mr: "12px",
            }}
          >
            Mua Ngay
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              height: "42px",
              width: "150px",
              px: "24px",
              textTransform: "capitalize",
              borderWidth: "2px",
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
