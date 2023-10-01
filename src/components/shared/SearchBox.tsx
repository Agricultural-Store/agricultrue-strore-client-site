"use client";
import { Box, OutlinedInput } from "@mui/material";
import React, { ChangeEvent } from "react";
import SearchIconPlus from "./icons/SearchIconPlus";

type Props = {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

const SearchBox = ({ placeholder, value, onChange, defaultValue }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <OutlinedInput
      sx={{ borderRadius: 0, p: 0 }}
      onChange={handleChange}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      inputProps={{
        style: {
          padding: "10.5px 16px",
        },
      }}
      endAdornment={
        <Box
          sx={{
            bgcolor: "color.bgPrimary",
            height: "46px",
            width: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <SearchIconPlus />
        </Box>
      }
    />
  );
};

export default SearchBox;
