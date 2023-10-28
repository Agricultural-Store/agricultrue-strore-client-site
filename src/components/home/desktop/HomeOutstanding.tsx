"use client";
import { Box, Typography } from "@mui/material";
import { Variants, motion } from "framer-motion";
import React, { useState } from "react";

const bottomVariants = (delay?: number): Variants => ({
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
      delay: delay ?? 0.25,
    },
  },
});
const HomeOutstanding = () => {
  const [content] = useState([
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
          fontSize: {
            lg: "32px",
            sm: "28px",
          },
          lineHeight: "48px",
          textAlign: "center",
          fontWeight: 600,
        }}
      >
        Những điểm nổi bật
      </Typography>
      <Box sx={{ my: "48px", display: "flex", justifyContent: "space-between" }}>
        {content.map((co, index) => (
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            style={{ width: "100%" }}
            key={co.icon}
          >
            <motion.div variants={bottomVariants(0.25 * index)}>
              <Box
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
                  className="line-clamp-1"
                  sx={{
                    fontSize: {
                      lg: "20px",
                      sm: "18px",
                    },
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
                  sx={{ textAlign: "center", fontSize: { lg: "16px", sm: "14px" } }}
                >
                  {co.content}
                </Typography>
              </Box>
            </motion.div>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default HomeOutstanding;
