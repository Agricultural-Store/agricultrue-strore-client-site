import CustomizedInput from "@/components/shared/CustomizedInput";
import CustomizedProgressLoading from "@/components/shared/CustomizedProgressLoading";
import GoogleIcon from "@/components/shared/icons/GoogleIcon";
import HiddenIcon from "@/components/shared/icons/HiddenIcon";
import ShowIcon from "@/components/shared/icons/ShowIcon";
import { LoginInput } from "@/types/auth";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";

type Props = {
  setActive: (active: {
    login: boolean;
    register: boolean;
    forgotPassword: boolean;
  }) => void;
  onLogin?: () => void;
  onChange?: (name: string, value: string) => void;
  value?: LoginInput;
  loading?: boolean;
  error?: string;
};

const AuthLogin = ({ setActive, onLogin, onChange, value, loading, error }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowRegister = () => {
    setActive({
      login: false,
      forgotPassword: false,
      register: true,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    onChange?.(name, value);
  };

  const handleShowPassword = () => {
    setShowPassword((pre) => !pre);
  };

  const handleMoveForgotPassword = () => {
    setActive({
      login: false,
      forgotPassword: true,
      register: false,
    });
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
          name="email"
          onChange={handleChange}
          value={value?.email}
          sx={{ width: "400px", height: "48px" }}
        />
        <CustomizedInput
          label="Mật khẩu"
          placeholder="Nhập mật khẩu"
          type={showPassword ? "text" : "password"}
          name="password"
          value={value?.password}
          onChange={handleChange}
          sx={{ width: "400px", height: "48px", pr: "5px" }}
          endAdornment={
            <IconButton onClick={handleShowPassword}>
              {showPassword ? <ShowIcon /> : <HiddenIcon />}
            </IconButton>
          }
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
          {error}
        </Typography>
        <Typography
          color="primary.main"
          fontSize="12px"
          onClick={handleMoveForgotPassword}
          sx={{ cursor: "pointer" }}
        >
          Quên mật khẩu?
        </Typography>
      </Box>
      <Button
        variant="contained"
        fullWidth
        onClick={onLogin}
        sx={{ my: "24px", textTransform: "capitalize", height: "42px" }}
      >
        {loading ? <CustomizedProgressLoading /> : "Đăng nhập"}
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
