import CustomizedInput from "@/components/shared/CustomizedInput";
import CustomizedProgressLoading from "@/components/shared/CustomizedProgressLoading";
import GoogleIcon from "@/components/shared/icons/GoogleIcon";
import { SignUpValidateInput } from "@/types/auth";
import { Box, Typography, Button, Divider } from "@mui/material";
import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";

type Props = {
  onShowRegister: (bool: boolean) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formValidate?: UseFormReturn<SignUpValidateInput, any, undefined>;
  onSubmit: (data: SignUpValidateInput) => void;
  loading?: boolean;
  error?: string;
};

const AuthRegister = ({
  onShowRegister,
  formValidate,
  onSubmit,
  loading,
  error,
}: Props) => {
  const handleShowRegister = () => {
    onShowRegister(false);
  };
  return (
    <Box
      component="form"
      id="sign-up-desktop-form"
      onSubmit={formValidate?.handleSubmit(onSubmit)}
    >
      <Typography
        variant="h3"
        textAlign="start"
      >
        Đăng kí
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px", mt: "30px" }}>
        <Controller
          control={formValidate?.control}
          name="name"
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => {
            return (
              <CustomizedInput
                error={!!formValidate?.formState.errors.name}
                onChange={onChange}
                value={value}
                label="Họ và tên"
                placeholder="Nhập họ và tên"
                fullWidth
                sx={{ height: "48px" }}
              />
            );
          }}
        ></Controller>
        <Controller
          control={formValidate?.control}
          name="email"
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => {
            return (
              <CustomizedInput
                onChange={onChange}
                value={value}
                error={!!formValidate?.formState.errors.email}
                label="Email"
                placeholder="Nhập email"
                fullWidth
                sx={{ height: "48px" }}
              />
            );
          }}
        ></Controller>
        <Controller
          control={formValidate?.control}
          name="password"
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => {
            return (
              <CustomizedInput
                onChange={onChange}
                value={value}
                label="Mật khẩu"
                error={!!formValidate?.formState.errors.password}
                type="password"
                placeholder="Nhập mật khẩu"
                fullWidth
                sx={{ height: "48px" }}
              />
            );
          }}
        ></Controller>
        <Controller
          control={formValidate?.control}
          name="confirmPassword"
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => {
            return (
              <CustomizedInput
                onChange={onChange}
                value={value}
                type="password"
                error={!!formValidate?.formState.errors.confirmPassword}
                label="Xác nhận mật khẩu"
                placeholder="Xác nhận mật khẩu"
                fullWidth
                sx={{ height: "48px" }}
              />
            );
          }}
        ></Controller>
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
          {formValidate?.formState.errors.name?.message ||
            formValidate?.formState.errors.email?.message ||
            formValidate?.formState.errors.password?.message ||
            formValidate?.formState.errors.confirmPassword?.message ||
            error ||
            ""}
        </Typography>
      </Box>
      <Button
        variant="contained"
        fullWidth
        form="sign-up-desktop-form"
        type="submit"
        sx={{ my: "24px", textTransform: "capitalize", height: "42px" }}
      >
        {loading ? <CustomizedProgressLoading /> : "Đăng kí"}
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
