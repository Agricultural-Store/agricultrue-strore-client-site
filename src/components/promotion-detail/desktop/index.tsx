import React from "react";
import PromotionDetailBasicInfo from "./PromotionDetailBasicInfo";
import PromotionDetailCenter from "./PromotionDetailCenter";
import PromotionDetailRelated from "./PromotionDetailRelated";
import { useParams } from "next/navigation";
import RootLoading from "@/app/[locale]/loading";
import { Container } from "@mui/material";
import useProductComboDetail from "@/hooks/product-combo/useProductComboDetail";

const PromotionDetailDesktop = () => {
  const params = useParams();

  const { data, isLoading, isValidating } = useProductComboDetail(+(params.id as string));

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
        <PromotionDetailBasicInfo combo={data?.data} />
        <PromotionDetailCenter combo={data?.data} />
      </Container>
      <PromotionDetailRelated combo={data?.data.productRelated} />
      {(isLoading || isValidating) && <RootLoading />}
    </>
  );
};

export default PromotionDetailDesktop;
