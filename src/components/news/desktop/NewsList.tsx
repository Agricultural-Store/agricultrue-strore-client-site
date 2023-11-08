"use client";

import {
  Box,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import NewsItem from "../NewsItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PreviousIcon from "../../shared/icons/PreviousArrowIcon";
import NextArrowIcon from "../../shared/icons/NextArrowIcon";
import { NewsContext } from "@/providers/NewsContext";
import { useRouter } from "next-intl/client";

const NewsListDesktop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [slides, setSlides] = useState(1);

  const ref = useRef<HTMLDivElement>(null);

  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesXs = useMediaQuery(theme.breakpoints.up("xs"));
  const matchesLg = useMediaQuery(theme.breakpoints.up("lg"));
  const router = useRouter();

  const { news } = useContext(NewsContext);

  const handleNext = () => {
    let position = 0;
    if (tabIndex < slides - 1) {
      setTabIndex((pre) => pre + 1);
      position = 25 * (tabIndex + 1);
    }
    if (ref.current?.style && position > 0) {
      ref.current.style.transform = `translateX(-${position}%)`;
    }
  };

  const handlePrevious = () => {
    let position = 75;
    if (tabIndex > 0) {
      setTabIndex((pre) => pre - 1);
      position = 25 * (tabIndex - 1);
    }
    if (ref.current?.style && position < 75) {
      ref.current.style.transform = `translateX(-${position}%)`;
    }
  };

  const handleClick = (id?: number) => {
    router.push(`/news/${id}`);
  };

  useEffect(() => {
    [matchesXs, matchesSm, matchesMd, matchesLg].forEach((value, index) => {
      if (value && news && news.length !== 0) {
        const _slides =
          Math.ceil(news.length / (index + 1)) > 4
            ? 4
            : Math.ceil(news.length / (index + 1));
        setSlides(_slides);
      }
    });
  }, [matchesLg, matchesMd, matchesSm, matchesXs, news]);

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
        <Box
          ref={ref}
          sx={{
            width: "400%",
            transition: "0.5s",
            display: "flex",
          }}
        >
          {Array(...Array(slides)).map((_, index) => {
            const data =
              index == slides - 1 && slides === news.length
                ? news.slice(index * slides, (index + 1) * slides)
                : news;
            return (
              <Grid
                container
                justifyContent="space-around"
                px="48px"
                width={"25%"}
                key={index}
              >
                {data.map((_news) => (
                  <NewsItem
                    key={_news.id}
                    news={_news}
                    onClick={handleClick}
                  />
                ))}
              </Grid>
            );
          })}
        </Box>
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            top: "40%",
            transform: "translateY(50%)",
            display: "flex",
            justifyContent: "space-between",
            px: "18px",
          }}
        >
          <IconButton onClick={handlePrevious}>
            <PreviousIcon />
          </IconButton>
          <IconButton onClick={handleNext}>
            <NextArrowIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "7px",
          alignItems: "center",
          mt: "24px",
        }}
      >
        {Array(...Array(slides)).map((_, index) => (
          <Box
            key={index}
            sx={{
              height: "7px",
              width: tabIndex == index ? "21px" : "7px",
              borderRadius: "100px",
              bgcolor: "#63811E",
              transition: ".5s",
              opacity: tabIndex == index ? 1 : 0.24,
            }}
          ></Box>
        ))}
      </Box>
    </Box>
  );
};

export default NewsListDesktop;
