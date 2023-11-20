"use client";

import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import NewsItem from "../NewsItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NewsContext } from "@/providers/NewsContext";
import { useRouter } from "next-intl/client";

const NewsListMobile = () => {
  const { news } = useContext(NewsContext);
  const router = useRouter();

  const handleClick = (id?: number) => {
    router.push(`/news/${id}`);
  };
  return (
    <Box>
      <Typography
        sx={{ my: "48px", textAlign: "center", fontSize: "28px", fontWeight: 600 }}
      >
        Tin Tức
      </Typography>
      <Box
        sx={{ width: "100%", height: "auto", position: "relative", overflow: "hidden" }}
      >
        {news?.map((_news) => (
          <Box
            mb="12px"
            key={_news.id}
          >
            <NewsItem
              key={_news.id}
              news={_news}
              onClick={handleClick}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default NewsListMobile;
