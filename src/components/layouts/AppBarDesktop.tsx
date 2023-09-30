"use client";
import { webNavigation } from "@/config/navigation";
import { Box, Typography } from "@mui/material";
import React from "react";
import CustomizeLink from "../shared/CustomizeLink";

const AppBarWeb = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pl: "42rem",
        gap: "42rem",
      }}
    >
      {webNavigation.map((nav) => (
        <CustomizeLink
          href={nav.href}
          key={nav.href}
        >
          {nav.label.toLocaleUpperCase()}
        </CustomizeLink>
      ))}
    </Box>
  );
};

export default AppBarWeb;
