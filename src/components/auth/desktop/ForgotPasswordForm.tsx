import CustomizedInput from "@/components/shared/CustomizedInput";
import CustomizedProgressLoading from "@/components/shared/CustomizedProgressLoading";
import HiddenIcon from "@/components/shared/icons/HiddenIcon";
import ShowIcon from "@/components/shared/icons/ShowIcon";
import useUserChangePassword from "@/hooks/user/useUserChangePassword";
import { AppContext } from "@/providers/AppContext";
import { ChangePasswordInput } from "@/types/user";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { ChangeEvent, useContext, useState } from "react";

type Props = {
  token: string;
  setActive: (active: {
    login: boolean;
    register: boolean;
    forgotPassword: boolean;
  }) => void;
};

const ForgotPasswordForm = ({ token, setActive }: Props) => {
  const [input, setInput] = useState<ChangePasswordInput>({
    newPassword: "",
    confirmPassword: "",
  });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");

  const { setIsCompleted } = useContext(AppContext);

  const { trigger, isMutating } = useUserChangePassword();

  const handleChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((pre) => ({
      ...pre,
      confirmPassword: e.target.value,
    }));
  };

  const handleChangeNewPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((pre) => ({
      ...pre,
      newPassword: e.target.value,
    }));
  };

  const handleShowNewPassword = () => {
    setShowNewPassword((pre) => !pre);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((pre) => !pre);
  };

  const handleSubmit = () => {
    const regexp =
      /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+-=\[\]{};':"\\|,\.<>\/?])[A-Za-z\d!@#$%^&*()_+-=\[\]{};':"\\|,\.<>\/?]{8,}$/;
    if (!regexp.test(input.newPassword)) {
      setError("Password phải gồm chữ cái thường, in hoa, số và ký tự đặt biệt");
      return;
    } else {
      if (input.newPassword !== input.confirmPassword) {
        setError("Password không trùng khớp");
        return;
      } else {
        setError("");
      }
    }
    if (token && input.newPassword && input.confirmPassword) {
      trigger({
        body: input,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res);
        setIsCompleted(true);
        setActive({
          login: true,
          forgotPassword: false,
          register: false,
        });
      });
    }
  };

  return (
    <Box pt="153px">
      <Typography variant="h3">Tạo mật khẩu mới</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px", mt: "40px" }}>
        <CustomizedInput
          label="Mật khẩu"
          placeholder="Nhập mật khẩu"
          name="password"
          type={showNewPassword ? "text" : "password"}
          onChange={handleChangeNewPassword}
          sx={{ width: "400px", height: "48px", pr: "5px" }}
          endAdornment={
            <IconButton onClick={handleShowNewPassword}>
              {showNewPassword ? <ShowIcon /> : <HiddenIcon />}
            </IconButton>
          }
        />
        <CustomizedInput
          label="Nhập lại mật khẩu"
          placeholder="Nhập lại mật khẩu"
          type={showConfirmPassword ? "text" : "password"}
          name="newPassword"
          onChange={handleChangeConfirmPassword}
          sx={{ width: "400px", height: "48px", pr: "5px" }}
          endAdornment={
            <IconButton onClick={handleShowConfirmPassword}>
              {showConfirmPassword ? <ShowIcon /> : <HiddenIcon />}
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
      </Box>
      <Button
        variant="contained"
        fullWidth
        onClick={handleSubmit}
        disabled={!input.newPassword || !input.confirmPassword}
        sx={{ my: "24px", textTransform: "capitalize", height: "42px" }}
      >
        {isMutating ? <CustomizedProgressLoading /> : " Xác nhận"}
      </Button>
    </Box>
  );
};

export default ForgotPasswordForm;
