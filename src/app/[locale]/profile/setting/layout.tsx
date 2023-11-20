import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SettingLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default SettingLayout;
