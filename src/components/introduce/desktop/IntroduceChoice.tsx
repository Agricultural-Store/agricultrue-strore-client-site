import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

const IntroduceChoice = () => {
  const [items] = useState([
    {
      icon: "/images/introduce-choice-1.svg",
      title: "Chất Lượng Tinh Túy",
      content: `Được trồng và thu hoạch từ những cánh đồng lúa màu mỡ của Đồng bằng Sông Cửu Long, 
                gạo của chúng tôi mang đến chất lượng tinh khiết, hạt gạo dẻo thơm và mùi vị đặc trưng khó quên.`,
    },
    {
      icon: "/images/introduce-choice-2.svg",
      title: "An Toàn & Hữu Cơ",
      content: `Chúng tôi áp dụng những phương pháp canh tác hữu cơ, không sử dụng hóa chất độc hại, 
                đảm bảo mỗi hạt gạo trắng tinh, 
                mịn màng và an toàn cho sức khỏe của người tiêu dùng.`,
    },
    {
      icon: "/images/introduce-choice-3.svg",
      title: "Đa Dạng Sản Phẩm",
      content: `Từ gạo thơm, gạo dẻo đến gạo dinh dưỡng như gạo đen, gạo đỏ hay gạo nếp, 
                chúng tôi cung cấp đa dạng sản phẩm để phù hợp với nhu cầu và sở thích của mỗi gia đình.`,
    },
    {
      icon: "/images/introduce-choice-4.svg",
      title: "Bảo Quản Tối Ưu",
      content: `Quy trình kiểm tra chất lượng định kỳ giúp chúng tôi nhanh chóng phát hiện và 
                loại bỏ những hạt gạo không đạt chuẩn, 
                đảm bảo người tiêu dùng chỉ nhận được sản phẩm tốt nhất.`,
    },
    {
      icon: "/images/introduce-choice-5.svg",
      title: "Cam Kết Giá Cả",
      content: `Chúng tôi cam kết mang đến cho bạn sản phẩm gạo chất lượng hàng đầu và luôn minh bạch về giá cả, 
                không áp dụng các chiêu thức tiếp thị trái ngược với lợi ích của người tiêu dùng.`,
    },
    {
      icon: "/images/introduce-choice-6.svg",
      title: "Trách Nhiệm Xã Hội",
      content: `Sử dụng gạo của chúng tôi không chỉ đảm bảo sức khỏe cho gia đình bạn mà còn hỗ trợ cho 
                cộng đồng nông dân, 
                giúp họ có một cuộc sống ổn định và phát triển bền vững.`,
    },
  ]);

  return (
    <Box sx={{ bgcolor: "color.bgPrimaryWithOpacity", p: "48px" }}>
      <Box
        width={{
          lg: "85%",
          sm: "100%",
        }}
        sx={{
          m: "0 auto",
          paddingX: {
            sm: "48px !important",
            lg: "0px !important",
          },
        }}
      >
        <Typography sx={{ fontSize: "28px", textAlign: "center", fontWeight: 600 }}>
          Tại sao nên chọn hương gạo quê
        </Typography>
        <Typography sx={{ textAlign: "center", mt: "16px", mb: "64px" }}>
          Kho tàng thiên nhiên nằm giữa trái tim đất Việt, nơi sản xuất những giống gạo
          tinh túy, chất lượng và đặc trưng.
        </Typography>
        <Grid
          container
          spacing={3}
          rowSpacing={4}
        >
          {items.map((item) => (
            <Grid
              item
              xs={4}
              key={item.title}
            >
              <Box
                p="9px"
                mb="24px"
                width="60px"
                height="60px"
                border="1px solid #C3C2C1"
              >
                <Box
                  component="img"
                  src={item.icon}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: {
                    lg: "20px",
                    sm: "18px",
                  },
                  fontWeight: 500,
                  mb: "8px",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: {
                    lg: "16px",
                    sm: "14px",
                  },
                }}
              >
                {item.content}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default IntroduceChoice;
