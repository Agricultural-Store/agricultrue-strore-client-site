import { ProductComboDetail } from "@/types/product-combo-detail";
import { Box } from "@mui/material";
import React from "react";

type Props = {
  combo?: ProductComboDetail;
};
const PromotionDetailDescription = ({ combo }: Props) => {
  return (
    <Box sx={{ textAlign: "justify" }}>
      <Box
        component="div"
        dangerouslySetInnerHTML={{ __html: combo?.comboDescription || "" }}
      ></Box>
    </Box>
  );
};

export default PromotionDetailDescription;
