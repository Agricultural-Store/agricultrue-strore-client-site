/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { OptionType } from "@/types/shared";

type Props = {
  width?: number | string;
  menuItems: OptionType[];
  value?: any;
  onChange?: (value: any) => void;
};
const CustomizedSelect = ({ width, menuItems, value, onChange }: Props) => {
  const handleChange = (e: SelectChangeEvent<any>) => {
    e.stopPropagation();
    onChange?.(e.target.value);
  };

  return (
    <Select
      sx={{ borderRadius: 0, width: width ?? "222px", height: "46px" }}
      size="small"
      value={value}
      onChange={handleChange}
      IconComponent={(params) => <KeyboardArrowDownIcon {...params} />}
      MenuProps={{
        slotProps: {
          paper: {
            sx: {
              // bgcolor: "color.bgNeutral200",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            },
          },
        },
      }}
    >
      {menuItems.map((menuItem) => (
        <MenuItem
          value={menuItem.value}
          key={menuItem.value}
        >
          {menuItem.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CustomizedSelect;
