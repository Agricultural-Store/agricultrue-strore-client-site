"use client";

import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import PreviousIcon from "../../shared/icons/PreviousArrowIcon";
import NextArrowIcon from "../../shared/icons/NextArrowIcon";

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
        py: "48px",
        height: "550px",
        position: "relative",
      }}
    >
      <Box px="16px">
        <Typography
          sx={{
            fontSize: "28px",
            lineHeight: "42px",
            fontWeight: 600,
            textAlign: "center",
            mb: "16px",
          }}
        >
          Tầm nhìn và sứ mệnh
        </Typography>
        <Typography sx={{ fontSize: "14px", textAlign: "center", lineHeight: "28px" }}>
          Chúng tôi tin vào sức mạnh của sự kết nối. Thông qua việc hợp tác chặt chẽ với
          các nông dân, tổ chức và doanh nghiệp địa phương, chúng tôi muốn tạo ra một mạng
          lưới hỗ trợ lẫn nhau, đồng thời góp phần phát triển kinh tế và xã hội cho vùng
          Đồng Bằng Sông Cửu Long.
        </Typography>
      </Box>

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
            src="/images/home-vision-5.png"
            sx={{
              width: "310px",
              height: "200px",
              position: "absolute",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            top: -20,
            display: "flex",
            justifyContent: "space-between",
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "7px",
          alignItems: "center",
          mt: "24px",
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Box
          sx={{
            height: "7px",
            width: tabIndex == 0 ? "21px" : "7px",
            borderRadius: "100px",
            bgcolor: "#63811E",
            transition: ".5s",
            opacity: tabIndex == 0 ? 1 : 0.24,
          }}
        ></Box>
        <Box
          sx={{
            height: "7px",
            width: tabIndex == 1 ? "21px" : "7px",
            borderRadius: "100px",
            bgcolor: "#63811E",
            transition: ".5s",
            opacity: tabIndex == 1 ? 1 : 0.24,
          }}
        ></Box>
        <Box
          sx={{
            height: "7px",
            width: tabIndex == 2 ? "21px" : "7px",
            borderRadius: "100px",
            bgcolor: "#63811E",
            transition: ".5s",
            opacity: tabIndex == 2 ? 1 : 0.24,
          }}
        ></Box>
        <Box
          sx={{
            height: "7px",
            width: tabIndex == 3 ? "21px" : "7px",
            borderRadius: "100px",
            bgcolor: "#63811E",
            transition: ".5s",
            opacity: tabIndex == 3 ? 1 : 0.24,
          }}
        ></Box>
        <Box
          sx={{
            height: "7px",
            width: tabIndex == 4 ? "21px" : "7px",
            borderRadius: "100px",
            bgcolor: "#63811E",
            transition: ".5s",
            opacity: tabIndex == 4 ? 1 : 0.24,
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default HomeVision;
