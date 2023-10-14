"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { EmotionCacheProvider } from "./EmotionCacheProvider";
import { buildTheme } from "@/config/theme";
import SWRProvider from "./SWRProvider";
import AppProvider from "./AppProvider";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
  font?: string;
};

function AppProviders({ children, font }: Props) {
  return (
    <>
      <CssBaseline />
      <EmotionCacheProvider options={{ key: "mui-css" }}>
        <ThemeProvider theme={buildTheme(font)}>
          <SWRProvider>
            <SessionProvider>
              <AppProvider>{children}</AppProvider>
            </SessionProvider>
          </SWRProvider>
        </ThemeProvider>
      </EmotionCacheProvider>
    </>
  );
}

export default AppProviders;
