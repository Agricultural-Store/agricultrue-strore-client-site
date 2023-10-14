import { Box, Typography } from "@mui/material";
import React from "react";

const PromotionBanner = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src="/images/promotion-banner-mobile.png"
          sx={{ width: "100%" }}
        />
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.6)",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 15,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          px: "16px",
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            lineHeight: "48px",
            color: "color.textPrimary300",
            fontWeight: 600,
          }}
        >
          Combo Tiết Kiệm
        </Typography>
        <Typography
          sx={{
            fontSize: "26px",
            lineHeight: "39px",
            color: "color.textWhite",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Tận Hưởng Đầy Đủ Hương Vị Gạo
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "28.80px",
            color: "color.textWhite",
            whiteSpace: "pre-line",
            mt: "24px",
            textAlign: "center",
          }}
        >
          {
            "Cơ hội vàng để bạn và gia đình thêm phần phong phú bữa ăn, thêm phần khỏe mạnh cuộc sống."
          }
        </Typography>
        <Box sx={{ mt: "36px" }}></Box>
      </Box>
    </Box>
  );
};

export default PromotionBanner;
