import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PromotionComboItem from "./PromotionComboItem";
import useProductComboList from "@/hooks/product-combo/useProductComboList";
import CustomizedLoading from "@/components/shared/CustomizedLoading";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";

const PromotionComboList = () => {
  const { data, isLoading, isValidating } = useProductComboList();

  return (
    <Box sx={{ p: "64px 48px" }}>
      <Typography
        sx={{ textAlign: "center", fontSize: "28px", mb: "48px", fontWeight: 600 }}
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

        {!isLoading && !isValidating && data?.data.length === 0 && (
          <Grid
            item
            xs={12}
            textAlign="center"
            color="color.textNeutral500"
          >
            <FindInPageOutlinedIcon
              color="inherit"
              sx={{ fontSize: "60px" }}
            />
            <Typography>Không tìm thấy kết quả nào</Typography>
          </Grid>
        )}

        {!isLoading &&
          !isValidating &&
          data?.data.map((combo) => (
            <Grid
              item
              key={combo.id}
              xs={4}
            >
              <PromotionComboItem
                image={combo.comboImage}
                title={combo.comboName}
                description={combo.comboDescriptionSummary}
                id={combo.id}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default PromotionComboList;
