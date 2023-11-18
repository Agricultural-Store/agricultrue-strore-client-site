import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import EditBlackBorderIcon from "../../../shared/icons/EditBlackBorderIcon";
import { UserProfile } from "@/types/user";
type Props = {
  data?: UserProfile;
};

const ProfileMainInformation = ({ data }: Props) => {
  const renderRow = (label?: string, value?: string) => {
    return (
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          item
          xs={2.5}
          fontWeight={500}
          lineHeight="30px"
        >
          {label}
        </Grid>
        <Grid
          item
          xs={9}
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
      p="12px 24px"
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
        <IconButton>
          <EditBlackBorderIcon />
        </IconButton>
      </Box>
      <Divider sx={{ my: "8px" }}></Divider>
      {renderRow("Họ tên", data?.name)}
      <Divider sx={{ my: "8px" }}></Divider>
      {renderRow("Ngày sinh", new Date(data?.birthday || "").toLocaleDateString())}
      <Divider sx={{ my: "8px" }}></Divider>
      {renderRow("Email", data?.mail)}
      <Divider sx={{ my: "8px" }}></Divider>
      {renderRow("Số điện thoại", data?.phone)}
      <Divider sx={{ my: "8px" }}></Divider>
      {renderRow("Địa chỉ", data?.addressDetail)}
      <Divider sx={{ my: "8px" }}></Divider>
      {renderRow("Phường", data?.commune)}
      <Divider sx={{ my: "8px" }}></Divider>
      {renderRow("Quận", data?.district)}
      <Divider sx={{ my: "8px" }}></Divider>
      {renderRow("Thành phố", data?.province)}
      <Divider sx={{ my: "8px" }}></Divider>
      {renderRow("Quốc gia", "Việt Nam")}
    </Box>
  );
};

export default ProfileMainInformation;
