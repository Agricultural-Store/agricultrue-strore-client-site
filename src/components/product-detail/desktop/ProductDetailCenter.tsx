import CustomizedTab from "@/components/shared/tab/CustomizedTab";
import { CustomizedTabPanel } from "@/components/shared/tab/CustomizedTabPanel";
import { Box } from "@mui/material";
import React, { useState } from "react";
import ProductDetailDescription from "./ProductDetailDescription";
import ProductDetailDetail from "./ProductDetailDetail";
import { ProductDetail } from "@/types/product-detail";
import ProductRating from "../ProductRating";

type Props = {
  product?: ProductDetail;
};

const ProductDetailCenter = ({ product }: Props) => {
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
          <ProductDetailDescription product={product} />
        </CustomizedTabPanel>
        <CustomizedTabPanel
          index={1}
          value={tabActive}
        >
          <ProductDetailDetail product={product} />
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

export default ProductDetailCenter;
