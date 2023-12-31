"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import ProfileOrderTab from "./ProfileOrderTab";

const ProfileOrderMobile = () => {
  return (
    <Box width="100%">
      <Box width="100%">
        <Box
          width="100%"
          py="16px"
        >
          <Typography
            fontSize="18px"
            fontWeight={500}
            textAlign="center"
          >
            Thông tin đơn hàng
          </Typography>
        </Box>
        <ProfileOrderTab />
      </Box>
    </Box>
  );
};

export default ProfileOrderMobile;
