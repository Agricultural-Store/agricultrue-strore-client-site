"use client";
import CustomizedDrawer from "@/components/shared/CustomizedDrawer";
import CloseIcon from "@/components/shared/icons/CloseIcon";
import { AppContext } from "@/providers/AppContext";
import { Box, Collapse, IconButton } from "@mui/material";
import React, { useContext, useState } from "react";
import AuthLogin from "./AuthLogin";
import AuthRegister from "./AuthRegister";
import { LoginInput } from "@/types/auth";

type Props = {
  onLogin?: () => void;
  onLoginChange?: (name: string, value: string) => void;
  loginData?: LoginInput;
  loginLoading?: boolean;
  loginError?: string;
};

const AuthMobile = ({
  onLogin,
  onLoginChange,
  loginData,
  loginError,
  loginLoading,
}: Props) => {
  const [isShowRegister, setIsShowRegister] = useState(false);
  const { openAuth, setOpenAuth } = useContext(AppContext);

  const handleCloseAuth = () => {
    setOpenAuth(false);
    setIsShowRegister(false);
  };
  return (
    <>
      <CustomizedDrawer
        open={openAuth}
        onClose={setOpenAuth}
        width={"100%"}
      >
        <Box sx={{ p: "24px 16px", width: "100vw" }}>
          <Box textAlign="right">
            <IconButton
              sx={{ color: "color.textBlack", p: 0 }}
              onClick={handleCloseAuth}
            >
              <CloseIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <Collapse
                in={!isShowRegister}
                orientation="horizontal"
              >
                <Box width="calc(100vw - 32px)">
                  <AuthLogin
                    onShowRegister={setIsShowRegister}
                    onLogin={onLogin}
                    onChange={onLoginChange}
                    value={loginData}
                    error={loginError}
                    loading={loginLoading}
                  />
                </Box>
              </Collapse>
              <Collapse
                in={isShowRegister}
                orientation="horizontal"
              >
                <Box
                  component="div"
                  sx={{ width: "calc(100vw - 32px)" }}
                >
                  <AuthRegister onShowRegister={setIsShowRegister} />
                </Box>
              </Collapse>
            </Box>
          </Box>
        </Box>
      </CustomizedDrawer>
    </>
  );
};

export default AuthMobile;
