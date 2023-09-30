"use client";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import NextIcon from "../shared/icons/NextIcon";

const NewsItem = () => {
  return (
    <Grid
      item
      md={3}
      xs={4}
      px={"10rem"}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Card
        sx={{
          maxWidth: {
            lg: "294rem",
            md: "254rem",
          },
          maxHeight: "448rem",
          height: {
            md: "350rem",
          },
          borderRadius: 0,
        }}
      >
        <CardMedia
          component="img"
          image="/images/image.png"
          sx={{ height: "46%", width: "100%", objectFit: "cover" }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8rem",
            py: 0,
            pt: "16rem",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                lg: "16rem",
                xs: "14rem",
              },
              textAlign: "justify",
              color: "#777E90",
            }}
          >
            Tin Tức | Nông nghiệp
          </Typography>
          <Typography
            className="line-clamp"
            sx={{
              fontSize: {
                lg: "20rem",
                xs: "16rem",
              },
              textAlign: "justify",
            }}
          >
            Làm nông “tử tế” ở Đồng bằng sông Cửu Long
          </Typography>
          <Typography
            className="line-clamp"
            sx={{
              fontSize: {
                lg: "16rem",
                xs: "14rem",
              },
              textAlign: "justify",
            }}
          >
            Sạch từ sản xuất đến bàn ăn không chỉ là câu chuyện của cây lúa, mà vựa ...
          </Typography>
        </CardContent>
        <CardActions sx={{ py: 0, pb: "16rem" }}>
          <Button
            variant="text"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              sx={{
                fontSize: {
                  lg: "16rem",
                  xs: "14rem",
                },
                paddingRight: "8rem",
              }}
            >
              XEM CHI TIẾT
            </Box>
            <NextIcon />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default NewsItem;
