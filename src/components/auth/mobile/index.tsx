"use client";
import CustomizedDrawer from "@/components/shared/CustomizedDrawer";
import CloseIcon from "@/components/shared/icons/CloseIcon";
import { AppContext } from "@/providers/AppContext";
import { Box, Collapse, IconButton } from "@mui/material";
import React, { useContext } from "react";
import AuthLogin from "./AuthLogin";
import AuthRegister from "./AuthRegister";
import { LoginInput, SignUpValidateInput } from "@/types/auth";
import { UseFormReturn } from "react-hook-form";
import ForgotPassword from "./ForgotPassword";

type Props = {
  onLogin?: () => void;
  onLoginChange?: (name: string, value: string) => void;
  loginData?: LoginInput;
  loginLoading?: boolean;
  signUpLoading?: boolean;
  loginError?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formValidate?: UseFormReturn<SignUpValidateInput, any, undefined>;
  onSubmit: (data: SignUpValidateInput) => void;
  active: {
    login: boolean;
    register: boolean;
    forgotPassword: boolean;
  };
  setActive: (active: {
    login: boolean;
    register: boolean;
    forgotPassword: boolean;
  }) => void;
  signUpError?: string;
  onClear?: () => void;
};

const AuthMobile = ({
  onLogin,
  onLoginChange,
  loginData,
  loginError,
  loginLoading,
  formValidate,
  onSubmit,
  signUpLoading,
  active,
  setActive,
  onClear,
  signUpError,
}: Props) => {
  const { openAuth, setOpenAuth } = useContext(AppContext);

  const handleCloseAuth = () => {
    setOpenAuth(false);
    setActive({
      login: true,
      forgotPassword: false,
      register: false,
    });
    onClear?.();
  };
  return (
    <>
      <CustomizedDrawer
        open={openAuth}
        onClose={setOpenAuth}
        width={"100%"}
      >
        <Box
          sx={{
            px: "16px",
            width: "100vw",
            boxSizing: "border-box",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            textAlign="right"
            height="100vh"
          >
            <Box pt="24px">
              <IconButton
                sx={{ color: "color.textBlack", p: "10px" }}
                onClick={handleCloseAuth}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  overflow: "hidden",
                  width: "100%",
                }}
              >
                <Collapse
                  in={active.login}
                  orientation="horizontal"
                >
                  <Box
                    width="calc(100vw - 32px)"
                    display="flex"
                    flexDirection="column"
                    justifyContent="end"
                  >
                    <AuthLogin
                      setActive={setActive}
                      onLogin={onLogin}
                      onChange={onLoginChange}
                      value={loginData}
                      error={loginError}
                      loading={loginLoading}
                    />
                  </Box>
                </Collapse>
                <Collapse
                  in={active.register}
                  orientation="horizontal"
                >
                  <Box sx={{ width: "calc(100vw - 32px)" }}>
                    <AuthRegister
                      setActive={setActive}
                      formValidate={formValidate}
                      onSubmit={onSubmit}
                      loading={signUpLoading}
                      error={signUpError}
                    />
                  </Box>
                </Collapse>
                <Collapse
                  in={active.forgotPassword}
                  orientation="horizontal"
                  sx={{ position: "relative" }}
                >
                  <Box
                    position="absolute"
                    bottom="24px"
                    sx={{ width: "calc(100vw - 32px)" }}
                  >
                    <ForgotPassword setActive={setActive} />
                  </Box>
                </Collapse>
              </Box>
            </Box>
          </Box>
        </Box>
      </CustomizedDrawer>
    </>
  );
};

export default AuthMobile;
