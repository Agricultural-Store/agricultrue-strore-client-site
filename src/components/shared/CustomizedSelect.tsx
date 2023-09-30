"use client";
import { MenuItem, Select } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { OptionType } from "@/types/shared";

type Props = {
  width?: number | string;
  menuItems: OptionType[];
};
const CustomizedSelect = ({ width, menuItems }: Props) => {
  return (
    <Select
      sx={{ borderRadius: 0, width: width ?? "222px", height: "46px" }}
      size="small"
      IconComponent={(params) => <KeyboardArrowDownIcon {...params} />}
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
