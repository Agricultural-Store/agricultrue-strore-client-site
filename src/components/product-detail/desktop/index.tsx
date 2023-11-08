import React from "react";
import ProductDetailBasicInfo from "./ProductDetailBasicInfo";
import ProductDetailCenter from "./ProductDetailCenter";
import ProductDetailRelated from "./ProductDetailRelated";
import useProductDetail from "@/hooks/product/useProductDetail";
import { useParams } from "next/navigation";
import RootLoading from "@/app/[locale]/loading";
import { Container } from "@mui/material";

const ProductDetailDesktop = () => {
  const params = useParams();

  const { data, isLoading, isValidating } = useProductDetail(+(params.id as string));

  return (
    <>
      <Container
        sx={{
          paddingX: {
            sm: "48px !important",
            lg: "0px !important",
          },
        }}
      >
        <ProductDetailBasicInfo product={data?.data} />
        <ProductDetailCenter product={data?.data} />
      </Container>
      <ProductDetailRelated products={data?.data?.productRelated} />
      {(isLoading || isValidating) && <RootLoading />}
    </>
  );
};

export default ProductDetailDesktop;
