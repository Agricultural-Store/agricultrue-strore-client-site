import CustomizedInput from "@/components/shared/CustomizedInput";
import GoogleIcon from "@/components/shared/icons/GoogleIcon";
import { Box, Typography, Button, Divider } from "@mui/material";
import React from "react";

type Props = {
  onShowRegister: (bool: boolean) => void;
};

const AuthRegister = ({ onShowRegister }: Props) => {
  const handleShowRegister = () => {
    onShowRegister(false);
  };
  return (
    <Box>
      <Typography variant="h3">Đăng kí</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px", mt: "30px" }}>
        <CustomizedInput
          label="Họ và tên"
          placeholder="Nhập họ và tên"
          sx={{ width: "400px", height: "48px" }}
        />
        <CustomizedInput
          label="Email"
          placeholder="Nhập email"
          sx={{ width: "400px", height: "48px" }}
        />
        <CustomizedInput
          label="Mật khẩu"
          placeholder="Nhập mật khẩu"
          sx={{ width: "400px", height: "48px" }}
        />
        <CustomizedInput
          label="Xác nhận mật khẩu"
          placeholder="Xác nhận mật khẩu"
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
      </Box>
      <Button
        variant="contained"
        fullWidth
        sx={{ my: "24px", textTransform: "capitalize" }}
      >
        Đăng kí
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
          Bạn đã có tài khoản?&nbsp;
        </Typography>
        <Typography
          fontSize="12px"
          sx={{ cursor: "pointer" }}
          component="span"
          onClick={handleShowRegister}
        >
          Đăng nhập
        </Typography>
      </Box>
    </Box>
  );
};

export default AuthRegister;
