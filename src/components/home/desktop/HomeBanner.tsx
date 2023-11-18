"use client";

import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next-intl/client";
import React from "react";

const HomeBanner = () => {
  const router = useRouter();

  const handleMoveContact = () => {
    router.push("/contact");
  };

  const handleMoveProduct = () => {
    router.push("/product");
  };

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
        <motion.div
          initial={{ opacity: 0, x: -600 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -600 }}
          transition={{ delay: 0.25 }}
        >
          <Typography
            sx={{
              fontSize: "36px",
              lineHeight: "54px",
              color: "color.textWhite",
              fontWeight: 600,
            }}
          >
            Vùng đất lúa gạo tươi tốt
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -600 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
        >
          <Typography
            sx={{
              fontSize: "42px",
              lineHeight: "63px",
              color: "color.textPrimary300",
              fontWeight: 600,
            }}
          >
            Sông Cửu Long
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <Box
            component="img"
            src="/images/home-line.svg"
          ></Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -600 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
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
        </motion.div>
        <Box sx={{ mt: "36px", display: "flex" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            <Button
              variant="contained"
              onClick={handleMoveProduct}
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            <Button
              variant="outlined"
              onClick={handleMoveContact}
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
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeBanner;
