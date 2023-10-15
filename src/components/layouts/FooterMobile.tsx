import { Box, Typography, Divider } from "@mui/material";
import React from "react";
import FacebookIcon from "../shared/icons/FacebookIcon";
import InstagramIcon from "../shared/icons/InstagramIcon";
import YoutubeIcon from "../shared/icons/YoutubeIcon";

const FooterMobile = () => {
  return (
    <Box position="relative">
      <Box sx={{}}>
        <Box
          component="img"
          width="100%"
          src="/images/footer-image-mobile.png"
        ></Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          py: "48px",
          px: "16px",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              component="img"
              src="/images/logo-dark.png"
              sx={{ py: "16px" }}
            ></Box>
            <Typography
              sx={{ lineHeight: "28px", textAlign: "center", fontSize: "14px" }}
            >
              {
                "Địa chỉ: Khoa Công nghệ phần mềm, Trường Công nghệ Thông tin & Truyền thông, Trường Đại học Cần Thơ"
              }
            </Typography>
            <Typography
              sx={{
                lineHeight: "28px",
                textAlign: "center",
                fontSize: "14px",
                mt: "8px",
              }}
            >
              Điện thoại: (+84) 939 702 849
            </Typography>
            <Typography
              sx={{
                lineHeight: "28px",
                textAlign: "center",
                fontSize: "14px",
                mt: "8px",
              }}
            >
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                mt: "40px",
              }}
            >
              <Typography
                sx={{ lineHeight: "32px", fontSize: "18px", fontWeight: "bold" }}
              >
                THÔNG TIN
              </Typography>
              <Typography sx={{ lineHeight: "28px", fontSize: "14px", pt: "16px" }}>
                Tầm nhìn
              </Typography>
              <Typography sx={{ lineHeight: "28px", fontSize: "14px", pt: "16px" }}>
                Sứ mệnh
              </Typography>
              <Typography sx={{ lineHeight: "28px", fontSize: "14px", pt: "16px" }}>
                Dự án
              </Typography>
              <Typography sx={{ lineHeight: "28px", fontSize: "14px", pt: "16px" }}>
                Hỗ trợ
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                mt: "40px",
              }}
            >
              <Typography
                sx={{ lineHeight: "32px", fontSize: "18px", fontWeight: "bold" }}
              >
                DỊCH VỤ
              </Typography>
              <Typography sx={{ lineHeight: "28px", fontSize: "14px", pt: "16px" }}>
                Về dịch vụ
              </Typography>
              <Typography sx={{ lineHeight: "28px", fontSize: "14px", pt: "16px" }}>
                Câu hỏi thường gặp
              </Typography>
              <Typography sx={{ lineHeight: "28px", fontSize: "14px", pt: "16px" }}>
                Đội ngũ
              </Typography>
              <Typography sx={{ lineHeight: "28px", fontSize: "14px", pt: "16px" }}>
                Trở thành đối tác
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                mt: "40px",
              }}
            >
              <Typography
                sx={{ lineHeight: "32px", fontSize: "18px", fontWeight: "bold" }}
              >
                SITE MAP
              </Typography>
              <Typography sx={{ lineHeight: "28px", fontSize: "14px", pt: "16px" }}>
                Giới thiệu
              </Typography>
              <Typography sx={{ lineHeight: "28px", fontSize: "14px", pt: "16px" }}>
                Sản phẩm
              </Typography>
              <Typography sx={{ lineHeight: "28px", fontSize: "14px", pt: "16px" }}>
                Khuyến mãi
              </Typography>
              <Typography sx={{ lineHeight: "28px", fontSize: "14px", pt: "16px" }}>
                Tin tức
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ pt: "38px" }}></Divider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            pt: "16px",
          }}
        >
          <Typography
            color="#606779"
            fontSize="14px"
            textAlign="center"
          >
            Copyright 2023 © Huonggaoque. All right reserved
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "6px",
            }}
          >
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
  );
};

export default FooterMobile;
