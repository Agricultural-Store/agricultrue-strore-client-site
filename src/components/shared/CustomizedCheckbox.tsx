"use client";

import { Box, Checkbox, Typography } from "@mui/material";
import React, { ChangeEvent, ReactNode } from "react";
import CircleCheckedIcon from "./icons/CircleCheckedIcon";
import CircleUncheckIcon from "./icons/CircleUncheckIcon";

type Props = {
  label?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  checked?: boolean;
  defaultChecked?: boolean;
  checkedIcon?: ReactNode;
  name?: string;
};

const CustomizedCheckbox = ({
  label,
  value,
  defaultChecked,
  checked,
  checkedIcon,
  onChange,
  name,
}: Props) => {
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
          onChange={onChange}
          value={value}
          icon={<CircleUncheckIcon />}
          name={name}
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
