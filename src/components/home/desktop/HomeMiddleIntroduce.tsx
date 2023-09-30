"use client";

import { Box, Button, Typography } from "@mui/material";
import React from "react";
import NextIcon from "../../shared/icons/NextIcon";

const HomeMiddleIntroduce = () => {
  return (
    <Box sx={{ height: "558rem", px: "48rem", py: "64rem", display: "flex" }}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexDirection: "column",
          mr: "64rem",
        }}
      >
        <Typography
          sx={{
            textTransform: "capitalize",
            whiteSpace: "pre-line",
            fontSize: "28rem",
            fontWeight: 600,
          }}
        >
          Sự Kết Hợp Hoàn Mỹ của Vị Ngon và
        </Typography>
        <Typography
          sx={{ color: "color.textPrimary300", fontSize: "28rem", fontWeight: 600 }}
        >
          Lợi Ích Sức Khỏe
        </Typography>
        <Typography
          className="line-clamp-5"
          sx={{
            py: "16rem",
            fontSize: "16rem",
            lineHeight: "28rem",
            fontWeight: "400rem",
            maxHeight: "150rem",
          }}
        >
          Khi nói đến gạo Đồng Bằng Sông Cửu Long, người ta thường nghĩ đến những hạt gạo
          trắng mịn, bóng lộn trong lòng bàn tay, thơm nức từ xa và dẻo thơm trên đầu môi.
          Nhưng không chỉ có vậy, gạo từ vùng đất này còn nổi tiếng với những giá trị dinh
          dưỡng vượt trội, góp phần bảo vệ và tăng cường sức khỏe cho người tiêu dùng.
        </Typography>
        <Button
          variant="text"
          sx={{ display: "flex", alignItems: "center", textTransform: "capitalize" }}
        >
          <Box
            sx={{
              fontSize: {
                lg: "16rem",
                xs: "14rem",
              },
              paddingRight: "8rem",
              textTransform: "capitalize",
            }}
          >
            Tìm hiểu thêm
          </Box>
          <NextIcon />
        </Button>
      </Box>
      <Box
        component="img"
        src="/images/home-middle-introduce.png"
        sx={{ width: "50%" }}
      />
    </Box>
  );
};

export default HomeMiddleIntroduce;
