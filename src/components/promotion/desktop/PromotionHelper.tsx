"use client";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

const PromotionHelper = () => {
  const [content, setContent] = useState([
    {
      icon: "/images/promotion-helper-1.png",
      title: "Email hỗ trợ",
      content:
        "Chúng tôi sẽ cố gắng giải đáp câu hỏi và giúp bạn giải quyết vấn đề một cách nhanh chóng.",
    },
    {
      icon: "/images/promotion-helper-2.png",
      title: "Thanh toán an toàn",
      content:
        "Chúng tôi tự hào cung cấp một phương thức thanh toán tiện lợi và an toàn một cách dễ dàng.",
    },
    {
      icon: "/images/promotion-helper-3.png",
      title: "Miễn phí giao hàng",
      content:
        "Khi bạn đặt hàng trên trang web, chúng tôi sẽ giao hàng nhanh chóng, tiện lợi đến địa chỉ bạn.",
    },
    {
      icon: "/images/promotion-helper-4.png",
      title: "Đổi trả dễ dàng",
      content:
        "Chúng tôi cung cấp dịch vụ đổi trả dễ dàng giúp quý khách hàng có được trải nghiệm mua sắm tốt",
    },
  ]);

  return (
    <Box
      sx={{
        height: "425rem",
        py: "48rem",
        px: "30rem",
      }}
    >
      <Typography
        sx={{
          textTransform: "capitalize",
          fontSize: "32rem",
          lineHeight: "48rem",
          textAlign: "center",
          fontWeight: 600,
        }}
      >
        Dịch vụ hỗ trợ
      </Typography>
      <Box sx={{ my: "48rem", display: "flex", justifyContent: "space-between" }}>
        {content.map((co) => (
          <Box
            key={co.icon}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mx: "18rem",
            }}
          >
            <Box
              component="img"
              src={co.icon}
            ></Box>
            <Typography
              sx={{
                fontSize: "20rem",
                lineHeight: "30rem",
                pt: "24rem",
                pb: "12rem",
                fontWeight: 600,
              }}
            >
              {co.title}
            </Typography>
            <Typography
              className="line-clamp-3"
              sx={{ textAlign: "center" }}
            >
              {co.content}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PromotionHelper;
