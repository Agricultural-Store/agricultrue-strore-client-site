"use client";

import React, { ReactNode, useContext, useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import { AppContext } from "@/providers/AppContext";
import RootLoading from "@/app/[locale]/loading";
import useMedia from "@/hooks/shared/useMedia";
import CustomizedSuccess from "../shared/CustomizedSuccess";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const { isLoading, isCompleted, setIsCompleted } = useContext(AppContext);
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
      <div style={{ position: "relative", top: "65px" }}>
        {children}
        <MainFooter />
      </div>
      {isLoading && <RootLoading />}
      {isCompleted && (
        <CustomizedSuccess
          open={isCompleted}
          onCompleted={setIsCompleted}
        />
      )}
    </main>
  );
};

export default MainLayout;
