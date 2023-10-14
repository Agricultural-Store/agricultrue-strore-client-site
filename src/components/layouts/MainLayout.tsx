"use client";

import React, { ReactNode, useContext, useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import { AppContext } from "@/providers/AppContext";
import RootLoading from "@/app/[locale]/loading";
import useMedia from "@/hooks/shared/useMedia";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const { isLoading } = useContext(AppContext);
  const { media } = useMedia();
  const [loadingResponsive, setLoadingResponsive] = useState("loading");

  useEffect(() => {
    setTimeout(() => {
      setLoadingResponsive("loaded");
    }, 100);
  }, [media]);

  if (loadingResponsive === "loading") {
    return <RootLoading />;
  }

  return (
    <main>
      <MainHeader />
      <div style={{ position: "relative", top: "65px" }}>{children}</div>
      <MainFooter />
      {isLoading && <RootLoading />}
    </main>
  );
};

export default MainLayout;
