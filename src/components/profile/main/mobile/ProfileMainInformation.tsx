import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import EditBlackBorderIcon from "../../../shared/icons/EditBlackBorderIcon";
import { UserProfile } from "@/types/user";
import ProfileMainEdit from "./ProfileMainEdit";

type Props = {
  data?: UserProfile;
};

const ProfileMainInformation = ({ data }: Props) => {
  const [open, setOpen] = useState(false);
  const renderRow = (label?: string, value?: string) => {
    return (
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          item
          xs={4}
          fontWeight={500}
          lineHeight="30px"
          fontSize="14px"
        >
          {label}
        </Grid>
        <Grid
          item
          xs={8}
          fontSize="14px"
        >
          {value}
        </Grid>
      </Grid>
    );
  };

  return (
    <Box
      mt="24px"
      borderRadius="8px"
      overflow="hidden"
      width="100%"
      bgcolor="color.bgWhite"
      p="12px 16px"
      boxShadow="0px 6px 36px 0px rgba(0, 0, 0, 0.08)"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          variant="h3"
          lineHeight="30px"
        >
          Thông tin cá nhân
        </Typography>
        <IconButton onClick={() => setOpen(true)}>
          <EditBlackBorderIcon />
        </IconButton>
      </Box>
      <Divider sx={{ my: "8px", borderColor: "#E6E8EC" }}></Divider>
      {renderRow("Họ tên", data?.name)}
      <Divider sx={{ my: "8px", borderColor: "#E6E8EC" }}></Divider>
      {renderRow("Ngày sinh", new Date(data?.birthday || "").toLocaleDateString())}
      <Divider sx={{ my: "8px", borderColor: "#E6E8EC" }}></Divider>
      {renderRow("Email", data?.mail)}
      <Divider sx={{ my: "8px", borderColor: "#E6E8EC" }}></Divider>
      {renderRow("Số điện thoại", data?.phone)}
      <Divider sx={{ my: "8px", borderColor: "#E6E8EC" }}></Divider>
      {renderRow("Địa chỉ", data?.addressDetail)}
      <Divider sx={{ my: "8px", borderColor: "#E6E8EC" }}></Divider>
      {renderRow("Phường", data?.commune)}
      <Divider sx={{ my: "8px", borderColor: "#E6E8EC" }}></Divider>
      {renderRow("Quận", data?.district)}
      <Divider sx={{ my: "8px", borderColor: "#E6E8EC" }}></Divider>
      {renderRow("Thành phố", data?.province)}
      <Divider sx={{ my: "8px", borderColor: "#E6E8EC" }}></Divider>
      {renderRow("Quốc gia", "Việt Nam")}
      <ProfileMainEdit
        onOpen={setOpen}
        open={open}
        user={data}
      />
    </Box>
  );
};

export default ProfileMainInformation;
