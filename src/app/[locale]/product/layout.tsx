import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ProductLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default ProductLayout;
