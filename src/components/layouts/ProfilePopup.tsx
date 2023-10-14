"use client";
import { AppContext } from "@/providers/AppContext";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import { signOut } from "next-auth/react";
import React, { useContext } from "react";
import NextIntlLink from "next-intl/link";
import AccountCircleIcon from "../shared/icons/AccountCircleIcon";
import FavoriteIcon from "../shared/icons/FavoriteIcon";
import LogoutIcon from "../shared/icons/LogoutIcon";
import ShoppingCartIcon from "../shared/icons/ShoppingCartIcon";
import { usePathname, useRouter } from "next-intl/client";

type Props = {
  anchorElUser: null | HTMLElement;
  setAnchorElUser: (anchor: null | HTMLElement) => void;
};

const ProfilePopup = ({ anchorElUser, setAnchorElUser }: Props) => {
  const { setIsLoading } = useContext(AppContext);
  const pathname = usePathname();
  const router = useRouter();

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    setIsLoading(true);
    console.log(pathname.split("/")[1]);
    if (pathname.split("/")[1] === "profile") {
      router.replace("/");
    }
    setTimeout(async () => {
      await signOut();
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Menu
      sx={{ mt: "45px" }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      slotProps={{
        paper: {
          sx: {
            boxShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.25)",
          },
        },
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      <MenuItem onClick={handleCloseUserMenu}>
        <NextIntlLink
          href="/profile"
          style={{ color: "black", textDecoration: "none" }}
        >
          <Box
            display="flex"
            gap="16px"
            justifyContent="center"
            alignItems="center"
          >
            <AccountCircleIcon />
            <Typography textAlign="center">Hồ sơ cá nhân</Typography>
          </Box>
        </NextIntlLink>
      </MenuItem>
      <MenuItem onClick={handleCloseUserMenu}>
        <NextIntlLink
          href="/profile/order"
          style={{ color: "black", textDecoration: "none" }}
        >
          <Box
            display="flex"
            gap="16px"
            justifyContent="center"
            alignItems="center"
          >
            <ShoppingCartIcon />
            <Typography textAlign="center">Thông tin đơn hàng</Typography>
          </Box>
        </NextIntlLink>
      </MenuItem>
      <MenuItem onClick={handleCloseUserMenu}>
        <NextIntlLink
          href="/profile/favorite"
          style={{ color: "black", textDecoration: "none" }}
        >
          <Box
            display="flex"
            gap="16px"
            justifyContent="center"
            alignItems="center"
          >
            <FavoriteIcon />
            <Typography textAlign="center">Đã thích</Typography>
          </Box>
        </NextIntlLink>
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <Box
          display="flex"
          gap="16px"
          justifyContent="center"
          alignItems="center"
        >
          <LogoutIcon />
          <Typography textAlign="center">Thoát</Typography>
        </Box>
      </MenuItem>
    </Menu>
  );
};

export default ProfilePopup;
