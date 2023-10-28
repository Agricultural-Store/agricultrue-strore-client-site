// import loading from "@/app/[locale]/loading";
// import CustomizedProgressLoading from "@/components/shared/CustomizedProgressLoading";
import { Box, Button, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
type Props = {
  setActive: (active: { mail: boolean; otp: boolean; password: boolean }) => void;
};

const ForgotPasswordOTP = ({ setActive }: Props) => {
  const handleMove = () => {
    setActive({
      mail: false,
      otp: false,
      password: true,
    });
  };
  const [opt, setOpt] = useState(["", "", "", "", "", ""]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
  ) => {
    const regexp = /^[0-9]{0,1}$/;
    const { value } = e.target;
    if (regexp.test(value)) {
      const newOpt = [...opt];
      newOpt[index] = value;
      setOpt(newOpt);
      if (value) {
        const nextElementSibling = e.target.nextElementSibling as HTMLInputElement | null;
        console.log([e.currentTarget]);

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
      >
        Quên mật khẩu
      </Typography>
      <Typography sx={{ color: "color.textPrimary", opacity: 0.64, fontSize: "16px" }}>
        Nhập mã OTP từ email của bạn.
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px", mt: "40px" }}>
        <Box
          display="flex"
          justifyContent="space-between"
        >
          {[1, 2, 3, 4, 5, 6].map((v, index) => (
            <input
              key={v}
              type="text"
              value={opt[index]}
              onChange={(e) => handleChange(e, index)}
              minLength={0}
              maxLength={1}
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
              }}
            />
          ))}
        </Box>
      </Box>
      <Button
        variant="contained"
        fullWidth
        onClick={handleMove}
        sx={{ my: "24px", textTransform: "capitalize", height: "42px" }}
      >
        {/* {loading ? <CustomizedProgressLoading /> : "Xác nhận"} */}
        Xác nhận
      </Button>
    </Box>
  );
};

export default ForgotPasswordOTP;
