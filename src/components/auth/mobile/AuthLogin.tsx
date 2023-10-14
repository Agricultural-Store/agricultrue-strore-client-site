import CustomizedInput from "@/components/shared/CustomizedInput";
import CustomizedProgressLoading from "@/components/shared/CustomizedProgressLoading";
import GoogleIcon from "@/components/shared/icons/GoogleIcon";
import { LoginInput } from "@/types/auth";
import { Box, Button, Divider, Typography } from "@mui/material";
import React, { ChangeEvent } from "react";

type Props = {
  onShowRegister: (bool: boolean) => void;
  onLogin?: () => void;
  onChange?: (name: string, value: string) => void;
  value?: LoginInput;
  loading?: boolean;
  error?: string;
};

const AuthLogin = ({
  onShowRegister,
  onLogin,
  onChange,
  value,
  loading,
  error,
}: Props) => {
  const handleShowRegister = () => {
    onShowRegister(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    onChange?.(name, value);
  };

  return (
    <Box>
      <Typography
        variant="h3"
        mt="53px"
        textAlign="start"
      >
        Đăng nhập
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px", mt: "40px" }}>
        <CustomizedInput
          label="Email"
          placeholder="Nhập email"
          name="email"
          fullWidth
          onChange={handleChange}
          value={value?.email}
          sx={{ height: "48px" }}
        />
        <CustomizedInput
          label="Mật khẩu"
          placeholder="Nhập mật khẩu"
          type="password"
          fullWidth
          name="password"
          value={value?.password}
          onChange={handleChange}
          sx={{ height: "48px" }}
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
