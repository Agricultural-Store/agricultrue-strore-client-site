"use client";

import { Box, Checkbox, Typography } from "@mui/material";
import React, { ChangeEvent, ReactNode } from "react";
import CircleCheckedIcon from "./icons/CircleCheckedIcon";
import CircleUncheckIcon from "./icons/CircleUncheckIcon";

type Props = {
  label?: string;
  value?: string | number;
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  defaultChecked?: boolean;
  checkedIcon?: ReactNode;
};

const CustomizedCheckbox = ({
  label,
  value,
  defaultChecked,
  checked,
  checkedIcon,
  onChange,
}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    onChange?.(checked);
  };

  return (
    <Box
      display="flex"
      justifyContent="start"
      alignItems="center"
    >
      <Box
        width="30px"
        height="30px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        mr="8px"
      >
        <Checkbox
          id={value?.toString()}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={handleChange}
          icon={<CircleUncheckIcon />}
          checkedIcon={checkedIcon || <CircleCheckedIcon />}
        />
      </Box>
      <Typography
        component="label"
        htmlFor="123"
        sx={{ userSelect: "none", color: "color.textNeutral500" }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default CustomizedCheckbox;