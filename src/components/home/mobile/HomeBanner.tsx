"use client";

import { Box, Button, Typography } from "@mui/material";
import React from "react";

const HomeBanner = () => {
  return (
    <Box sx={{ height: "375px", position: "relative" }}>
      <Box sx={{ height: "375px", position: "relative" }}>
        <Box
          component="img"
          src="/images/home-banner.png"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          transform: "translateY(-50%)",
          left: "0",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: "26px",
            lineHeight: "39px",
            color: "color.textWhite",
            fontWeight: 600,
          }}
        >
          Vùng đất lúa gạo tươi tốt
        </Typography>
        <Typography
          sx={{
            fontSize: "32px",
            lineHeight: "48px",
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
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "28.80px",
            color: "color.textWhite",
            whiteSpace: "pre-line",
            textAlign: "center",
            px: "10px",
          }}
        >
          {
            "Vùng đồng bằng Sông Cửu Long – Nơi bao la của những cánh đồng lúa xanh mướt, là nguồn cung cấp gạo ngon cho cả nước và quốc tế."
          }
        </Typography>
        <Box sx={{ mt: "16px" }}>
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
            sx={{
              height: "42px",
              width: "150px",
              px: "24px",
              textTransform: "capitalize",
              borderWidth: "2px",
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
