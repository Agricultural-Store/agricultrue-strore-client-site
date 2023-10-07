"use client";

import CustomizedInput from "@/components/shared/CustomizedInput";
import SearchGrayIcon from "@/components/shared/icons/SearchGrayIcon";
import { Box, Typography } from "@mui/material";
import React from "react";
import ProfileOrderTab from "./ProfileOrderTab";

const ProfileOrder = () => {
  return (
    <Box
      width="calc(100% - 250px)"
      pl="48px"
    >
      <Box
        bgcolor="color.bgWhite"
        width="100%"
      >
        <Box
          width="100%"
          display="flex"
          px="24px"
          pt="12px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            fontSize="32px"
            fontWeight={700}
          >
            Thông tin đơn hàng
          </Typography>
          <Box>
            <CustomizedInput
              size="small"
              sx={{ width: "203px" }}
              endAdornment={<SearchGrayIcon />}
              placeholder="Tìm kiếm"
            />
          </Box>
        </Box>
        <ProfileOrderTab />
      </Box>
    </Box>
  );
};

export default ProfileOrder;
