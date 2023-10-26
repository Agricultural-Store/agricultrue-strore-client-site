"use client";

import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import PreviousIcon from "../../shared/icons/PreviousArrowIcon";
import NextArrowIcon from "../../shared/icons/NextArrowIcon";
import { Variants, motion } from "framer-motion";

const opacityVariants: Variants = {
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
      delay: 0.25,
    },
  },
};
const HomeVision = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleNext = () => {
    if (tabIndex < 4) {
      setTabIndex((pre) => pre + 1);
    }
  };

  const handlePrevious = () => {
    if (tabIndex > 0) {
      setTabIndex((pre) => pre - 1);
    }
  };

  return (
    <Box
      sx={{
        height: "653px",
        p: "64px",
        px: "48px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Typography sx={{ fontSize: "28px", lineHeight: "42px", fontWeight: 600 }}>
        Tầm nhìn và sứ mệnh
      </Typography>
      <Typography
        sx={{ width: "70%", mx: "auto", textAlign: "center", mt: "24px", mb: "48px" }}
      >
        Chúng tôi tin vào sức mạnh của sự kết nối. Thông qua việc hợp tác chặt chẽ với các
        nông dân, tổ chức và doanh nghiệp địa phương, chúng tôi muốn tạo ra một mạng lưới
        hỗ trợ lẫn nhau, đồng thời góp phần phát triển kinh tế và xã hội cho vùng Đồng
        Bằng Sông Cửu Long.
      </Typography>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        style={{ width: "100%" }}
      >
        <motion.div
          variants={opacityVariants}
          style={{ position: "relative" }}
        >
          <Box sx={{ width: "100%", position: "relative", top: 150 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                left: "50%",
                m: "0 auto",
                width: "80%",
              }}
            >
              <Box
                component="img"
                src="/images/home-vision-1.png"
                sx={{
                  width: "354px",
                  height: "200px",
                  position: "absolute",
                  left: "10%",
                }}
              ></Box>
              <Box
                component="img"
                src="/images/home-vision-2.png"
                sx={{
                  width: "354px",
                  height: "200px",
                  transform: "scale(1.2)",
                  position: "absolute",
                  objectFit: "cover",
                  left: "20%",
                  zIndex: 2,
                  borderRadius: "5px",
                }}
              ></Box>
              <Box
                component="img"
                src="/images/home-vision-3.png"
                sx={{
                  width: "354px",
                  height: "200px",
                  transform: "scale(1.4)",
                  position: "absolute",
                  zIndex: 3,
                  borderRadius: "5px",
                }}
              ></Box>
              <Box
                component="img"
                src="/images/home-vision-4.png"
                sx={{
                  width: "354px",
                  height: "200px",
                  position: "absolute",
                  transform: "scale(1.2)",
                  right: "20%",
                  zIndex: 2,
                  borderRadius: "5px",
                }}
              ></Box>
              <Box
                component="img"
                src="/images/home-vision-5.png"
                sx={{
                  width: "354px",
                  height: "200px",
                  position: "absolute",
                  right: "10%",
                }}
              ></Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                position: "absolute",
                top: -20,
                // transform: "translateY(50%)",
                display: "flex",
                justifyContent: "space-between",
                px: "18px",
              }}
            >
              <IconButton onClick={handlePrevious}>
                <PreviousIcon />
              </IconButton>
              <IconButton onClick={handleNext}>
                <NextArrowIcon />
              </IconButton>
            </Box>
          </Box>
        </motion.div>
      </motion.div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "7px",
          alignItems: "center",
          mt: "24px",
          position: "absolute",
          bottom: 0,
        }}
      >
        <Box
          sx={{
            height: "7px",
            width: tabIndex == 0 ? "21px" : "7px",
            borderRadius: "100px",
            bgcolor: "#63811E",
            transition: ".5s",
          }}
        ></Box>
        <Box
          sx={{
            height: "7px",
            width: tabIndex == 1 ? "21px" : "7px",
            borderRadius: "100px",
            bgcolor: "#63811E",
            transition: ".5s",
          }}
        ></Box>
        <Box
          sx={{
            height: "7px",
            width: tabIndex == 2 ? "21px" : "7px",
            borderRadius: "100px",
            bgcolor: "#63811E",
            transition: ".5s",
          }}
        ></Box>
        <Box
          sx={{
            height: "7px",
            width: tabIndex == 3 ? "21px" : "7px",
            borderRadius: "100px",
            bgcolor: "#63811E",
            transition: ".5s",
          }}
        ></Box>
        <Box
          sx={{
            height: "7px",
            width: tabIndex == 4 ? "21px" : "7px",
            borderRadius: "100px",
            bgcolor: "#63811E",
            transition: ".5s",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default HomeVision;
