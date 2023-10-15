import { Box, Collapse, Dialog, DialogContent, IconButton } from "@mui/material";
import React, { useContext } from "react";
import AuthLogin from "./AuthLogin";
import AuthRegister from "./AuthRegister";
import CloseIcon from "@/components/shared/icons/CloseIcon";
import useMedia from "@/hooks/shared/useMedia";
import { AppContext } from "@/providers/AppContext";
import { LoginInput, SignUpValidateInput } from "@/types/auth";
import { UseFormReturn } from "react-hook-form";

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
  isShowRegister: boolean;
  setIsShowRegister: (bool: boolean) => void;
  signUpError?: string;
  onClear?: () => void;
};

const AuthDesktop = ({
  onLogin,
  onLoginChange,
  loginData,
  loginError,
  loginLoading,
  formValidate,
  onSubmit,
  signUpLoading,
  isShowRegister,
  setIsShowRegister,
  onClear,
  signUpError,
}: Props) => {
  const { openAuth, setOpenAuth } = useContext(AppContext);

  const { media } = useMedia(1100);

  const handleCloseAuth = () => {
    setOpenAuth(false);
    setIsShowRegister(false);
    onClear?.();
  };

  return (
    <Dialog
      open={openAuth}
      maxWidth="lg"
      componentsProps={{
        backdrop: {
          sx: {
            backdropFilter: "blur(4px)",
            backgroundColor: "rgba(20, 20, 22, 0.64)",
          },
        },
      }}
      onClose={handleCloseAuth}
      PaperProps={{
        sx: {
          overflow: "visible",
          position: "relative",
        },
      }}
    >
      <DialogContent sx={{ p: 0, overflowY: "auto", borderRadius: "8px" }}>
        <Box
          sx={{
            position: "absolute",
            bgcolor: "color.bgWhite",
            borderRadius: "50%",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            top: 0,
            right: 0,
            transform: "translate(50%, -50%)",
          }}
        >
          <IconButton onClick={handleCloseAuth}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex" }}>
          {!media && (
            <Box
              component="img"
              src="/images/login.png"
              sx={{ objectFit: "cover", width: "500px" }}
            />
          )}
          <Box
            sx={{
              display: "flex",
              overflow: "hidden",
              width: !media ? "calc(100% - 500px)" : "100%",
            }}
          >
            <Collapse
              in={!isShowRegister}
              orientation="horizontal"
            >
              <Box
                component="div"
                sx={{ p: "48px" }}
              >
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
                sx={{ px: "48px", py: "32px" }}
              >
                <AuthRegister
                  onShowRegister={setIsShowRegister}
                  formValidate={formValidate}
                  onSubmit={onSubmit}
                  loading={signUpLoading}
                  error={signUpError}
                />
              </Box>
            </Collapse>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDesktop;
