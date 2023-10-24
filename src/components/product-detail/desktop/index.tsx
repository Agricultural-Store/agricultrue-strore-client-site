import React from "react";
import ProductDetailBasicInfo from "./ProductDetailBasicInfo";
import ProductDetailCenter from "./ProductDetailCenter";
import ProductDetailRelated from "./ProductDetailRelated";
import useProductDetail from "@/hooks/product/useProductDetail";
import { useParams } from "next/navigation";
import RootLoading from "@/app/[locale]/loading";

const ProductDetailDesktop = () => {
  const params = useParams();

  const { data, isLoading, isValidating } = useProductDetail(+(params.id as string));
  

  return (
    <>
      <ProductDetailBasicInfo product={data?.data} />
      <ProductDetailCenter product={data?.data} />
      <ProductDetailRelated />
      {(isLoading || isValidating) && <RootLoading />}
    </>
  );
};

export default ProductDetailDesktop;
