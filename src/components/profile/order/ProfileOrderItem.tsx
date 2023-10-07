import { Box, Typography } from "@mui/material";
import React from "react";
import ProfileOrderTable from "./ProfileOrderTable";

const ProfileOrderItem = () => {
  return (
    <Box
      sx={{
        boxShadow: "0px 6px 36px 0px rgba(0, 0, 0, 0.08)",
        mt: "24px",
        borderRadius: "8px",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <Box
        height="62px"
        bgcolor="#D9EDD7"
        p="24px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h3">Mã vận đơn: #72564</Typography>
        <Typography fontWeight={600}>Trạng thái: Đang giao</Typography>
      </Box>
      <ProfileOrderTable />
      <Box
        p="24px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontSize="20px">Thành tiền</Typography>
        <Typography
          fontSize="18px"
          fontWeight={600}
        >
          210.000đ
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileOrderItem;
