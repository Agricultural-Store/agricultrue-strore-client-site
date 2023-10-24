"use client";

import { Box } from "@mui/material";
import React from "react";

type Props = {
  color?: string;
  size?: "small" | "medium";
};

/** Display a fullscreen loading overlay */
function CustomizedLoading({ color, size }: Props) {
  return (
    <Box
      sx={{
        color: color || "white",
        position: "relative",
        width: size === "small" ? "50px" : "70px",
        height: size === "small" ? "50px" : "70px",
        textAlign: "center",
        lineHeight: size === "small" ? "50px" : "70px",
        fontSize: size === "small" ? "9px" : "11px",
        ":before": {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          width: "100%",
          height: "100%",
          border: "3px solid white",
          borderColor: `${color || "#fff"} ${color || "#fff"} transparent transparent`,
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
  );
}

export default CustomizedLoading;
