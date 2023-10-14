"use client";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const HomeCertification = () => {
  return (
    <Box
      sx={{
        py: "48px",
        bgcolor: `color.bgPrimaryWithOpacity`,
        mt: "64px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography sx={{ fontSize: "20px", lineHeight: "42px", fontWeight: 600 }}>
        Chứng nhận sản phẩm
      </Typography>
      <Typography
        sx={{
          width: "80%",
          mx: "auto",
          fontSize: "14px",
          lineHeight: "28px",
          textAlign: "center",
          mt: "16px",
        }}
      >
        Vùng Đồng Bằng Sông Cửu Long đã có nhiều cố gắng trong việc nâng cao chất lượng và
        uy tín của sản phẩm gạo trên thị trường quốc tế.
      </Typography>
      <Grid
        container
        sx={{
          gap: 5,
          justifyContent: "center",
          mt: "24px",
          py: "24px",
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
      </Grid>
    </Box>
  );
};

export default HomeCertification;
