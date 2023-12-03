import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const NewsLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default NewsLayout;
