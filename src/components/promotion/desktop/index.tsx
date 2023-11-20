import React from "react";
import PromotionBanner from "./PromotionBanner";
import PromotionRating from "./PromotionRating";
import PromotionComboList from "./PromotionComboList";
import PromotionHelper from "./PromotionHelper";
import { Container } from "@mui/material";

const PromotionDesktop = () => {
  return (
    <>
      <PromotionBanner />
      <Container
        sx={{
          paddingX: {
            sm: "48px !important",
            lg: "0px !important",
          },
        }}
      >
        <PromotionComboList />
      </Container>
      <Container
        sx={{
          paddingX: {
            sm: "0px !important",
          },
        }}
      >
        <PromotionRating />
        <PromotionHelper />
      </Container>
    </>
  );
};

export default PromotionDesktop;
