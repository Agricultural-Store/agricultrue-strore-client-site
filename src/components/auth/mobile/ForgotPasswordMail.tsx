import CustomizedInput from "@/components/shared/CustomizedInput";
import CustomizedProgressLoading from "@/components/shared/CustomizedProgressLoading";
import useUserForgotPassword from "@/hooks/user/useUserForgotPassword";
// import CustomizedProgressLoading from "@/components/shared/CustomizedProgressLoading";
import { Typography, Button, Box } from "@mui/material";
import React, { ChangeEvent, useState } from "react";

type Props = {
  setActive: (active: { mail: boolean; otp: boolean; password: boolean }) => void;
  onChange: (email: string) => void;
};

const ForgotPasswordMail = ({ setActive, onChange }: Props) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const { trigger, isMutating } = useUserForgotPassword();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    onChange(e.target.value);
  };

  const handleMove = () => {
    const regexp =
      /^[A-Za-z\d]{1,}[A-Za-z\d!@#$%^&*()_+-=\[\]{};':"\\|,\.<>\/?]{1,}[A-Za-z\d]{1,}\@[A-Za-z\d]{1,}\.[A-Za-z\d]{1,}$/;
    if (regexp.test(email)) {
      setEmailError("");
      trigger({
        body: {
          email: email,
        },
      }).then(() => {
        setActive({
          mail: false,
          otp: true,
          password: false,
        });
      });
    } else {
      setEmailError("Email không đúng định dạng");
    }
  };

  return (
    <Box>
      <Typography
        variant="h3"
        textAlign="start"
      >
        Quên mật khẩu
      </Typography>
      <Typography
        textAlign="start"
        sx={{ color: "color.textPrimary", opacity: 0.64, fontSize: "16px" }}
      >
        Chúng tôi sẽ gửi mã OTP về email của bạn
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px", mt: "40px" }}>
        <CustomizedInput
          label="Email"
          placeholder="Nhập email"
          name="email"
          fullWidth
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
          {emailError}
        </Typography>
      </Box>
      <Button
        variant="contained"
        fullWidth
        onClick={handleMove}
        disabled={!email}
        sx={{ my: "24px", textTransform: "capitalize", height: "42px" }}
      >
        {isMutating ? <CustomizedProgressLoading /> : "Xác nhận"}
      </Button>
    </Box>
  );
};

export default ForgotPasswordMail;
