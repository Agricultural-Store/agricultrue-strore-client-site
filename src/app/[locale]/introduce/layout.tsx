import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const IntroduceLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default IntroduceLayout;
