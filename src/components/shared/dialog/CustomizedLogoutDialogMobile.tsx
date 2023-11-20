import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "../icons/ArrowBackIcon";

type Props = {
  open: boolean;
  onOpen: (open: boolean) => void;
  onSubmit: () => void;
};
const CustomizedLogoutDialogMobile = ({ open, onOpen, onSubmit }: Props) => {
  const handleClose = () => {
    onOpen(false);
  };

  return (
    <Box
      component="div"
      sx={{
        position: "fixed",
        top: "65px",
        right: 0,
        bgcolor: "white",
        width: "100%",
        height: "calc(100vh)",
        zIndex: 10,
        px: "16px",
        display: open ? "block" : "none",
      }}
    >
      <Box
        sx={{
          overflowY: "auto",
          height: "85%",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box
          sx={{
            pt: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            mb: "24px",
          }}
        >
          <IconButton
            sx={{ color: "color.textBlack" }}
            onClick={handleClose}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant="h2"
            textAlign="center"
            width="100%"
          >
            Thoát tài khoản
          </Typography>
          <Box
            height="40px"
            width="40px"
          ></Box>
        </Box>
        <Stack
          alignItems="center"
          justifyContent="start"
          mt="120px"
        >
          <Box
            component="img"
            src="/images/logout-icon.svg"
            m="0 auto"
          ></Box>
          <Typography
            fontSize="16px"
            textAlign="center"
            sx={{ opacity: 0.64 }}
            my="16px"
          >
            Sau khi thoát, bạn vẫn có thể đăng nhập lại.
          </Typography>
        </Stack>
        <Button
          variant="contained"
          color="error"
          fullWidth
          onClick={onSubmit}
        >
          Thoát
        </Button>
      </Box>
    </Box>
  );
};

export default CustomizedLogoutDialogMobile;
