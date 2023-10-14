import React from "react";
import PromotionBanner from "./PromotionBanner";
import PromotionRating from "./PromotionRating";
import PromotionComboList from "./PromotionComboList";
import PromotionHelper from "./PromotionHelper";

const PromotionMobile = () => {
  return (
    <>
      <PromotionBanner />
      <PromotionComboList />
      <PromotionRating />
      <PromotionHelper />
    </>
  );
};

export default PromotionMobile;
