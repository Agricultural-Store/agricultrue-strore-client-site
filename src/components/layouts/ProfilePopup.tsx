"use client";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import NextIntlLink from "next-intl/link";
import AccountCircleIcon from "../shared/icons/AccountCircleIcon";
import FavoriteIcon from "../shared/icons/FavoriteIcon";
import LogoutIcon from "../shared/icons/LogoutIcon";
import ShoppingCartIcon from "../shared/icons/ShoppingCartIcon";
import CustomizedLogoutDialog from "../shared/dialog/CustomizedLogoutDialog";

type Props = {
  anchorElUser: null | HTMLElement;
  setAnchorElUser: (anchor: null | HTMLElement) => void;
};

const ProfilePopup = ({ anchorElUser, setAnchorElUser }: Props) => {
  const [open, setOpen] = useState(false);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenLogout = () => {
    setOpen(true);
  };

  return (
    <>
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
        <MenuItem onClick={handleOpenLogout}>
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
      <CustomizedLogoutDialog
        open={open}
        onOpen={setOpen}
      />
    </>
  );
};

export default ProfilePopup;
