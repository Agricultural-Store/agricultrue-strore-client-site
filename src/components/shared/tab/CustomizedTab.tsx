"use client";

import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

type Props = {
  children: ReactNode;
  value: number;
  onChange: (value: number) => void;
  labels: string[];
};

export default function CustomizedTab({ children, value, onChange, labels }: Props) {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    onChange(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons={false}
        >
          {labels.map((value) => (
            <Tab
              key={value}
              label={value}
              sx={{
                textTransform: "capitalize",
                fontWeight: 700,
                color: "color.textNeutral400",
              }}
            />
          ))}
        </Tabs>
      </Box>
      {children}
    </Box>
  );
}
