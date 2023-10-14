import { Box } from "@mui/material";
import React from "react";

const ProductBanner = () => {
  return (
    <Box>
      <Box
        component="img"
        src="/images/product-banner-mobile.png"
        sx={{ width: "100%" }}
      />
    </Box>
  );
};

export default ProductBanner;
