import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PromotionComboItem from "./PromotionComboItem";
import useProductComboList from "@/hooks/product-combo/useProductComboList";
import CustomizedLoading from "@/components/shared/CustomizedLoading";

const PromotionComboList = () => {
  const { data, isLoading, isValidating } = useProductComboList();

  return (
    <Box sx={{ p: "48px 16px" }}>
      <Typography
        sx={{ textAlign: "center", fontSize: "20px", mb: "48px", fontWeight: 600 }}
      >
        Combo Khuyến Mãi
      </Typography>
      <Grid
        container
        spacing={4}
        rowSpacing={6}
        flexWrap="wrap"
      >
        {(isLoading || isValidating) && (
          <Grid
            item
            xs={12}
            textAlign="center"
            display="flex"
            justifyContent="center"
          >
            <CustomizedLoading
              color="green"
              size="small"
            />
          </Grid>
        )}
        {data?.data.map((combo) => (
          <Grid
            item
            key={combo.id}
            xs={12}
          >
            <PromotionComboItem
              image={combo.comboImage}
              title={combo.comboName}
              description={combo.comboDescription}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PromotionComboList;
