"use client";

import {
  Box,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useRef, useState } from "react";
import NewsItem from "../NewsItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PreviousIcon from "../../shared/icons/PreviousArrowIcon";
import NextArrowIcon from "../../shared/icons/NextArrowIcon";

const NewsListDesktop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesLg = useMediaQuery(theme.breakpoints.up("lg"));

  const handleNext = () => {
    let position = 0;
    if (tabIndex < 3) {
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

  const renderItem = () => {
    if (matchesLg) {
      return (
        <>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </>
      );
    }
    if (matchesMd) {
      return (
        <>
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </>
      );
    }
    if (matchesSm) {
      <>
        <NewsItem />
        <NewsItem />
      </>;
    }
    return (
      <>
        <NewsItem />
        <NewsItem />
      </>
    );
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
        <Box
          ref={ref}
          sx={{
            width: "400%",
            transition: "0.5s",
            display: "flex",
          }}
        >
          <Grid
            container
            justifyContent="space-around"
            px="48px"
            width={"25%"}
          >
            {renderItem()}
          </Grid>
          <Grid
            container
            justifyContent="space-around"
            px="48px"
            width={"25%"}
          >
            {renderItem()}
          </Grid>
          <Grid
            container
            justifyContent="space-around"
            px="48px"
            width={"25%"}
          >
            {renderItem()}
          </Grid>
          <Grid
            container
            justifyContent="space-around"
            px="48px"
            width={"25%"}
          >
            {renderItem()}
          </Grid>
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
        <Box
          sx={{
            height: "7px",
            width: tabIndex == 0 ? "21px" : "7px",
            borderRadius: "100px",
            bgcolor: "#63811E",
            transition: ".5s",
          }}
        ></Box>
        <Box
          sx={{
            height: "7px",
            width: tabIndex == 1 ? "21px" : "7px",
            borderRadius: "100px",
            bgcolor: "#63811E",
            transition: ".5s",
          }}
        ></Box>
        <Box
          sx={{
            height: "7px",
            width: tabIndex == 2 ? "21px" : "7px",
            borderRadius: "100px",
            bgcolor: "#63811E",
            transition: ".5s",
          }}
        ></Box>
        <Box
          sx={{
            height: "7px",
            width: tabIndex == 3 ? "21px" : "7px",
            borderRadius: "100px",
            bgcolor: "#63811E",
            transition: ".5s",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default NewsListDesktop;
