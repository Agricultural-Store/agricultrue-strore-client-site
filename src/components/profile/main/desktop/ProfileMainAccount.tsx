import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import EditBlackBorderIcon from "../../../shared/icons/EditBlackBorderIcon";

const ProfileMainAccount = () => {
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
          Thông tin tài khoản
        </Typography>
        <IconButton>
          <EditBlackBorderIcon />
        </IconButton>
      </Box>
      <Divider sx={{ my: "8px" }}></Divider>
      {renderRow("Tên tài khoản", "")}
      <Divider sx={{ my: "8px" }}></Divider>
      {renderRow("Mật khẩu", "")}
    </Box>
  );
};

export default ProfileMainAccount;
