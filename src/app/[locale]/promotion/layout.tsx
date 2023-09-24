import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const PromotionLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default PromotionLayout;
