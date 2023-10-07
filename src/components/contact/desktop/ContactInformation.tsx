import DistanceIcon from "@/components/shared/icons/DistanceIcon";
import LanguageIcon from "@/components/shared/icons/LanguageIcon";
import MailIcon from "@/components/shared/icons/MailIcon";
import PhoneForwardedIcon from "@/components/shared/icons/PhoneForwardedIcon";
import { Box, Typography } from "@mui/material";
import React from "react";

const ContactInformation = () => {
  return (
    <Box width="45%">
      <Typography
        variant="h1"
        mb="48px"
      >
        Hương Gạo Quê
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        gap="24px"
      >
        <Box
          display="flex"
          gap="12px"
        >
          <DistanceIcon />
          <Typography>
            Khoa Công nghệ phần mềm, Trường Công nghệ Thông tin & Truyền thông, Trường Đại
            học Cần Thơ
          </Typography>
        </Box>
        <Box
          display="flex"
          gap="12px"
        >
          <PhoneForwardedIcon />
          <Typography>Điện thoại: 0123 456 789</Typography>
        </Box>
        <Box
          display="flex"
          gap="12px"
        >
          <MailIcon />
          <Typography>info@huonggaoque.com.vn</Typography>
        </Box>
        <Box
          display="flex"
          gap="12px"
        >
          <LanguageIcon />
          <Typography>Website: https://huonggaoque.vn</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactInformation;
