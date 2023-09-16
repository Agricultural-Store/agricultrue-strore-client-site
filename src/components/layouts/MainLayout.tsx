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
      {children}
      <MainFooter />
    </main>
  );
};

export default MainLayout;
