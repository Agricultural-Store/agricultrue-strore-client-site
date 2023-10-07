"use client";

import ProfileBar from "@/components/profile/ProfileBar";
import { Box } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ProfileLayout = ({ children }: Props) => {
  return (
    <Box
      p="64px 48px"
      display="flex"
      justifyContent="space-between"
      bgcolor="color.bgNeutral200"
    >
      <ProfileBar />
      {children}
    </Box>
  );
};

export default ProfileLayout;
