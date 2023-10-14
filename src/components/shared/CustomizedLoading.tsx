"use client";

import { Box } from "@mui/material";
import React from "react";

/** Display a fullscreen loading overlay */
function CustomizedLoading() {
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
      <Box
        sx={{
          color: "white",
          position: "relative",
          width: "70px",
          height: "70px",
          textAlign: "center",
          lineHeight: "70px",
          fontSize: "11px",
          ":before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            width: "100%",
            height: "100%",
            border: "3px solid white",
            borderColor: " #fff #fff transparent transparent",
            borderRadius: "50%",
            animation: "loading-animation 1s linear infinite",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            animation: "loading-animation 1s linear infinite",
            ":after": {
              content: "''",
              position: "absolute",
              top: "78%",
              left: "90%",
              transform: "translateX(-100%)",
              width: "10px",
              height: "10px",
              bgcolor: "white",
              borderRadius: "50%",
            },
          }}
        ></Box>
        Loading
      </Box>
    </Box>
  );
}

export default CustomizedLoading;
