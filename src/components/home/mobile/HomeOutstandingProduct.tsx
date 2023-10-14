import NextIcon from "@/components/shared/icons/NextIcon";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const HomeOutstandingProduct = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        mt: "48px",
        px: "16px",
      }}
    >
      <Typography sx={{ fontSize: "20px", lineHeight: "42px", fontWeight: 600 }}>
        Sản phẩm nổi bật
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          my: "16px",
          fontSize: "14px",
        }}
      >
        Đồng Bằng Sông Cửu Long, với đất đai màu mỡ và nguồn nước từ hệ thống sông ngòi
        chảy qua, đã tạo ra những giống gạo nổi tiếng không chỉ trong nước mà còn trên thị
        trường quốc tế.
      </Typography>
      <Grid
        container
        py="48px"
        rowGap="10px"
      >
        <Grid
          item
          xs={12}
        >
          <Box
            sx={{
              width: "80%",
              m: "0 auto",
              height: "320px",
              bgcolor: "rgba(40, 140, 20, 0.1)",
              borderRadius: "5px",
            }}
          ></Box>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Box
            sx={{
              width: "80%",
              m: "0 auto",
              height: "320px",
              bgcolor: "rgba(40, 140, 20, 0.1)",
              borderRadius: "5px",
            }}
          ></Box>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Box
            sx={{
              width: "80%",
              m: "0 auto",
              height: "320px",
              bgcolor: "rgba(40, 140, 20, 0.1)",
              borderRadius: "5px",
            }}
          ></Box>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Box
            sx={{
              width: "80%",
              m: "0 auto",
              height: "320px",
              bgcolor: "rgba(40, 140, 20, 0.1)",
              borderRadius: "5px",
            }}
          ></Box>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
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
            Xem tất cả
          </Box>
          <NextIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default HomeOutstandingProduct;
