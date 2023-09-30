import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ProductDetailRatingForm from "./ProductDetailRatingForm";
import ProductDetailRatingList from "./ProductDetailRatingList";
import { ProductRating } from "@/types/product-rating";

const ProductRating = () => {
  const [ratingList, setRatingList] = useState<ProductRating[]>([
    {
      createdAt: "17 tháng 09 năm 2023",
      feedback: `Loại gạo này rất ngon, tôi thích nó😍 Tôi thực sự ấn tượng với chất lượng của gạo
      ST25. Khi nấu, hạt gạo giữ nguyên hình dáng, không bị nát hay dính vào nhau. Điều
      tôi yêu thích nhất là hương thơm dễ chịu và độc đáo của nó, khó có thể so sánh
      được với bất kỳ loại gạo nào khác.`,
      productRating: 4,
      username: "Đinh Phúc Khang",
      userImage: "/images/profile-avatar.svg",
    },
  ]);

  return (
    <Box>
      <Typography sx={{ fontWeight: 700, fontSize: "20px", mb: "20px" }}>
        Đánh giá từ người dùng
      </Typography>
      <ProductDetailRatingList ratingList={ratingList} />
      <Typography sx={{ fontWeight: 700, fontSize: "20px", mb: "20px", mt: "50px" }}>
        Đánh giá sản phẩm
      </Typography>
      <ProductDetailRatingForm />
    </Box>
  );
};

export default ProductRating;
