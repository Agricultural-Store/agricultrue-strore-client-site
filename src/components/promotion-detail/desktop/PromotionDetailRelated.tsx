import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import PromotionDetailRelatedItem from "./PromotionDetailRelatedItem";
import { ProductCombo } from "@/types/product-combo";

type Props = {
  combo?: ProductCombo[];
};

const ProductDetailRelated = ({ combo }: Props) => {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery(theme.breakpoints.up("lg"));

  const renderItem = () => {
    if (matchesLg) {
      return (
        <>
          {combo?.slice(0, 3).map((_c) => (
            <PromotionDetailRelatedItem
              key={_c.id}
              combo={_c}
            />
          ))}
        </>
      );
    }
    if (matchesMd) {
      return (
        <>
          {combo?.slice(0, 2).map((_c) => (
            <PromotionDetailRelatedItem
              key={_c.id}
              combo={_c}
            />
          ))}
        </>
      );
    }
    return (
      <>
        {combo?.slice(0, 1).map((_c) => (
          <PromotionDetailRelatedItem
            key={_c.id}
            combo={_c}
          />
        ))}
      </>
    );
  };

  return (
    <Box px="48px">
      <Typography
        fontSize="28px"
        fontWeight={500}
        px="30px"
      >
        Sản phẩm liên quan
      </Typography>
      <Grid
        container
        py="48px"
        justifyContent="space-evenly"
      >
        {renderItem()}
      </Grid>
      <Box height="98px"></Box>
    </Box>
  );
};

export default ProductDetailRelated;
