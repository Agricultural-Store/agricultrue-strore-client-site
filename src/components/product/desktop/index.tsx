import React from "react";
import ProductBanner from "./ProductBanner";
import ProductList from "./ProductList";
import ProductCertification from "./ProductCertification";
import ProductHelper from "./ProductHelper";
import { Box } from "@mui/material";

const ProductDesktop = () => {
  return (
    <>
      <ProductBanner />
      <Box
        width={{
          lg: "85%",
          sm: "100%",
        }}
        sx={{
          m: "0 auto",
          paddingX: {
            sm: "48px !important",
            lg: "0px !important",
          },
        }}
      >
        <ProductList />
      </Box>
      <ProductCertification />
      <Box
        width={{
          lg: "85%",
          sm: "100%",
        }}
        sx={{
          m: "0 auto",
          paddingX: {
            sm: "48px !important",
            lg: "0px !important",
          },
        }}
      >
        <ProductHelper />
      </Box>
    </>
  );
};

export default ProductDesktop;
