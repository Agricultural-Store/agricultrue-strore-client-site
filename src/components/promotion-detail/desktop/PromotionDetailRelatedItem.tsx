import PromotionComboItem from "@/components/promotion/desktop/PromotionComboItem";
import { ProductCombo } from "@/types/product-combo";
import { Grid, Box } from "@mui/material";
import React from "react";

type Props = {
  combo?: ProductCombo;
};

const PromotionDetailRelatedItem = ({ combo }: Props) => {
  return (
    <Grid
      item
      md={4}
      lg={3}
      sm={6}
    >
      <Box
        sx={{
          width: "90%",
          m: "0 auto",
          height: "320px",
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
    </Grid>
  );
};

export default PromotionDetailRelatedItem;
