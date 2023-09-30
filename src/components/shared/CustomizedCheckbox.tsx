"use client";

import { Box, Checkbox, Typography } from "@mui/material";
import React, { ChangeEvent } from "react";
import CircleCheckedIcon from "./icons/CircleCheckedIcon";
import CircleUncheckIcon from "./icons/CircleUncheckIcon";

type Props = {
  label?: string;
  value?: string | number;
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  defaultChecked?: boolean;
};

const CustomizedCheckbox = ({
  label,
  value,
  defaultChecked,
  checked,
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
        width="30rem"
        height="30rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        mr="8rem"
      >
        <Checkbox
          id={value?.toString()}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={handleChange}
          icon={<CircleUncheckIcon />}
          checkedIcon={<CircleCheckedIcon />}
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
