import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const FavoriteLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default FavoriteLayout;
