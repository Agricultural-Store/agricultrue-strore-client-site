import React from "react";
import ProductBanner from "./ProductBanner";
import ProductList from "./ProductList";
import ProductCertification from "./ProductCertification";
import ProductHelper from "./ProductHelper";

const ProductDesktop = () => {
  return (
    <>
      <ProductBanner />
      <ProductList />
      <ProductCertification />
      <ProductHelper />
    </>
  );
};

export default ProductDesktop;
