import { Box, CardActionArea, CardMedia, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const IntroduceStory = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: "64px 120rem",
      }}
    >
      <Typography
        sx={{ width: "100%", textAlign: "center", fontSize: "28rem", fontWeight: 600 }}
      >
        Câu Chuyện Hạt Gạo Cửu Long
      </Typography>
      <Typography sx={{ width: "100%", textAlign: "center", mt: "24rem" }}>
        Lúa gạo đồng bằng Sông Cửu Long không chỉ là một nguồn thực phẩm quý giá mà còn là
        biểu tượng của vùng đất màu mỡ, của tình yêu và niềm tự hào của người dân nơi đây.
        Mỗi lần thưởng thức hạt gạo, người tiêu dùng không chỉ cảm nhận hương vị ngon
        miệng mà còn nghe thấy tiếng vọng của sông nước, của bản lời ca dân gian và trái
        tim của mỗi người nông dân.
      </Typography>
      <Box
        width="100%"
        height="600rem"
        mt="48rem"
      >
        <ReactPlayer
          url="https://youtu.be/6AbwqTpK7CE"
          width="100%"
          height="100%"
          controls
        />
      </Box>
    </Box>
  );
};

export default IntroduceStory;
