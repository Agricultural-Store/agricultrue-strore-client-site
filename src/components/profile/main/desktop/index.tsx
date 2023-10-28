"use client";

import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import EditBorderIcon from "../../../shared/icons/EditBorderIcon";
import EditPenIcon from "../../../shared/icons/EditPenIcon";
import ProfileMainInformation from "./ProfileMainInformation";
import ProfileMainAccount from "./ProfileMainAccount";
import ProfileMainImageDialog from "./ProfileMainImageDialog";
import ProfileSetting from "./ProfileSetting";
import useMedia from "@/hooks/shared/useMedia";

const ProfileMainDesktop = () => {
  const [open, setOpen] = useState(false);
  const { media } = useMedia(1300);
  const { media: media1200 } = useMedia(1200);

  return (
    <>
      <Box
        width={
          !media
            ? "calc(100% - 300px - 250px)"
            : media1200
            ? "100%"
            : "calc(100% - 250px)"
        }
        pr="24px"
        pl="48px"
      >
        <Box
          bgcolor="color.bgWhite"
          width="100%"
          position="relative"
          height="293px"
          borderRadius="8px"
          overflow="hidden"
          boxShadow="0px 6px 36px 0px rgba(0, 0, 0, 0.08)"
        >
          <Box position="relative">
            <Box
              component="img"
              src="/images/profile-background.png"
              width="100%"
              height="185px"
              sx={{ objectFit: "cover" }}
            />
            <Box
              position="absolute"
              bottom="12px"
              right="12px"
            >
              <Button
                variant="contained"
                sx={{ p: "8px", height: "48px", minWidth: "48px", maxWidth: "48px" }}
                onClick={() => setOpen(true)}
              >
                <EditBorderIcon />
              </Button>
            </Box>
          </Box>
          <Box
            position="absolute"
            bottom="20px"
            height="136px"
            px="24px"
          >
            <Box sx={{ width: "86px", height: "86px", position: "relative" }}>
              <Avatar sx={{ width: "86px", height: "86px" }}></Avatar>
              <IconButton
                sx={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  bgcolor: "color.bgPrimary",
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                }}
              >
                <EditPenIcon />
              </IconButton>
            </Box>
            <Typography
              fontWeight={500}
              mt="10px"
            >
              Vũ Hoàng Hiệp
            </Typography>
            <Typography fontSize="14px">Example@gmail.com</Typography>
          </Box>
        </Box>
        <ProfileMainInformation />
        <ProfileMainAccount />
        <ProfileMainImageDialog
          open={open}
          onOpen={setOpen}
        ></ProfileMainImageDialog>
      </Box>
      {!media && <ProfileSetting />}
    </>
  );
};

export default ProfileMainDesktop;
