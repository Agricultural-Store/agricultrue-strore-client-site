import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ProductDetailLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default ProductDetailLayout;