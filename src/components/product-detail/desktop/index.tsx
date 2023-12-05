import React from "react";
import ProductDetailBasicInfo from "./ProductDetailBasicInfo";
import ProductDetailCenter from "./ProductDetailCenter";
import ProductDetailRelated from "./ProductDetailRelated";
import useProductDetail from "@/hooks/product/useProductDetail";
import { useParams } from "next/navigation";
import RootLoading from "@/app/[locale]/loading";
import { Box } from "@mui/material";
import ProductDetailBreadcrumbs from "./ProductDetailBreadcrumbs";

const ProductDetailDesktop = () => {
  const params = useParams();

  const { data, isLoading, isValidating } = useProductDetail(+(params.id as string));

  return (
    <>
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
        <ProductDetailBreadcrumbs category={data?.data.productCategory} />
        <ProductDetailBasicInfo product={data?.data} />
        <ProductDetailCenter product={data?.data} />
        <ProductDetailRelated products={data?.data?.productRelated} />
      </Box>
      {(isLoading || isValidating) && <RootLoading />}
    </>
  );
};

export default ProductDetailDesktop;
