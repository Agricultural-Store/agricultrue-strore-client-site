import DistanceIcon from "@/components/shared/icons/DistanceIcon";
import LanguageIcon from "@/components/shared/icons/LanguageIcon";
import MailIcon from "@/components/shared/icons/MailIcon";
import PhoneForwardedIcon from "@/components/shared/icons/PhoneForwardedIcon";
import { Box, Typography } from "@mui/material";
import React from "react";

const ContactInformation = () => {
  return (
    <Box mb="48px">
      <Typography
        variant="h1"
        mb="24px"
        fontSize="20px"
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
          <Box width="30px">
            <DistanceIcon />
          </Box>
          <Typography fontSize="14px">
            Khoa Công nghệ phần mềm, Trường Công nghệ Thông tin & Truyền thông, Trường Đại
            học Cần Thơ
          </Typography>
        </Box>
        <Box
          display="flex"
          gap="12px"
        >
          <Box width="30px">
            <PhoneForwardedIcon />
          </Box>
          <Typography fontSize="14px">Điện thoại: 0123 456 789</Typography>
        </Box>
        <Box
          display="flex"
          gap="12px"
        >
          <Box width="30px">
            <MailIcon />
          </Box>
          <Typography fontSize="14px">info@huonggaoque.com.vn</Typography>
        </Box>
        <Box
          display="flex"
          gap="12px"
        >
          <Box width="30px">
            <LanguageIcon />
          </Box>
          <Typography>Website: https://huonggaoque.vn</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactInformation;
