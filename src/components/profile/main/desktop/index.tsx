"use client";

import { Avatar, Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import EditPenIcon from "../../../shared/icons/EditPenIcon";
import ProfileMainInformation from "./ProfileMainInformation";
import ProfileMainAccount from "./ProfileMainAccount";
import ProfileMainImageDialog from "./ProfileMainImageDialog";
import ProfileSetting from "./ProfileSetting";
import useMedia from "@/hooks/shared/useMedia";
import useUserProfile from "@/hooks/user/useUserProfile";

const ProfileMainDesktop = () => {
  const [open, setOpen] = useState(false);
  const { media } = useMedia(1300);
  const { media: media1200 } = useMedia(1200);

  const { data } = useUserProfile();
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
        pl="28px"
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
          </Box>
          <Box
            position="absolute"
            bottom="20px"
            height="136px"
            px="24px"
          >
            <Box sx={{ width: "86px", height: "86px", position: "relative" }}>
              <Avatar
                sx={{ width: "86px", height: "86px" }}
                src={data?.data.avatar}
              ></Avatar>
              <IconButton
                onClick={() => setOpen(true)}
                sx={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  bgcolor: "color.bgPrimary",
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  ":hover": {
                    bgcolor: "primary.main",
                  },
                }}
              >
                <EditPenIcon />
              </IconButton>
            </Box>
            <Typography
              fontWeight={500}
              mt="10px"
            >
              {data?.data.name}
            </Typography>
            <Typography fontSize="14px">{data?.data.mail}</Typography>
          </Box>
        </Box>
        <ProfileMainInformation data={data?.data} />
        <ProfileMainAccount />
        <ProfileMainImageDialog
          open={open}
          onOpen={setOpen}
          images={data?.data.images}
        ></ProfileMainImageDialog>
      </Box>
      {!media && <ProfileSetting />}
    </>
  );
};

export default ProfileMainDesktop;
