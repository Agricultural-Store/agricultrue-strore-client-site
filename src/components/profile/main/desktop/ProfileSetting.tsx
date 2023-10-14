import { Box, Button } from "@mui/material";
import React from "react";

const ProfileSetting = () => {
  return (
    <Box
      width="300px"
      bgcolor="color.bgWhite"
      p="36px 24px"
      boxShadow="0px 6px 36px 0px rgba(0, 0, 0, 0.08)"
    >
      <Button
        variant="contained"
        color="error"
        fullWidth
      >
        Thoát tài khoản
      </Button>
    </Box>
  );
};

export default ProfileSetting;
