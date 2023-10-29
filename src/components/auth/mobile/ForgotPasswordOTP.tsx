// import loading from "@/app/[locale]/loading";
// import CustomizedProgressLoading from "@/components/shared/CustomizedProgressLoading";
import useUserOTP from "@/hooks/user/useUserOTP";
import { Box, Button, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
type Props = {
  setActive: (active: { mail: boolean; otp: boolean; password: boolean }) => void;
  email?: string;
  onChange?: (token: string) => void;
};

const ForgotPasswordOTP = ({ setActive, email, onChange }: Props) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpError, setOtpError] = useState("");

  const { trigger } = useUserOTP();

  const handleMove = () => {
    if (otp.some((elm) => elm === "")) {
      setOtpError("OPT không hợp lệ");
    } else {
      const _otp = otp.join("");
      if (email && _otp) {
        trigger({
          body: {
            email,
            otp: _otp,
          },
        }).then((res) => {
          onChange?.(res.data.token);
          setActive({
            mail: false,
            otp: false,
            password: true,
          });
        });
      }
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
  ) => {
    const regexp = /^[0-9]{0,1}$/;
    const { value } = e.target;
    if (regexp.test(value)) {
      const newOpt = [...otp];
      newOpt[index] = value;
      setOtp(newOpt);
      if (value) {
        const nextElementSibling = e.target.nextElementSibling as HTMLInputElement | null;
        if (nextElementSibling) {
          nextElementSibling.focus();
        }
      }
    }
  };
  return (
    <Box pt="153px">
      <Typography
        variant="h3"
        width="400px"
        textAlign="left"
      >
        Quên mật khẩu
      </Typography>
      <Typography
        textAlign="left"
        sx={{ color: "color.textPrimary", opacity: 0.64, fontSize: "16px" }}
      >
        Nhập mã OTP từ email của bạn.
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px", mt: "36px" }}>
        <Box
          display="flex"
          justifyContent="space-between"
        >
          {[1, 2, 3, 4, 5, 6].map((v, index) => (
            <input
              key={v}
              type="text"
              value={otp[index]}
              onChange={(e) => handleChange(e, index)}
              minLength={0}
              maxLength={1}
              className="otp-input"
              style={{
                textAlign: "center",
                height: "52px",
                minWidth: "55px",
                maxWidth: "55px",
                outline: "none",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderBottom: "1px solid #D9DBE9",
                borderColor: "#D9DBE9",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            />
          ))}
        </Box>
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
          {otpError}
        </Typography>
      </Box>
      <Button
        variant="contained"
        fullWidth
        onClick={handleMove}
        disabled={otp.some((value) => value === "")}
        sx={{ my: "24px", textTransform: "capitalize", height: "42px" }}
      >
        {/* {loading ? <CustomizedProgressLoading /> : "Xác nhận"} */}
        Xác nhận
      </Button>
    </Box>
  );
};

export default ForgotPasswordOTP;
