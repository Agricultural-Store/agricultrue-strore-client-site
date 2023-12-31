import AccountCircleIcon from "@/components/shared/icons/AccountCircleIcon";
import FavoriteIcon from "@/components/shared/icons/FavoriteIcon";
import ShoppingCartIcon from "@/components/shared/icons/ShoppingCartIcon";
import { Box, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import ProfileBarItem from "./ProfileBarItem";
import ExitIcon from "../shared/icons/ExitIcon";
import CustomizedLogoutDialog from "../shared/dialog/CustomizedLogoutDialog";

const ProfileBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpenLogout = () => {
    setOpen(true);
  };

  const items = useMemo(() => {
    return [
      {
        icon: <AccountCircleIcon />,
        label: "Hồ sơ cá nhân",
        href: `/profile`,
      },
      {
        icon: <ShoppingCartIcon />,
        label: "Thông tin đơn hàng",
        href: `/profile/order`,
      },
      {
        icon: <FavoriteIcon />,
        label: "Đã thích",
        href: `/profile/favorite`,
      },
    ];
  }, []);

  return (
    <Box
      width="250px"
      bgcolor="color.bgWhite"
      py="24px"
      boxShadow="0px 6px 36px 0px rgba(0, 0, 0, 0.08)"
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
      borderRadius="4px"
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
        onClick={handleOpenLogout}
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
      <CustomizedLogoutDialog
        open={open}
        onOpen={setOpen}
      />
    </Box>
  );
};

export default ProfileBar;
