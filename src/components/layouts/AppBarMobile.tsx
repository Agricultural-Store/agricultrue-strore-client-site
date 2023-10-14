"use client";
import useMedia from "@/hooks/shared/useMedia";
import { Box, Button, Drawer, IconButton } from "@mui/material";
import React from "react";
import CloseIcon from "../shared/icons/CloseIcon";
import { mobileNavigation } from "@/config/navigation";
import CustomizeLink from "../shared/CustomizeLink";

type Props = {
  onClose: (bool: boolean) => void;
  open: boolean;
};

const AppBarMobile = ({ open, onClose }: Props) => {
  const { media } = useMedia();

  const toggleAppBar = () => {
    onClose(false);
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={toggleAppBar}
      PaperProps={{
        sx: {
          width: media ? "100%" : "350px",
          height: "100svh",
          bgcolor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(15px)",
          p: "16px",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/images/logo.png"
        ></Box>
        <IconButton
          onClick={toggleAppBar}
          sx={{ color: "color.textWhite" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          height: "calc(100% - 32px - 41px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {mobileNavigation.map((nav) => (
          <Box
            onClick={toggleAppBar}
            key={nav.href}
          >
            <CustomizeLink
              href={nav.href}
              sx={{ fontWeight: "bold" }}
            >
              {nav.label}
            </CustomizeLink>
          </Box>
        ))}
      </Box>
      <Button
        fullWidth
        variant="contained"
        sx={{
          height: "41px",
          boxShadow: 0,
          textTransform: "capitalize",
          fontSize: "14px",
        }}
      >
        Liên hệ
      </Button>
    </Drawer>
  );
};

export default AppBarMobile;
