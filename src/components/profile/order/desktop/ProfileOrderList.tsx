import React from "react";
import ProfileOrderItem from "./ProfileOrderItem";
import { Box } from "@mui/material";

const ProfileOrderList = () => {
  return (
    <Box my="24px">
      <ProfileOrderItem />
      <ProfileOrderItem />
      <ProfileOrderItem />
      <ProfileOrderItem />
    </Box>
  );
};

export default ProfileOrderList;
