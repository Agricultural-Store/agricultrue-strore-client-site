"use client";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import NewsList from "../news/NewsList";

const MainFooter = () => {
  return (
    <Box position="relative">
      <Box sx={{ pb: "48rem", mt: "120rem" }}>
        <NewsList />
      </Box>
      <Box sx={{}}>
        <Box
          component="img"
          width="100%"
          src="/images/footer-image.png"
        ></Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          p: "48rem",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ width: "30%" }}>
            <Box
              component="img"
              src="/images/logo-dark.png"
              sx={{ py: "16rem" }}
            ></Box>
            <Typography
              whiteSpace="pre-line"
              sx={{ lineHeight: "32rem" }}
            >
              {
                "Địa chỉ: Khoa Công nghệ phần mềm, Trường Công nghệ \nThông tin & Truyền thông, Trường Đại học Cần Thơ"
              }
            </Typography>
            <Typography sx={{ lineHeight: "32rem" }}>
              Điện thoại: (+84) 939 702 849
            </Typography>
            <Typography sx={{ lineHeight: "32rem" }}>
              Email: hiepb1906474@student.ctu.edu.vn
            </Typography>
          </Box>
          <Box sx={{ width: "70%", display: "flex", justifyContent: "end" }}>
            <Box sx={{ width: "30%" }}>
              <Typography
                sx={{ lineHeight: "32rem", fontSize: "18rem", fontWeight: "bold" }}
              >
                THÔNG TIN
              </Typography>
              <Typography sx={{ lineHeight: "32rem", pt: "16rem" }}>Tầm nhìn</Typography>
              <Typography sx={{ lineHeight: "32rem", pt: "16rem" }}>Sứ mệnh</Typography>
              <Typography sx={{ lineHeight: "32rem", pt: "16rem" }}>Dự án</Typography>
              <Typography sx={{ lineHeight: "32rem", pt: "16rem" }}>Hỗ trợ</Typography>
            </Box>
            <Box sx={{ width: "30%" }}>
              <Typography
                sx={{ lineHeight: "32rem", fontSize: "18rem", fontWeight: "bold" }}
              >
                DỊCH VỤ
              </Typography>
              <Typography sx={{ lineHeight: "32rem", pt: "16rem" }}>
                Về dịch vụ
              </Typography>
              <Typography sx={{ lineHeight: "32rem", pt: "16rem" }}>
                Câu hỏi thường gặp
              </Typography>
              <Typography sx={{ lineHeight: "32rem", pt: "16rem" }}>Đội ngũ</Typography>
              <Typography sx={{ lineHeight: "32rem", pt: "16rem" }}>
                Trở thành đối tác
              </Typography>
            </Box>
            <Box sx={{ width: "30%" }}>
              <Typography
                sx={{ lineHeight: "32rem", fontSize: "18rem", fontWeight: "bold" }}
              >
                SITE MAP
              </Typography>
              <Typography sx={{ lineHeight: "32rem", pt: "16rem" }}>
                Giới thiệu
              </Typography>
              <Typography sx={{ lineHeight: "32rem", pt: "16rem" }}>Sản phẩm</Typography>
              <Typography sx={{ lineHeight: "32rem", pt: "16rem" }}>
                Khuyến mãi
              </Typography>
              <Typography sx={{ lineHeight: "32rem", pt: "16rem" }}>Tin tức</Typography>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ pt: "38rem" }}></Divider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            pt: "16rem",
          }}
        >
          <Typography
            color="#606779"
            fontSize="14rem"
          >
            Copyright 2023 © Huonggaoque. All right reserved
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
            <Typography
              color="#606779"
              fontSize="14rem"
            >
              Privacy Policy
            </Typography>
            <Box
              sx={{
                width: "5rem",
                height: "5rem",
                bgcolor: "#E6E8EC",
                borderRadius: "50%",
                mx: "16rem",
              }}
            ></Box>
            <Typography
              color="#606779"
              fontSize="14rem"
            >
              Terms of Use
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainFooter;
