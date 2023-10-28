import CustomizedInput from "@/components/shared/CustomizedInput";
// import CustomizedProgressLoading from "@/components/shared/CustomizedProgressLoading";
import { Typography, Button, Box } from "@mui/material";
import React from "react";

type Props = {
  setActive: (active: { mail: boolean; otp: boolean; password: boolean }) => void;
};

const ForgotPasswordMail = ({ setActive }: Props) => {
  const handleMove = () => {
    setActive({
      mail: false,
      otp: true,
      password: false,
    });
  };

  return (
    <Box pt="153px">
      <Typography variant="h3">Quên mật khẩu</Typography>
      <Typography sx={{ color: "color.textPrimary", opacity: 0.64, fontSize: "16px" }}>
        Chúng tôi sẽ gửi mã OTP về email của bạn
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px", mt: "40px" }}>
        <CustomizedInput
          label="Email"
          placeholder="Nhập email"
          name="email"
          sx={{ width: "400px", height: "48px" }}
        />
      </Box>
      <Button
        variant="contained"
        fullWidth
        onClick={handleMove}
        sx={{ my: "24px", textTransform: "capitalize", height: "42px" }}
      >
        Xác nhận
        {/* {loading ? <CustomizedProgressLoading /> : "Xác nhận"} */}
      </Button>
    </Box>
  );
};

export default ForgotPasswordMail;
