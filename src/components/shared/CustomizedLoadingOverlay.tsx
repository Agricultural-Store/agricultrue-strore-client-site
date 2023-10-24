"use client";
import React from "react";
import CustomizedLoading from "./CustomizedLoading";
import { Box } from "@mui/material";

const CustomizedLoadingOverlay = () => {
  return (
    <Box
      bgcolor="#00000070"
      width="100%"
      height="100vh"
      display="flex"
      position="fixed"
      top={0}
      left={0}
      zIndex={10000}
      justifyContent="center"
      alignItems="center"
    >
      <CustomizedLoading />
    </Box>
  );
};

export default CustomizedLoadingOverlay;
