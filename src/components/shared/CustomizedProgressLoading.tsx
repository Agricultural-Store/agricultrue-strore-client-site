"use client";

import { Box } from "@mui/material";
import React from "react";

const CustomizedProgressLoading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
    >
      <Box
        sx={{
          "& div": {
            bgcolor: "white",
          },
        }}
        className="lds-ellipsis"
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Box>
    </Box>
  );
};

export default CustomizedProgressLoading;
