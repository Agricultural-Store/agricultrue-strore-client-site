"use client";

import useMedia from "@/hooks/shared/useMedia";
import React, { useEffect, useState } from "react";
import AppBarMobile from "./AppBarMobile";
import AppBarDesktop from "./AppBarDesktop";
import { Box, IconButton } from "@mui/material";
import SearchIcon from "../shared/icons/SearchIcon";
import CartIcon from "../shared/icons/CartIcon";
import ProfileIcon from "../shared/icons/ProfileIcon";
import MenuIcon from "@mui/icons-material/Menu";
import Cart from "../cart";

const MainHeader = () => {
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { media } = useMedia(1000);
  const { media: media375 } = useMedia(375);

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    document.addEventListener("resize", () => {
      setOpen(false);
    });
  }, []);

  return (
    <>
      {media && (
        <AppBarMobile
          open={open}
          onClose={setOpen}
        />
      )}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          zIndex: 1000,
          height: "65rem",
          width: "100%",
          bgcolor: "primary.main",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: media ? "10rem" : "48rem",
        }}
      >
        <Box
          sx={{
            height: "42rem",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {media && (
            <IconButton onClick={handleOpen}>
              <MenuIcon sx={{ color: "white", mr: "5rem", fontSize: "25rem" }} />
            </IconButton>
          )}
          <Box
            component="img"
            src="/images/logo.png"
            width={media375 ? "150rem" : undefined}
          />
          {!media ? <AppBarDesktop /> : <div></div>}
        </Box>
        <Box
          sx={{
            width: "152rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton sx={{ height: "40rem", width: "40rem" }}>
            <SearchIcon />
          </IconButton>
          <IconButton
            sx={{ height: "40rem", width: "40rem" }}
            onClick={() => setOpenCart(true)}
          >
            <CartIcon />
          </IconButton>
          <IconButton sx={{ height: "40rem", width: "40rem" }}>
            <ProfileIcon />
          </IconButton>
        </Box>
      </Box>
      <Cart
        onClose={setOpenCart}
        open={openCart}
      />
    </>
  );
};

export default MainHeader;
