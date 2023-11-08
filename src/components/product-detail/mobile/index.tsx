import React from "react";
import ProductDetailBasicInfo from "./ProductDetailBasicInfo";
import ProductDetailCenter from "./ProductDetailCenter";
import ProductDetailRelated from "./ProductDetailRelated";
import useProductDetail from "@/hooks/product/useProductDetail";
import RootLoading from "@/app/[locale]/loading";
import { useParams } from "next/navigation";

const ProductDetailMobile = () => {
  const params = useParams();

  const { data, isLoading, isValidating } = useProductDetail(+(params.id as string));

  return (
    <>
      <ProductDetailBasicInfo product={data?.data} />
      <ProductDetailCenter product={data?.data} />
      <ProductDetailRelated products={data?.data.productRelated} />
      {(isLoading || isValidating) && <RootLoading />}
    </>
  );
};

export default ProductDetailMobile;
