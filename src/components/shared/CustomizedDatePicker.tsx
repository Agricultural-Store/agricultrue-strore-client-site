import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Typography } from "@mui/material";

type Props = {
  label?: string;
  onChange?: (value?: dayjs.Dayjs | null) => void;
  value?: dayjs.Dayjs | null;
};

function CustomizedDatePicker({ label, onChange, value }: Props) {
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
      <DatePicker
        sx={{ width: "100%" }}
        slotProps={{
          textField: {
            fullWidth: true,
            size: "small",
            sx: {
              "& .placeholder::placeholder": { color: "#B1B5C3" },
              "& fieldset": {
                borderColor: "#E6E8EC !important",
              },
              "&:hover fieldset": {
                borderColor: "#E6E8EC !important",
              },
              "&.Mui-focused fieldset": {
                borderWidth: "1px !important",
                borderColor: "#E6E8EC !important",
              },
            },
          },
        }}
        value={value}
        onChange={(newValue) => onChange?.(newValue)}
      />
    </Box>
  );
}
export default CustomizedDatePicker;
