import CustomizedSwitch from "@/components/shared/CustomizeSwitch";
import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  title?: string;
  desc?: string;
};

const ProfileSettingNotificationItem = ({ desc, title }: Props) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      my="8px"
    >
      <Box>
        <Typography fontSize="16px">{title}</Typography>
        <Typography
          fontSize="14px"
          color="color.textNeutral500"
          overflow="hidden"
          maxWidth="250px"
        >
          {desc}
        </Typography>
      </Box>
      <Box>
        <CustomizedSwitch />
      </Box>
    </Box>
  );
};

export default ProfileSettingNotificationItem;
