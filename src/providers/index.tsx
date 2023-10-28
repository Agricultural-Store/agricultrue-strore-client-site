"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { EmotionCacheProvider } from "./EmotionCacheProvider";
import { buildTheme } from "@/config/theme";
import SWRProvider from "./SWRProvider";
import AppProvider from "./AppProvider";
import { SessionProvider } from "next-auth/react";
import { SnackbarProvider } from "notistack";
import CartProvider from "./CartProvider";

type Props = {
  children: React.ReactNode;
  font?: string;
};

function AppProviders({ children, font }: Props) {
  return (
    <>
      <CssBaseline />
      <EmotionCacheProvider options={{ key: "mui-css" }}>
        <SnackbarProvider>
          <ThemeProvider theme={buildTheme(font)}>
            <SWRProvider>
              <SessionProvider>
                <AppProvider>
                  <CartProvider>{children}</CartProvider>
                </AppProvider>
              </SessionProvider>
            </SWRProvider>
          </ThemeProvider>
        </SnackbarProvider>
      </EmotionCacheProvider>
    </>
  );
}

export default AppProviders;
