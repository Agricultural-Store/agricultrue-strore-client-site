"use client";
import { Box, Typography } from "@mui/material";
import React from "react";

const HomeCertification = () => {
  return (
    <Box
      sx={{
        height: "425rem",
        py: "48rem",

        bgcolor: `color.bgPrimaryWithOpacity`,
        mt: "64rem",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography sx={{ fontSize: "28rem", lineHeight: "42rem", fontWeight: 600 }}>
        Chứng nhận sản phẩm
      </Typography>
      <Typography
        sx={{
          width: "80%",
          mx: "auto",
          fontSize: "16rem",
          lineHeight: "28rem",
          textAlign: "center",
          mt: "16rem",
        }}
      >
        Vùng Đồng Bằng Sông Cửu Long đã có nhiều cố gắng trong việc nâng cao chất lượng và
        uy tín của sản phẩm gạo trên thị trường quốc tế.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          gap: 5,
          mt: "24rem",
          py: "24rem",
        }}
      >
        <Box
          component="img"
          src="/images/home-certification-1.png"
        />
        <Box
          component="img"
          src="/images/home-certification-2.png"
        />
        <Box
          component="img"
          src="/images/home-certification-3.png"
        />
        <Box
          component="img"
          src="/images/home-certification-4.png"
        />
        <Box
          component="img"
          src="/images/home-certification-5.png"
        />
        <Box
          component="img"
          src="/images/home-certification-6.png"
        />
      </Box>
    </Box>
  );
};

export default HomeCertification;
