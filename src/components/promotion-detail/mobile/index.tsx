import React, { useState } from "react";
import PromotionDetailBasicInfo from "./PromotionDetailBasicInfo";
import PromotionDetailCenter from "./PromotionDetailCenter";
import { ProductDetail } from "@/types/product-detail";
import PromotionDetailRelated from "./PromotionDetailRelated";

const ProductDetailMobile = () => {
  const [product] = useState<ProductDetail>({
    productDiscount: 0,
    productImages: [
      "/images/product-detail-main.png",
      "/images/product-detail-main.png",
      "/images/product-detail-main.png",
      "/images/product-detail-main.png",
      "/images/product-detail-main.png",
      "/images/product-detail-main.png",
      "/images/product-detail-main.png",
    ],
    id: 1,
    productCategory: "Gạo dẻo",
    productDescription: "",
    productName: "Gạo Sóc Trăng ST25",
    productPrice: 1,
    productQuantity: 1,
    productDetail: {
      axitFolic: "Khoảng 5 - 10 mcg/100g",
      elasticity: "Cao, hạt gạo không dễ bị nát và giữ nguyên hình dáng sau khi nấu.",
      fiber: "Dưới 0.3%",
      flexibleIndex: "Cao",
      grainStructure:
        "Microstructure đặc biệt giúp hấp thụ nước tốt, làm cho hạt cơm trở nên mềm mịn khi nấu.",
      humidity: "Dưới 14%",
      mineral:
        "Cung cấp các chất khoáng như Phosphorus, Magnesium, và các loại vitamin B",
      protein: "Khoảng 7-8%",
      sugarIndex: "1.5 - 2.0%",
      type: "Dài, mảnh, trắng mịn",
      brokenGrainRating: "Dưới 5%",
    },
  });

  return (
    <>
      <PromotionDetailBasicInfo product={product} />
      <PromotionDetailCenter product={product} />
      <PromotionDetailRelated />
    </>
  );
};

export default ProductDetailMobile;
