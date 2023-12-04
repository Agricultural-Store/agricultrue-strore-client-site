"use client";
import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "../shared/icons/FacebookIcon";
import InstagramIcon from "../shared/icons/InstagramIcon";
import YoutubeIcon from "../shared/icons/YoutubeIcon";

const FooterDesktop = () => {
  return (
    <Container
      sx={{
        width: "100%",

        paddingX: {
          sm: "0px !important",
          lg: "0px !important",
        },
      }}
    >
      <Box
        position="relative"
        height="400px"
        bgcolor="#F4F5F6"
        pl="20px"
        pt="48px"
      >
        <Box
          sx={{
            width: "100%",
            pb: "16px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ width: "30%" }}>
              <Box
                component="img"
                src="/images/logo-dark.png"
              ></Box>
              <Typography
                whiteSpace="pre-line"
                sx={{ lineHeight: "32px" }}
              >
                {
                  "Địa chỉ: Khoa Công nghệ phần mềm, Trường Công nghệ \nThông tin & Truyền thông, Trường Đại học Cần Thơ"
                }
              </Typography>
              <Typography sx={{ lineHeight: "32px" }}>
                Điện thoại: (+84) 939 702 849
              </Typography>
              <Typography sx={{ lineHeight: "32px" }}>
                Email: hiepb1906474@student.ctu.edu.vn
              </Typography>
              <Box
                display="flex"
                gap="16px"
                mt="16px"
              >
                <FacebookIcon />
                <InstagramIcon />
                <YoutubeIcon />
              </Box>
            </Box>
            <Box sx={{ width: "70%", display: "flex", justifyContent: "end" }}>
              <Box sx={{ width: "30%" }}>
                <Typography
                  sx={{ lineHeight: "32px", fontSize: "18px", fontWeight: "bold" }}
                >
                  THÔNG TIN
                </Typography>
                <Typography sx={{ lineHeight: "32px", pt: "16px" }}>Tầm nhìn</Typography>
                <Typography sx={{ lineHeight: "32px", pt: "16px" }}>Sứ mệnh</Typography>
                <Typography sx={{ lineHeight: "32px", pt: "16px" }}>Dự án</Typography>
                <Typography sx={{ lineHeight: "32px", pt: "16px" }}>Hỗ trợ</Typography>
              </Box>
              <Box sx={{ width: "30%" }}>
                <Typography
                  sx={{ lineHeight: "32px", fontSize: "18px", fontWeight: "bold" }}
                >
                  DỊCH VỤ
                </Typography>
                <Typography sx={{ lineHeight: "32px", pt: "16px" }}>
                  Về dịch vụ
                </Typography>
                <Typography sx={{ lineHeight: "32px", pt: "16px" }}>
                  Câu hỏi thường gặp
                </Typography>
                <Typography sx={{ lineHeight: "32px", pt: "16px" }}>Đội ngũ</Typography>
                <Typography sx={{ lineHeight: "32px", pt: "16px" }}>
                  Trở thành đối tác
                </Typography>
              </Box>
              <Box sx={{ width: "30%" }}>
                <Typography
                  sx={{ lineHeight: "32px", fontSize: "18px", fontWeight: "bold" }}
                >
                  SITE MAP
                </Typography>
                <Typography sx={{ lineHeight: "32px", pt: "16px" }}>
                  Giới thiệu
                </Typography>
                <Typography sx={{ lineHeight: "32px", pt: "16px" }}>Sản phẩm</Typography>
                <Typography sx={{ lineHeight: "32px", pt: "16px" }}>
                  Khuyến mãi
                </Typography>
                <Typography sx={{ lineHeight: "32px", pt: "16px" }}>Tin tức</Typography>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ pt: "38px" }}></Divider>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
              pt: "16px",
            }}
          >
            <Typography
              color="#606779"
              fontSize="14px"
            >
              Copyright 2023 © Huonggaoque. All right reserved
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
              <Typography
                color="#606779"
                fontSize="14px"
              >
                Privacy Policy
              </Typography>
              <Box
                sx={{
                  width: "5px",
                  height: "5px",
                  bgcolor: "#E6E8EC",
                  borderRadius: "50%",
                  mx: "16px",
                }}
              ></Box>
              <Typography
                color="#606779"
                fontSize="14px"
              >
                Terms of Use
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default FooterDesktop;
