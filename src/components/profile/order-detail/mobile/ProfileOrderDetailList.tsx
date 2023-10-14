import {
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import ProfileOrderDetailItem from "./ProfileOrderDetailItem";

const ProfileOrderDetailList = () => {
  return (
    <>
      <Typography
        variant="h3"
        lineHeight="30px"
        mt="24px"
      >
        Sản phẩm
      </Typography>
      <Box>
        <ProfileOrderDetailItem />
      </Box>
    </>
  );
};

export default ProfileOrderDetailList;
