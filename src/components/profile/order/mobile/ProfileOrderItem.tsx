import { Box, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next-intl/client";
import ProfileOrderProductList from "./ProfileOrderProductList";

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
        <Typography
          variant="h3"
          fontSize="14px"
        >
          Mã vận đơn:{" "}
          <Typography
            component="span"
            onClick={handleClick}
            sx={{
              fontWeight: 700,
              fontSize: "inherit",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            #72564
          </Typography>
        </Typography>
      </Box>
      <ProfileOrderProductList />
      <Box
        px="16px"
        py="8px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontSize="14px">Trạng thái</Typography>
        <Typography fontSize="14px">đang giao</Typography>
      </Box>
      <Box
        px="16px"
        pb="16px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontSize="18px">Thành tiền</Typography>
        <Typography fontSize="18px">210.000đ</Typography>
      </Box>
    </Box>
  );
};

export default ProfileOrderItem;
