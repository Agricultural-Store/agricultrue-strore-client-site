import { ProductComboDetail } from "@/types/product-combo-detail";
import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  combo?: ProductComboDetail;
};

const PromotionDetailDetail = ({ combo }: Props) => {
  const renderItem = (label?: string, value?: string) => {
    return (
      <Box
        display="flex"
        my="1px"
      >
        <Typography
          width="110px"
          fontSize="14px"
          fontWeight={600}
          lineHeight="28px"
        >
          {label}
        </Typography>
        <Typography
          sx={{ width: "calc(100% - 110px)", fontSize: "14px", lineHeight: "28px" }}
        >
          {value}
        </Typography>
      </Box>
    );
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {combo?.products?.map((product) => {
        return (
          <React.Fragment key={product.id}>
            {renderItem(product.productName, product.productSummaryDescription)}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default PromotionDetailDetail;
