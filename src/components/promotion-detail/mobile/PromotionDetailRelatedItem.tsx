import PromotionComboItem from "@/components/promotion/desktop/PromotionComboItem";
import { ProductCombo } from "@/types/product-combo";
import { Box } from "@mui/material";
import React from "react";

type Props = {
  combo?: ProductCombo;
};

const PromotionDetailRelatedItem = ({ combo }: Props) => {
  return (
    <Box
      sx={{
        m: "0 auto",
        borderRadius: "5px",
      }}
    >
      <PromotionComboItem
        description={combo?.comboDescriptionSummary}
        image={combo?.comboImage}
        title={combo?.comboName}
        id={combo?.id}
      />
    </Box>
  );
};

export default PromotionDetailRelatedItem;
