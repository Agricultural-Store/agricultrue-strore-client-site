import CustomizedTab from "@/components/shared/tab/CustomizedTab";
import { CustomizedTabPanel } from "@/components/shared/tab/CustomizedTabPanel";
import { Box } from "@mui/material";
import React, { useState } from "react";
import PromotionDetailDescription from "./PromotionDetailDescription";
import PromotionDetailDetail from "./PromotionDetailDetail";
import PromotionRating from "../PromotionRating";
import { ProductComboDetail } from "@/types/product-combo-detail";

type Props = {
  combo?: ProductComboDetail;
};

const PromotionDetailCenter = ({ combo }: Props) => {
  const [tabActive, setTabActive] = useState(0);

  return (
    <Box sx={{ width: "67%", m: "0 auto" }}>
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
          <PromotionRating />
        </CustomizedTabPanel>
      </CustomizedTab>
    </Box>
  );
};

export default PromotionDetailCenter;
