import React from "react";
import PromotionDetailBasicInfo from "./PromotionDetailBasicInfo";
import PromotionDetailCenter from "./PromotionDetailCenter";
import PromotionDetailRelated from "./PromotionDetailRelated";
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
        <PromotionDetailBasicInfo product={data?.data} />
        <PromotionDetailCenter product={data?.data} />
      </Container>
      <PromotionDetailRelated />
      {(isLoading || isValidating) && <RootLoading />}
    </>
  );
};

export default ProductDetailDesktop;
