import { Box, Typography } from "@mui/material";
import React from "react";
import ProfileOrderTable from "./ProfileOrderTable";
import { useRouter } from "next-intl/client";

const ProfileOrderItem = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/profile/order/order-detail/");
  };

  return (
    <Box
      sx={{
        boxShadow: "0px 6px 36px 0px rgba(0, 0, 0, 0.08)",
        mt: "24px",
        borderRadius: "8px",
        overflow: "hidden",
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
        <Typography variant="h3">
          Mã vận đơn:{" "}
          <Typography
            component="span"
            onClick={handleClick}
            sx={{
              fontWeight: 500,
              fontSize: "inherit",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            #72564
          </Typography>
        </Typography>
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
