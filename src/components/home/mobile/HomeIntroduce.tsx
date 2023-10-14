"use client";

import { Box, Button, Typography } from "@mui/material";
import React from "react";
import NextIcon from "../../shared/icons/NextIcon";

const HomeIntroduce = () => {
  return (
    <Box sx={{ py: "48px" }}>
      <Box px="16px">
        <Typography
          sx={{
            textTransform: "capitalize",
            whiteSpace: "pre-line",
            fontSize: "20px",
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
          sx={{
            py: "16px",
            fontSize: "14px",
            lineHeight: "28px",
            fontWeight: "400px",
          }}
        >
          Đồng bằng Sông Cửu Long, nơi được mẹ thiên nhiên ưu đãi với hệ thống sông ngòi
          dày đặc, mang trong mình vẻ đẹp hùng vĩ của những dòng sông mẹ, là &quot;lá phổi
          xanh &quot; của cả nước. Khi nhắc đến Cửu Long, người ta không thể không nghĩ
          ngay đến biểu tượng của nền nông nghiệp: những cánh đồng lúa xanh bát ngát.
        </Typography>
        <Button
          variant="text"
          sx={{ display: "flex", alignItems: "center", textTransform: "capitalize" }}
        >
          <Box
            sx={{
              fontSize: {
                lg: "16px",
                xs: "14px",
              },
              paddingRight: "8px",
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
        src="/images/home-introduce.png"
        sx={{ width: "100%", mt: "24px" }}
      />
    </Box>
  );
};

export default HomeIntroduce;
