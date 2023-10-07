import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import EditBlackBorderIcon from "../../shared/icons/EditBlackBorderIcon";

const ProfileMainInformation = () => {
  const renderRow = (label?: string, value?: string) => {
    return (
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          item
          xs={2}
          fontWeight={700}
          lineHeight="30px"
        >
          {label}
        </Grid>
        <Grid
          item
          xs={10}
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
      {renderRow("Họ tên", "")}
      <Divider sx={{ my: "8px" }}></Divider>
      {renderRow("Ngày sinh", "")}
      <Divider sx={{ my: "8px" }}></Divider>
      {renderRow("Email", "")}
      <Divider sx={{ my: "8px" }}></Divider>
      {renderRow("Số điện thoại", "")}
      <Divider sx={{ my: "8px" }}></Divider>
      {renderRow("Địa chỉ", "")}
      <Divider sx={{ my: "8px" }}></Divider>
      {renderRow("Phường", "")}
      <Divider sx={{ my: "8px" }}></Divider>
      {renderRow("Quận", "")}
      <Divider sx={{ my: "8px" }}></Divider>
      {renderRow("Thành phố", "")}
      <Divider sx={{ my: "8px" }}></Divider>
      {renderRow("Quốc gia", "")}
    </Box>
  );
};

export default ProfileMainInformation;
