"use client";

import useMedia from "@/hooks/shared/useMedia";
import React, { useContext, useState } from "react";
import AuthDesktop from "./desktop";
import { LoginInput } from "@/types/auth";
import { signIn } from "next-auth/react";
import { AppContext } from "@/providers/AppContext";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next-intl/client";
import AuthMobile from "./mobile";

const Auth = () => {
  const [loginInput, setLoginInput] = useState<LoginInput>({
    email: "",
    password: "",
  });
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const { setOpenAuth } = useContext(AppContext);
  const params = useSearchParams();
  const router = useRouter();

  const { media } = useMedia();

  const handleLoginChange = (name: string, value: string) => {
    setLoginInput((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    if (!loginInput.email || !loginInput.password) {
      setLoginError("Các trường không được trống.");
      return;
    }
    try {
      setLoginLoading(true);
      const res = await signIn("credentials", {
        email: loginInput.email,
        password: loginInput.password,
        redirect: false,
      });
      setLoginLoading(false);
      if (res?.status === 200) {
        setOpenAuth(false);
        const loginUrl = params.get("loginUrl");
        if (loginUrl) {
          router.push(loginUrl);
        }
      }
      if (res?.status === 401) {
        setLoginError("Email hoặc mật khẩu không đúng.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (media) {
    return (
      <AuthMobile
        onLogin={handleLogin}
        loginData={loginInput}
        loginLoading={loginLoading}
        onLoginChange={handleLoginChange}
        loginError={loginError}
      />
    );
  }

  return (
    <AuthDesktop
      onLogin={handleLogin}
      loginData={loginInput}
      loginLoading={loginLoading}
      onLoginChange={handleLoginChange}
      loginError={loginError}
    />
  );
};

export default Auth;
