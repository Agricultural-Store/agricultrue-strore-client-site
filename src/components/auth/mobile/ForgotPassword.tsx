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
};

const ForgotPassword = ({ setActive: setActiveProp }: Props) => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [active, setActive] = useState({
    mail: true,
    otp: false,
    password: false,
  });

  if (active.mail) {
    return (
      <ForgotPasswordMail
        setActive={setActive}
        onChange={setEmail}
      />
    );
  }

  if (active.otp) {
    return (
      <ForgotPasswordOTP
        setActive={setActive}
        email={email}
        onChange={setToken}
      />
    );
  }

  return (
    <ForgotPasswordForm
      token={token}
      setActive={setActiveProp}
    />
  );
};

export default ForgotPassword;
