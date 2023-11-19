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
import NewsProvider from "./NewsProvider";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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
                  <NewsProvider>
                    <CartProvider>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        {children}
                      </LocalizationProvider>
                    </CartProvider>
                  </NewsProvider>
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
