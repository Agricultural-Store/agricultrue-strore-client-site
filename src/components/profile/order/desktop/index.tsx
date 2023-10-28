"use client";

import CustomizedInput from "@/components/shared/CustomizedInput";
import SearchGrayIcon from "@/components/shared/icons/SearchGrayIcon";
import { Box, Typography } from "@mui/material";
import React from "react";
import ProfileOrderTab from "./ProfileOrderTab";
import useMedia from "@/hooks/shared/useMedia";

const ProfileOrderDesktop = () => {
  const { media } = useMedia(1200);

  return (
    <Box
      width={media ? "100%" : "calc(100% - 250px)"}
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
            fontSize={media ? "24px" : "32px"}
            fontWeight={500}
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

export default ProfileOrderDesktop;
