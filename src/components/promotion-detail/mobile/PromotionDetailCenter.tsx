import CustomizedTab from "@/components/shared/tab/CustomizedTab";
import { CustomizedTabPanel } from "@/components/shared/tab/CustomizedTabPanel";
import { Box } from "@mui/material";
import React, { useState } from "react";
import PromotionDetailDescription from "./PromotionDetailDescription";
import PromotionDetailDetail from "./PromotionDetailDetail";
import ProductRating from "../ProductRating";
import { ProductComboDetail } from "@/types/product-combo-detail";

type Props = {
  combo?: ProductComboDetail;
};

const PromotionDetailCenter = ({ combo }: Props) => {
  const [tabActive, setTabActive] = useState(0);

  return (
    <Box sx={{ px: "16px" }}>
      <CustomizedTab
        value={tabActive}
        onChange={setTabActive}
        labels={["Mô tả sản phẩm", "Thông tin chi tiết", "Đánh giá"]}
      >
        <CustomizedTabPanel
          index={0}
          value={tabActive}
        >
          <PromotionDetailDescription combo={combo} />
        </CustomizedTabPanel>
        <CustomizedTabPanel
          index={1}
          value={tabActive}
        >
          <PromotionDetailDetail combo={combo} />
        </CustomizedTabPanel>
        <CustomizedTabPanel
          index={2}
          value={tabActive}
        >
          <ProductRating />
        </CustomizedTabPanel>
      </CustomizedTab>
    </Box>
  );
};

export default PromotionDetailCenter;
