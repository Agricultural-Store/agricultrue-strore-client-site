import {
  Dialog,
  DialogContent,
  Box,
  IconButton,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import React, { useContext } from "react";
import CloseIcon from "../icons/CloseIcon";
import { signOut } from "next-auth/react";
import { AppContext } from "@/providers/AppContext";
import { usePathname, useRouter } from "next-intl/client";

type Props = {
  open: boolean;
  onOpen: (open: boolean) => void;
};

const CustomizedLogoutDialog = ({ open, onOpen }: Props) => {
  const { setIsLoading } = useContext(AppContext);
  const pathname = usePathname();
  const router = useRouter();
  const handleClose = () => {
    onOpen(false);
  };

  const handleLogout = () => {
    setIsLoading(true);
    console.log(pathname.split("/")[1]);
    if (pathname.split("/")[1] === "profile") {
      router.replace("/");
    }
    setTimeout(async () => {
      await signOut();
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      componentsProps={{
        backdrop: {
          sx: {
            backdropFilter: "blur(4px)",
            backgroundColor: "rgba(20, 20, 22, 0.64)",
          },
        },
      }}
      PaperProps={{
        sx: {
          overflow: "visible",
          position: "relative",
        },
      }}
    >
      <DialogContent sx={{ p: 0, overflowY: "auto", borderRadius: "8px" }}>
        <Box
          sx={{
            position: "absolute",
            bgcolor: "color.bgWhite",
            borderRadius: "50%",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            top: 0,
            right: 0,
            transform: "translate(50%, -50%)",
          }}
        >
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Box>
        <Stack
          width="450px"
          height="313px"
          display="flex"
          alignItems="center"
          p="24px"
          justifyContent="space-between"
        >
          <Stack
            display="flex"
            alignItems="center"
          >
            <Box
              component="img"
              src="/images/logout-icon.svg"
              m="0 auto"
              mb="24px"
            ></Box>
            <Typography
              fontSize="20px"
              fontWeight={500}
              lineHeight="30px"
              mb="8px"
            >
              Thoát tài khoản
            </Typography>
            <Typography
              fontSize="16px"
              textAlign="center"
              sx={{ opacity: 0.64 }}
            >
              Sau khi thoát, bạn vẫn có thể đăng nhập lại.
            </Typography>
          </Stack>
          <Button
            variant="contained"
            color="error"
            fullWidth
            onClick={handleLogout}
          >
            Thoát
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default CustomizedLogoutDialog;
