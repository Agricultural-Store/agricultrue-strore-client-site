"use client";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

const HomeOutstanding = () => {
  const [content, setContent] = useState([
    {
      icon: "/images/ic-outstanding-1.svg",
      title: "Bảo Đảm Chất Lượng",
      content:
        "Lúa gạo ở vùng đồng bằng sông Cửu Long luôn đạt chất lượng tốt nhất, hạt gạo trắng mịn, dẻo thơm.",
    },
    {
      icon: "/images/ic-outstanding-2.svg",
      title: "Hương Vị Đặc Trưng",
      content:
        "Không chỉ đặc biệt ở hình dáng hạt gạo mà còn ở mùi thơm tự nhiên,  tạo nên những bát cơm ngon.",
    },
    {
      icon: "/images/ic-outstanding-3.svg",
      title: "Gắn Liền với Bản Sắc",
      content:
        "Mỗi hạt gạo đều chứa đựng tâm huyết, công sức của những người nông dân và truyền thống lâu đời",
    },
    {
      icon: "/images/ic-outstanding-4.svg",
      title: "Tiêu Chuẩn An Toàn",
      content:
        "Luôn được trồng và sản xuất dưới sự giám sát chặt chẽ, tuân theo tiêu chuẩn an toàn thực phẩm quốc tế.",
    },
  ]);

  return (
    <Box
      sx={{
        height: "425px",
        py: "48px",
        px: "30px",
        bgcolor: `color.bgPrimaryWithOpacity`,
      }}
    >
      <Typography
        sx={{
          textTransform: "capitalize",
          fontSize: "32px",
          lineHeight: "48px",
          textAlign: "center",
          fontWeight: 600,
        }}
      >
        Những điểm nổi bật
      </Typography>
      <Box sx={{ my: "48px", display: "flex", justifyContent: "space-between" }}>
        {content.map((co) => (
          <Box
            key={co.icon}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mx: "18px",
            }}
          >
            <Box
              component="img"
              src={co.icon}
            ></Box>
            <Typography
              sx={{
                fontSize: "20px",
                lineHeight: "30px",
                pt: "24px",
                pb: "12px",
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

export default HomeOutstanding;
