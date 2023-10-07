import AccountCircleIcon from "@/components/shared/icons/AccountCircleIcon";
import FavoriteIcon from "@/components/shared/icons/FavoriteIcon";
import ShoppingCartIcon from "@/components/shared/icons/ShoppingCartIcon";
import { Box, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import ProfileBarItem from "./ProfileBarItem";
import ExitIcon from "../shared/icons/ExitIcon";

const ProfileBar = () => {
  const [id] = useState(132423);
  const items = useMemo(() => {
    return [
      {
        icon: <AccountCircleIcon />,
        label: "Hồ sơ cá nhân",
        href: `/profile/${id}`,
      },
      {
        icon: <ShoppingCartIcon />,
        label: "Thông tin đơn hàng",
        href: `/profile/${id}/order`,
      },
      {
        icon: <FavoriteIcon />,
        label: "Đã thích",
        href: `/profile/${id}/favorite`,
      },
    ];
  }, [id]);

  return (
    <Box
      width="250px"
      bgcolor="color.bgWhite"
      py="24px"
      boxShadow="0px 6px 36px 0px rgba(0, 0, 0, 0.08)"
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
    >
      <Box>
        {items.map((item, index) => (
          <ProfileBarItem
            key={index}
            item={item}
          />
        ))}
      </Box>
      <Box
        sx={{
          cursor: "pointer",
          height: "48px",
          display: "flex",
          alignItems: "center",
          padding: "12px 24px",
        }}
      >
        <ExitIcon />
        <Typography>&nbsp; Thoát</Typography>
      </Box>
    </Box>
  );
};

export default ProfileBar;
