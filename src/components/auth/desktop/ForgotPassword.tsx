import { LoginInput } from "@/types/auth";
import React, { useState } from "react";
import ForgotPasswordOTP from "./ForgotPasswordOTP";
import ForgotPasswordMail from "./ForgotPasswordMail";
import ForgotPasswordForm from "./ForgotPasswordForm";

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
};

const ForgotPassword = ({}: Props) => {
  const [active, setActive] = useState({
    mail: true,
    otp: false,
    password: false,
  });

  // const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { value, name } = e.target;
  //   onChange?.(name, value);
  // };

  if (active.mail) {
    return <ForgotPasswordMail setActive={setActive} />;
  }

  if (active.otp) {
    return <ForgotPasswordOTP setActive={setActive} />;
  }

  return <ForgotPasswordForm />;
};

export default ForgotPassword;
