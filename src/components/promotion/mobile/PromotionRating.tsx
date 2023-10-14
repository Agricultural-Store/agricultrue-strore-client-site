import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import PromotionRatingItem from "./PromotionRatingItem";

const PromotionRating = () => {
  const [tabIndex] = useState(0);

  return (
    <Box
      sx={{
        py: "48px",
        bgcolor: `color.bgPrimaryWithOpacity`,
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Typography
        sx={{ mb: "48px", textAlign: "center", fontSize: "20px", fontWeight: 600 }}
      >
        Hơn 1.000+ đánh giá từ khách hàng hài lòng.
      </Typography>
      <Box
        sx={{
          width: "300%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "80px",
          transform: "translateX(-33.33333%)",
        }}
      >
        <PromotionRatingItem
          content={` Với tôi, việc chọn gạo không chỉ dừng lại ở chất lượng, mà còn ở sự an toàn thực
        phẩm. Đã có nhiều lần tôi lo lắng khi mua gạo trên thị trường với nhiều thông tin
        về gạo kém chất lượng. Nhưng với gạo Đồng bằng Sông Cửu Long, tôi hoàn toàn yên
        tâm. Không chỉ vì chất lượng tốt mà còn ở sự minh bạch trong quy trình sản xuất.
        Mỗi bữa cơm trở nên an tâm và ngon miệng hơn.`}
        />
        <PromotionRatingItem
          content={` Với tôi, việc chọn gạo không chỉ dừng lại ở chất lượng, mà còn ở sự an toàn thực
        phẩm. Đã có nhiều lần tôi lo lắng khi mua gạo trên thị trường với nhiều thông tin
        về gạo kém chất lượng. Nhưng với gạo Đồng bằng Sông Cửu Long, tôi hoàn toàn yên
        tâm. Không chỉ vì chất lượng tốt mà còn ở sự minh bạch trong quy trình sản xuất.
        Mỗi bữa cơm trở nên an tâm và ngon miệng hơn.`}
        />
        <PromotionRatingItem
          content={` Với tôi, việc chọn gạo không chỉ dừng lại ở chất lượng, mà còn ở sự an toàn thực
        phẩm. Đã có nhiều lần tôi lo lắng khi mua gạo trên thị trường với nhiều thông tin
        về gạo kém chất lượng. Nhưng với gạo Đồng bằng Sông Cửu Long, tôi hoàn toàn yên
        tâm. Không chỉ vì chất lượng tốt mà còn ở sự minh bạch trong quy trình sản xuất.
        Mỗi bữa cơm trở nên an tâm và ngon miệng hơn.`}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "7px",
          alignItems: "center",
          mt: "48px",
        }}
      >
        <Box
          sx={{
            height: "7px",
            width: tabIndex == 0 ? "21px" : "7px",
            borderRadius: "100px",
            bgcolor: "#63811E",
            transition: ".5s",
          }}
        ></Box>
        <Box
          sx={{
            height: "7px",
            width: tabIndex == 1 ? "21px" : "7px",
            borderRadius: "100px",
            bgcolor: "#63811E",
            transition: ".5s",
          }}
        ></Box>
        <Box
          sx={{
            height: "7px",
            width: tabIndex == 2 ? "21px" : "7px",
            borderRadius: "100px",
            bgcolor: "#63811E",
            transition: ".5s",
          }}
        ></Box>
        <Box
          sx={{
            height: "7px",
            width: tabIndex == 3 ? "21px" : "7px",
            borderRadius: "100px",
            bgcolor: "#63811E",
            transition: ".5s",
          }}
        ></Box>
        <Box
          sx={{
            height: "7px",
            width: tabIndex == 4 ? "21px" : "7px",
            borderRadius: "100px",
            bgcolor: "#63811E",
            transition: ".5s",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default PromotionRating;
