import { ProductCombo } from "@/types/product-combo";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PromotionDetailRelatedItem from "./PromotionDetailRelatedItem";

type Props = {
  combo?: ProductCombo[];
};
const ProductDetailRelated = ({ combo }: Props) => {
  return (
    <Box
      px="16px"
      py="48px"
    >
      <Typography
        fontSize="20px"
        fontWeight={500}
        px="30px"
        textAlign="center"
      >
        Sản phẩm liên quan
      </Typography>
      <Grid
        container
        py="48px"
        rowGap="10px"
      >
        {combo?.map((_c) => (
          <Grid
            item
            xs={12}
            key={_c.id}
          >
            <Box
              sx={{
                m: "0 auto",
                borderRadius: "5px",
              }}
            >
              <PromotionDetailRelatedItem combo={_c} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductDetailRelated;
