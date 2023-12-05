import React from "react";
import PromotionBanner from "./PromotionBanner";
import PromotionRating from "./PromotionRating";
import PromotionComboList from "./PromotionComboList";
import PromotionHelper from "./PromotionHelper";
import { Box } from "@mui/material";

const PromotionDesktop = () => {
  return (
    <>
      <PromotionBanner />
      <Box
        width={{
          lg: "85%",
          sm: "100%",
        }}
        sx={{
          m: "0 auto",
          paddingX: {
            sm: "0px !important",
            lg: "0px !important",
          },
        }}
      >
        <PromotionComboList />
      </Box>
      <PromotionRating />
      <Box
        width={{
          lg: "85%",
          sm: "100%",
        }}
        sx={{
          m: "0 auto",
          paddingX: {
            sm: "0px !important",
            lg: "0px !important",
          },
        }}
      >
        <PromotionHelper />
      </Box>
    </>
  );
};

export default PromotionDesktop;
