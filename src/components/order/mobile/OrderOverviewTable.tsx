import { Box, Typography } from "@mui/material";
import React from "react";
import OrderOverviewItem from "./OrderOverviewItem";

const OrderOverviewTable = () => {
  return (
    <>
      <Typography
        variant="h3"
        my="16px"
      >
        Ngày đặt hàng: 01/01/2000
      </Typography>
      <Box>
        <Typography
          variant="h3"
          my="16px"
        >
          Sản phẩm
        </Typography>
        <Box>
          <OrderOverviewItem />
          <OrderOverviewItem />
        </Box>
      </Box>
    </>
  );
};

export default OrderOverviewTable;
