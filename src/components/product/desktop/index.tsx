import React from "react";
import ProductBanner from "./ProductBanner";
import ProductList from "./ProductList";
import ProductCertification from "./ProductCertification";
import ProductHelper from "./ProductHelper";
import { Container } from "@mui/material";

const ProductDesktop = () => {
  return (
    <>
      <ProductBanner />
      <Container
        sx={{
          paddingX: {
            sm: "48px !important",
            lg: "0px !important",
          },
        }}
      >
        <ProductList />
      </Container>
      <ProductCertification />
      <ProductHelper />
    </>
  );
};

export default ProductDesktop;
