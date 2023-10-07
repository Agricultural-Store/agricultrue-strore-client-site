import { AutoCompleteOption } from "@/types/components/autocomplete";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React, { SyntheticEvent } from "react";

type Props = {
  options: AutoCompleteOption[];
  label?: string;
  placeholder?: string;
  fullWidth?: boolean;
  onInputChange?: (value: string) => void;
  onChange?: (value: null | AutoCompleteOption | string) => void;
};
const CustomizedAutocomplete = ({
  options,
  label,
  placeholder,
  fullWidth,
  onInputChange,
  onChange,
}: Props) => {
  const handleInputChange = (event: SyntheticEvent<Element, Event>, value: string) => {
    onInputChange?.(value);
  };

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string | AutoCompleteOption | null,
  ) => {
    onChange?.(value);
  };

  return (
    <Autocomplete
      freeSolo
      options={options}
      fullWidth={fullWidth}
      onChange={handleChange}
      onInputChange={handleInputChange}
      getOptionLabel={(option) => {
        if (typeof option === "string") {
          return option;
        }
        return option.label;
      }}
      renderOption={(props, option) => (
        <li
          {...props}
          key={`${option.value}-${Math.random() * 10000000}`}
        >
          {option.label}
        </li>
      )}
      renderInput={(params) => (
        <Box
          width="100%"
          sx={{ position: "relative" }}
        >
          {label && (
            <Typography
              sx={{
                position: "absolute",
                top: -12,
                left: "16px",
                bgcolor: "color.bgWhite",
                px: "5px",
                height: "20px",
                zIndex: 1,
              }}
            >
              {label}
            </Typography>
          )}
          <TextField
            {...params}
            placeholder={placeholder}
          />
        </Box>
      )}
    ></Autocomplete>
  );
};

export default CustomizedAutocomplete;
