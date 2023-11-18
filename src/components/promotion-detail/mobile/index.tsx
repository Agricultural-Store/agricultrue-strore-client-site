import React from "react";
import PromotionDetailBasicInfo from "./PromotionDetailBasicInfo";
import PromotionDetailCenter from "./PromotionDetailCenter";
import PromotionDetailRelated from "./PromotionDetailRelated";
import { useParams } from "next/navigation";
import useProductComboDetail from "@/hooks/product-combo/useProductComboDetail";
import RootLoading from "@/app/[locale]/loading";

const ProductDetailMobile = () => {
  const params = useParams();

  const { data, isLoading, isValidating } = useProductComboDetail(+(params.id as string));
  return (
    <>
      <PromotionDetailBasicInfo combo={data?.data} />
      <PromotionDetailCenter combo={data?.data} />
      <PromotionDetailRelated combo={data?.data.productRelated} />
      {(isLoading || isValidating) && <RootLoading />}
    </>
  );
};

export default ProductDetailMobile;
