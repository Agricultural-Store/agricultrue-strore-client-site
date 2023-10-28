"use client";
import { Box, Typography } from "@mui/material";
import { Variants, motion } from "framer-motion";
import React from "react";

const certifications = [
  "/images/home-certification-1.png",
  "/images/home-certification-2.png",
  "/images/home-certification-3.png",
  "/images/home-certification-4.png",
  "/images/home-certification-5.png",
  "/images/home-certification-6.png",
];

const opacityVariants = (delay?: number): Variants => ({
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
      delay: delay ?? 0.25,
    },
  },
});
const HomeCertification = () => {
  return (
    <Box
      sx={{
        height: "425px",
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
      <Typography
        sx={{
          fontSize: {
            lg: "28px",
            sm: "24px",
          },
          lineHeight: "42px",
          fontWeight: 600,
        }}
      >
        Chứng nhận sản phẩm
      </Typography>
      <Typography
        sx={{
          width: "80%",
          mx: "auto",
          fontSize: {
            lg: "16px",
            sm: "14px",
          },
          lineHeight: "28px",
          textAlign: "center",
          mt: "16px",
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
          mt: "24px",
          py: "24px",
        }}
      >
        {certifications.map((certification, index) => (
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            style={{ width: "100%" }}
            key={certification}
          >
            <motion.div variants={opacityVariants(0.1 * index)}>
              <Box
                component="img"
                src={certification}
              />
            </motion.div>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default HomeCertification;
