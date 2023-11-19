import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import PromotionRatingItem from "./PromotionRatingItem";

const PromotionRating = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleClick = (tab: number) => {
    setTabIndex(tab);
  };

  return (
    <Box
      sx={{
        py: "48px",
        bgcolor: `color.bgPrimaryWithOpacity`,
        mt: "64px",
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Typography
        sx={{ mb: "48px", textAlign: "center", fontSize: "28px", fontWeight: 600 }}
      >
        Hơn 1.000+ đánh giá từ khách hàng hài lòng.
      </Typography>
      <Box
        sx={{ width: "100%", overflowX: "hidden", px: "200px" }}
        component="div"
      >
        <Box
          sx={{
            width: "100%",
            height: "300px",
            display: "flex",
            alignItems: "center",

            left: 0,
          }}
        >
          {Array(...Array(4)).map((_v, index) => (
            <PromotionRatingItem
              onClick={handleClick}
              index={index}
              key={index}
              isActive={index === tabIndex ? true : false}
              content={` Với tôi, việc chọn gạo không chỉ dừng lại ở chất lượng, mà còn ở sự an toàn thực
        phẩm. Đã có nhiều lần tôi lo lắng khi mua gạo trên thị trường với nhiều thông tin
        về gạo kém chất lượng. Nhưng với gạo Đồng bằng Sông Cửu Long, tôi hoàn toàn yên
        tâm. Không chỉ vì chất lượng tốt mà còn ở sự minh bạch trong quy trình sản xuất.
        Mỗi bữa cơm trở nên an tâm và ngon miệng hơn.`}
            />
          ))}
          <PromotionRatingItem
            // onClick={handleClick}
            index={-1}
          />
        </Box>
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
            opacity: tabIndex == 0 ? 1 : 0.24,
          }}
        ></Box>
        <Box
          sx={{
            height: "7px",
            width: tabIndex == 1 ? "21px" : "7px",
            borderRadius: "100px",
            bgcolor: "#63811E",
            transition: ".5s",
            opacity: tabIndex == 1 ? 1 : 0.24,
          }}
        ></Box>
        <Box
          sx={{
            height: "7px",
            width: tabIndex == 2 ? "21px" : "7px",
            borderRadius: "100px",
            bgcolor: "#63811E",
            transition: ".5s",
            opacity: tabIndex == 2 ? 1 : 0.24,
          }}
        ></Box>
        <Box
          sx={{
            height: "7px",
            width: tabIndex == 3 ? "21px" : "7px",
            borderRadius: "100px",
            bgcolor: "#63811E",
            transition: ".5s",
            opacity: tabIndex == 3 ? 1 : 0.24,
          }}
        ></Box>
        <Box
          sx={{
            height: "7px",
            width: tabIndex == 4 ? "21px" : "7px",
            borderRadius: "100px",
            bgcolor: "#63811E",
            transition: ".5s",
            opacity: tabIndex == 4 ? 1 : 0.24,
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default PromotionRating;
