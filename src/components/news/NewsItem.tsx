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
import { News } from "@/types/news";

type Props = {
  news?: News;
  onClick?: (id?: number) => void;
};

const NewsItem = ({ news, onClick }: Props) => {
  const handleClick = (id?: number) => {
    onClick?.(id);
  };

  return (
    <Grid
      item
      md={3}
      xs={4}
      px={"10px"}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Card
        sx={{
          maxWidth: {
            lg: "294px",
            md: "254px",
          },

          borderRadius: 0,
        }}
      >
        <CardMedia
          component="img"
          image={news?.newImage || "/images/image.png"}
          width="100%"
          height="200px"
          sx={{ objectFit: "cover" }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            p: 0,
            pt: "16px",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                lg: "16px",
                xs: "14px",
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
                lg: "20px",
                xs: "16px",
              },
              textAlign: "justify",
            }}
          >
            {news?.newsTitle}
          </Typography>
          <Typography
            className="line-clamp"
            sx={{
              fontSize: {
                lg: "16px",
                xs: "14px",
              },
              textAlign: "justify",
            }}
          >
            Sạch từ sản xuất đến bàn ăn không chỉ là câu chuyện của cây lúa, mà vựa ...
          </Typography>
        </CardContent>
        <CardActions sx={{ p: 0, pb: "16px" }}>
          <Button
            variant="text"
            sx={{ display: "flex", alignItems: "center", pl: 0 }}
          >
            <Box
              onClick={() => handleClick(news?.id)}
              sx={{
                fontSize: {
                  lg: "16px",
                  xs: "14px",
                },
                paddingRight: "8px",
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
