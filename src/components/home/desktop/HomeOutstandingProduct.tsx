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
        mt: "64rem",
        px: "48rem",
      }}
    >
      <Typography sx={{ fontSize: "28rem", lineHeight: "42rem", fontWeight: 600 }}>
        Chứng nhận sản phẩm
      </Typography>
      <Typography sx={{ width: "70%", m: "0 auto", textAlign: "center", my: "16rem" }}>
        Đồng Bằng Sông Cửu Long, với đất đai màu mỡ và nguồn nước từ hệ thống sông ngòi
        chảy qua, đã tạo ra những giống gạo nổi tiếng không chỉ trong nước mà còn trên thị
        trường quốc tế.
      </Typography>
      <Grid
        container
        py="48rem"
      >
        <Grid
          item
          xs={3}
        >
          <Box
            sx={{
              width: "80%",
              m: "0 auto",
              height: "320rem",
              bgcolor: "rgba(40, 140, 20, 0.1)",
              borderRadius: "5rem",
            }}
          ></Box>
        </Grid>
        <Grid
          item
          xs={3}
        >
          <Box
            sx={{
              width: "80%",
              m: "0 auto",
              height: "320rem",
              bgcolor: "rgba(40, 140, 20, 0.1)",
              borderRadius: "5rem",
            }}
          ></Box>
        </Grid>
        <Grid
          item
          xs={3}
        >
          <Box
            sx={{
              width: "80%",
              m: "0 auto",
              height: "320rem",
              bgcolor: "rgba(40, 140, 20, 0.1)",
              borderRadius: "5rem",
            }}
          ></Box>
        </Grid>
        <Grid
          item
          xs={3}
        >
          <Box
            sx={{
              width: "80%",
              m: "0 auto",
              height: "320rem",
              bgcolor: "rgba(40, 140, 20, 0.1)",
              borderRadius: "5rem",
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
                lg: "16rem",
                xs: "14rem",
              },
              paddingRight: "8rem",
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
