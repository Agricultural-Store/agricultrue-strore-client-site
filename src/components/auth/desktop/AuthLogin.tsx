import CustomizedInput from "@/components/shared/CustomizedInput";
import GoogleIcon from "@/components/shared/icons/GoogleIcon";
import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";

type Props = {
  onShowRegister: (bool: boolean) => void;
};

const AuthLogin = ({ onShowRegister }: Props) => {

  const handleShowRegister = () => {
    onShowRegister(true);
  };
  return (
    <Box>
      <Typography
        variant="h3"
        mt="53px"
      >
        Đăng nhập
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px", mt: "40px" }}>
        <CustomizedInput
          label="Email"
          placeholder="Nhập email"
          sx={{ width: "400px", height: "48px" }}
        />
        <CustomizedInput
          label="Mật khẩu"
          placeholder="Nhập mật khẩu"
          type="password"
          sx={{ width: "400px", height: "48px" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: "12px",
        }}
      >
        <Typography
          color="error.main"
          fontSize="12px"
        >
          Mật khẩu không đúng
        </Typography>
        <Typography
          color="primary.main"
          fontSize="12px"
        >
          Quên mật khẩu?
        </Typography>
      </Box>
      <Button
        variant="contained"
        fullWidth
        sx={{ my: "24px", textTransform: "capitalize" }}
      >
        Đăng nhập
      </Button>
      <Divider sx={{ color: "#777E90", fontSize: "14px", my: "16px" }}>
        Hoặc đăng nhập bằng
      </Divider>
      <Box
        color="#E6E8EC"
        textAlign="center"
      >
        <Button
          variant="outlined"
          color="inherit"
          sx={{ textTransform: "capitalize", width: "200px" }}
        >
          <GoogleIcon />
          <Typography
            component="span"
            color="color.textBlack"
          >
            &nbsp; Google
          </Typography>
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: "36px",
        }}
      >
        <Typography
          color="#777E90"
          fontSize="12px"
        >
          Bạn chưa có tài khoản?&nbsp;
        </Typography>
        <Typography
          fontSize="12px"
          sx={{ cursor: "pointer" }}
          component="span"
          onClick={handleShowRegister}
        >
          Đăng kí
        </Typography>
      </Box>
    </Box>
  );
};

export default AuthLogin;
