"use client";

import { Box, Button, Typography } from "@mui/material";
import React from "react";
import NextIcon from "../../shared/icons/NextIcon";

const HomeIntroduce = () => {
  return (
    <Box sx={{ height: "500rem", px: "48rem", py: "64rem", display: "flex" }}>
      <Box
        component="img"
        src="/images/home-introduce.png"
        sx={{ width: "50%" }}
      />
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexDirection: "column",
          ml: "64rem",
          width: "calc(100% - 50%)",
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
          Sự đặc biệt của{" "}
          <Typography
            component="span"
            sx={{ color: "color.textPrimary300", fontSize: "inherit", fontWeight: 600 }}
          >
            Lúa gạo vùng đồng bằng
          </Typography>
          {" Sông cửu Long"}
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
          Đồng bằng Sông Cửu Long, nơi được mẹ thiên nhiên ưu đãi với hệ thống sông ngòi
          dày đặc, mang trong mình vẻ đẹp hùng vĩ của những dòng sông mẹ, là "lá phổi
          xanh" của cả nước. Khi nhắc đến Cửu Long, người ta không thể không nghĩ ngay đến
          biểu tượng của nền nông nghiệp: những cánh đồng lúa xanh bát ngát.
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
    </Box>
  );
};

export default HomeIntroduce;
