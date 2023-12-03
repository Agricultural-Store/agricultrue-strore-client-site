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

const NewsPageItem = ({ news, onClick }: Props) => {
  const handleClick = (id?: number) => {
    onClick?.(id);
  };

  return (
    <Grid
      item
      md={4}
      sm={4}
      xs={12}
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
          width: "100%",
          bgcolor: "color.bgPrimaryWithOpacity",
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
            px: "16px",
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
            Tin Tức {news?.newsCategory ? `| ${news.newsCategory}` : ""}
          </Typography>
          <Typography
            className="line-clamp"
            sx={{
              fontSize: {
                lg: "20px",
                xs: "16px",
              },
              minHeight: "48px",
            }}
          >
            {news?.newsTitle}
          </Typography>
          <Box
            component="div"
            maxHeight="100px"
            minHeight="100px"
            overflow="hidden"
            dangerouslySetInnerHTML={{ __html: news?.newsContent || "" }}
            sx={{
              fontSize: {
                lg: "16px",
                xs: "14px",
              },
              "*": {
                fontSize: "14px !important",
                fontWeight: 400,
              },
            }}
          ></Box>
        </CardContent>
        <CardActions sx={{ p: 0, px: "16px", pb: "16px" }}>
          <Button
            variant="text"
            sx={{ display: "flex", alignItems: "center" }}
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

export default NewsPageItem;
