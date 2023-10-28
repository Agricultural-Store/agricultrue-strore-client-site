import CustomizedInput from "@/components/shared/CustomizedInput";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const ForgotPasswordForm = () => {
  return (
    <Box pt="153px">
      <Typography variant="h3">Tạo mật khẩu mới</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px", mt: "40px" }}>
        <CustomizedInput
          label="Mật khẩu"
          placeholder="Nhập mật khẩu"
          name="password"
          type="password"
          sx={{ width: "400px", height: "48px" }}
        />
        <CustomizedInput
          label="Nhập lại mật khẩu"
          placeholder="Nhập lại mật khẩu"
          type="password"
          name="password"
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
          error
        </Typography>
      </Box>
      <Button
        variant="contained"
        fullWidth
        sx={{ my: "24px", textTransform: "capitalize", height: "42px" }}
      >
        {/* {loading ? <CustomizedProgressLoading /> : "Đăng nhập"} */}
        Xác nhận
      </Button>
    </Box>
  );
};

export default ForgotPasswordForm;
