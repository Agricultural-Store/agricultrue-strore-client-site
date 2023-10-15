"use client";

import useMedia from "@/hooks/shared/useMedia";
import React, { useContext, useEffect, useState } from "react";
import AuthDesktop from "./desktop";
import { LoginInput, SignUpValidateInput } from "@/types/auth";
import { signIn } from "next-auth/react";
import { AppContext } from "@/providers/AppContext";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next-intl/client";
import AuthMobile from "./mobile";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useSignUp from "@/hooks/auth/useSignUp";

const registrationValidator = yup?.object().shape({
  email: yup
    .string()
    .required("Email là bắt buộc")
    .matches(
      /^[A-Za-z\d]{1,}[A-Za-z\d!@#$%^&*()_+-=\[\]{};':"\\|,\.<>\/?]{1,}[A-Za-z\d]{1,}\@[A-Za-z\d]{1,}\.[A-Za-z\d]{1,}$/,
      {
        message: "Email không hợp lệ",
      },
    ),
  name: yup.string().required("Họ tên là bắt buộc"),
  password: yup
    .string()
    .required("Mật khẩu là bắt buộc")
    .min(8, "Mật khẩu phải lớn hơn 8 ký tự")
    .matches(
      /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+-=\[\]{};':"\\|,\.<>\/?])[A-Za-z\d!@#$%^&*()_+-=\[\]{};':"\\|,\.<>\/?]{8,}$/,
      {
        message: "Mật khẩu phải bao gồm chữ hoa, chữ thường, số và ký tự đặt biệt",
      },
    ),
  confirmPassword: yup
    .string()
    .required("Nhập lại mật khẩu là bắt buộc")
    .when("password", (password, field) =>
      password
        ? field
            .required("Nhập lại mật khẩu là bắt buộc")
            .oneOf([yup.ref("password")], "Mật khẩu không khớp")
        : field,
    ),
});

const Auth = () => {
  const [loginInput, setLoginInput] = useState<LoginInput>({
    email: "",
    password: "",
  });
  const [loginLoading, setLoginLoading] = useState(false);
  const [signUpLoading, setSignUpLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [isShowRegister, setIsShowRegister] = useState(false);

  const { setOpenAuth, setIsCompleted } = useContext(AppContext);

  const params = useSearchParams();
  const router = useRouter();
  const { media } = useMedia();
  const formValidate = useForm<SignUpValidateInput>({
    defaultValues: {
      confirmPassword: "",
      email: "",
      name: "",
      password: "",
    },
    reValidateMode: "onChange",
    resolver: yupResolver(registrationValidator),
  });

  const { trigger } = useSignUp();

  const handleLoginChange = (name: string, value: string) => {
    setLoginInput((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setLoginInput({
      email: "",
      password: "",
    });
    setLoginError("");
    setSignUpError("");
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

  const handleSignUp = (data: SignUpValidateInput) => {
    setSignUpLoading(true);
    trigger(
      {
        body: {
          email: data.email,
          name: data.name,
          password: data.password,
        },
      },
      {
        onError: (error) => {
          setSignUpLoading(false);
          setSignUpError(error.message);
          console.log(error);
        },
      },
    ).then((res) => {
      if (res.statusCode === 200) {
        setIsShowRegister(false);
        setSignUpLoading(false);
        setIsCompleted(true);
      }
    });
  };

  useEffect(() => {
    if (!isShowRegister) formValidate.reset({});
  }, [formValidate, isShowRegister]);

  if (media) {
    return (
      <AuthMobile
        onLogin={handleLogin}
        isShowRegister={isShowRegister}
        setIsShowRegister={setIsShowRegister}
        loginData={loginInput}
        loginLoading={loginLoading}
        onLoginChange={handleLoginChange}
        loginError={loginError}
        formValidate={formValidate}
        signUpLoading={signUpLoading}
        onSubmit={handleSignUp}
        signUpError={signUpError}
        onClear={handleClear}
      />
    );
  }

  return (
    <>
      <AuthDesktop
        onLogin={handleLogin}
        isShowRegister={isShowRegister}
        setIsShowRegister={setIsShowRegister}
        loginData={loginInput}
        loginLoading={loginLoading}
        onLoginChange={handleLoginChange}
        loginError={loginError}
        formValidate={formValidate}
        signUpLoading={signUpLoading}
        onSubmit={handleSignUp}
        signUpError={signUpError}
        onClear={handleClear}
      />
    </>
  );
};

export default Auth;
