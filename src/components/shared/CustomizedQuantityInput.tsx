"use client";

import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MinusIcon from "./icons/MinusIcon";
import PlusIcon from "./icons/PlusIcon";

type Props = {
  defaultValue?: number;
  onDecreaseChange?: (value: number) => void;
  onIncreaseChange?: (value: number) => void;
  maxValue?: number;
};

const CustomizedQuantityInput = ({
  defaultValue,
  onDecreaseChange,
  onIncreaseChange,
  maxValue,
}: Props) => {
  if (defaultValue && maxValue && defaultValue > maxValue) {
    throw new Error("Default value must less than max value");
  }
  const [value, setValue] = useState(defaultValue ?? 1);

  const handleDecreaseChange = () => {
    if (value > 0) {
      onDecreaseChange?.(value - 1);
      setValue((pre) => pre - 1);
    }
  };

  const handleIncreaseChange = () => {
    if (maxValue) {
      if (value < maxValue) {
        onIncreaseChange?.(value + 1);
        setValue((pre) => pre + 1);
      }
    } else {
      onIncreaseChange?.(value + 1);
      setValue((pre) => pre + 1);
    }
  };

  useEffect(() => {
    if (defaultValue) setValue(defaultValue);
  }, [defaultValue]);

  return (
    <Box sx={{ display: "flex" }}>
      <Button
        variant="outlined"
        sx={{
          borderRadius: 0,
          borderTopLeftRadius: "2px",
          borderBottomLeftRadius: "2px",
          minWidth: "35px",
          maxWidth: "35px",
          height: "35px",
          p: 0,
          border: "1px solid",
        }}
        disabled={value == 0 ? true : false}
        onClick={handleDecreaseChange}
      >
        <MinusIcon />
      </Button>
      <Box sx={{ height: "35px", width: "35px", bgcolor: "color.bgPrimary" }}>
        <Typography
          sx={{ color: "color.textWhite", textAlign: "center", lineHeight: "35px" }}
        >
          {value}
        </Typography>
      </Box>
      <Button
        variant="outlined"
        sx={{
          borderRadius: 0,
          borderTopRightRadius: "2px",
          borderBottomRightRadius: "2px",
          minWidth: "35px",
          maxWidth: "35px",
          height: "35px",
          p: 0,
          border: "1px solid",
        }}
        onClick={handleIncreaseChange}
        disabled={maxValue ? (value < maxValue ? false : true) : false}
      >
        <PlusIcon />
      </Button>
    </Box>
  );
};

export default CustomizedQuantityInput;
