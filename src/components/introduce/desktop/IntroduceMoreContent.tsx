import NextIcon from "@/components/shared/icons/NextIcon";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import React from "react";

const IntroduceMoreContent = () => {
  return (
    <Box>
      <Box sx={{ height: "500px", px: "48px", py: "64px", display: "flex" }}>
        <Box
          component="img"
          src="/images/introduce-more-content-1.png"
          sx={{ width: "40%" }}
        />
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
            ml: "64px",
            width: "calc(100% - 50%)",
          }}
        >
          <Typography
            sx={{
              textTransform: "capitalize",
              whiteSpace: "pre-line",
              fontSize: "28px",
              fontWeight: 600,
            }}
          >
            Hành Trình Từ Đồng Ruộng{" "}
            <Typography
              component="span"
              sx={{ color: "color.textPrimary300", fontSize: "inherit", fontWeight: 600 }}
            >
              Đến Bữa Cơm Gia Đình
            </Typography>
          </Typography>
          <Typography
            className="line-clamp-5"
            sx={{
              py: "16px",
              fontSize: "16px",
              lineHeight: "28px",
              fontWeight: "400px",
              maxHeight: "150px",
            }}
          >
            Lựa chọn gạo từ vùng Đồng bằng Sông Cửu Long không chỉ đảm bảo chất lượng mà
            còn giúp người tiêu dùng thêm phần trân trọng giá trị văn hóa và công sức của
            những người nông dân tại vùng đất này. Đặt niềm tin vào Hương Gạo Quê sẽ cảm
            nhận được tình yêu và đam mê trong mỗi hạt gạo.
          </Typography>
          <Button
            variant="text"
            sx={{ display: "flex", alignItems: "center", textTransform: "capitalize" }}
          >
            <Box
              sx={{
                fontSize: {
                  lg: "16px",
                  xs: "14px",
                },
                paddingRight: "8px",
                textTransform: "capitalize",
              }}
            >
              Tìm hiểu thêm
            </Box>
            <NextIcon />
          </Button>
        </Box>
      </Box>
      <Box sx={{ height: "558px", px: "48px", py: "64px", display: "flex" }}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
            mr: "64px",
          }}
        >
          <Typography
            sx={{
              textTransform: "capitalize",
              whiteSpace: "pre-line",
              fontSize: "28px",
              fontWeight: 600,
            }}
          >
            Sự Kết Hợp Hoàn Mỹ của Vị Ngon và
          </Typography>
          <Typography
            sx={{ color: "color.textPrimary300", fontSize: "28px", fontWeight: 600 }}
          >
            Lợi Ích Sức Khỏe
          </Typography>

          <List sx={{ ml: "16px" }}>
            <ListItem sx={{ display: "list-item", listStyleType: "disc" }}>
              Nhờ quy trình canh tác và chăm sóc đặc biệt, gạo ở đây có độ dẻo mềm khi
              nấu, tạo cảm giác ngon miệng và dễ tiêu.
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc" }}>
              Với sự quản lý nghiêm ngặt trong việc sử dụng phân bón và phòng trừ sâu
              bệnh, gạo ở đây đạt tiêu chuẩn an toàn thực phẩm quốc tế.
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc" }}>
              Nhờ việc áp dụng các biện pháp canh tác bền vững, gạo Đồng bằng Sông Cửu
              Long không chỉ chăm sóc sức khỏe mà còn bảo vệ môi trường.
            </ListItem>
          </List>
          <Button
            variant="text"
            sx={{ display: "flex", alignItems: "center", textTransform: "capitalize" }}
          >
            <Box
              sx={{
                fontSize: {
                  lg: "16px",
                  xs: "14px",
                },
                paddingRight: "8px",
                textTransform: "capitalize",
              }}
            >
              Tìm hiểu thêm
            </Box>
            <NextIcon />
          </Button>
        </Box>
        <Box
          component="img"
          src="/images/introduce-more-content-2.png"
          sx={{ width: "40%" }}
        />
      </Box>
    </Box>
  );
};

export default IntroduceMoreContent;
