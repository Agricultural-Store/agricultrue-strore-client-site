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

const MainHeader = () => {
  const [open, setOpen] = useState(false);
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
          height: "65px",
          width: "100%",
          bgcolor: "primary.main",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: media ? "10px" : "48px",
        }}
      >
        <Box
          sx={{
            height: "42px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {media && (
            <IconButton onClick={handleOpen}>
              <MenuIcon sx={{ color: "white", mr: "5px" }} />
            </IconButton>
          )}
          <Box
            component="img"
            src="/images/logo.png"
            width={media375 ? "150px" : undefined}
          />
          {!media ? <AppBarDesktop /> : <div></div>}
        </Box>
        <Box
          sx={{
            width: "152px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton sx={{ height: "40px", width: "40px" }}>
            <SearchIcon />
          </IconButton>
          <IconButton sx={{ height: "40px", width: "40px" }}>
            <CartIcon />
          </IconButton>
          <IconButton sx={{ height: "40px", width: "40px" }}>
            <ProfileIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default MainHeader;
