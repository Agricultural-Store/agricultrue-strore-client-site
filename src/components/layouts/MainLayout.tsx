"use client";

import React, { ReactNode } from "react";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <main>
      <MainHeader />
      <div style={{ position: "relative", top: "65px", minHeight: "710px" }}>
        {children}
      </div>
      <MainFooter />
    </main>
  );
};

export default MainLayout;
