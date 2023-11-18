"use client";

import { Avatar, Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import EditPenIcon from "../../../shared/icons/EditPenIcon";
import ProfileMainInformation from "./ProfileMainInformation";
import ProfileMainAccount from "./ProfileMainAccount";
import ProfileMainImageDialog from "./ProfileMainImageDialog";
import useUserProfile from "@/hooks/user/useUserProfile";
// import ProfileSetting from "./ProfileSetting";

const ProfileMainMobile = () => {
  const [open, setOpen] = useState(false);
  const { data } = useUserProfile();

  return (
    <>
      <Box width="100%">
        <Typography
          fontSize="18px"
          fontWeight={600}
          textAlign="center"
          my="16px"
        >
          Hồ sơ cá nhân
        </Typography>
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
        ></ProfileMainImageDialog>
      </Box>
      {/* <ProfileSetting /> */}
    </>
  );
};

export default ProfileMainMobile;
