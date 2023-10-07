"use client";

import { Box, OutlinedInput, Typography, OutlinedInputProps } from "@mui/material";
import React from "react";
type Props = OutlinedInputProps;

const CustomizedInput = ({ label, ...props }: Props) => {
  return (
    <Box
      width="100%"
      sx={{ position: "relative" }}
    >
      {label && (
        <Typography
          sx={{
            position: "absolute",
            top: -12,
            left: "10px",
            bgcolor: "color.bgWhite",
            px: "5px",
            height: "20px",
            zIndex: 1,
          }}
        >
          {label}
        </Typography>
      )}
      <OutlinedInput {...props} />
    </Box>
  );
};

export default CustomizedInput;