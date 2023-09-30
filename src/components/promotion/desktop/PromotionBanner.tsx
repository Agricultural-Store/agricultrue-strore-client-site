import { Box, Typography } from "@mui/material";
import React from "react";

const PromotionBanner = () => {
  return (
    <Box sx={{ height: "600rem", position: "relative" }}>
      <Box sx={{ height: "600rem", position: "relative" }}>
        <Box
          component="img"
          src="/images/promotion-banner.png"
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
            fontSize: "42rem",
            lineHeight: "63rem",
            color: "color.textPrimary300",
            fontWeight: 600,
          }}
        >
          Combo Tiết Kiệm
        </Typography>
        <Typography
          sx={{
            fontSize: "36rem",
            lineHeight: "54rem",
            color: "color.textWhite",
            fontWeight: 600,
          }}
        >
          Tận Hưởng Đầy Đủ Hương Vị Gạo
        </Typography>
        <Typography
          sx={{
            fontSize: "16rem",
            fontWeight: 400,
            lineHeight: "28.80rem",
            color: "color.textWhite",
            whiteSpace: "pre-line",
            mt: "36rem",
          }}
        >
          {
            "Cơ hội vàng để bạn và gia đình thêm phần phong phú bữa ăn, thêm \nphần khỏe mạnh cuộc sống."
          }
        </Typography>
        <Box sx={{ mt: "36rem" }}></Box>
      </Box>
    </Box>
  );
};

export default PromotionBanner;
