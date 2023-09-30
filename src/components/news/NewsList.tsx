"use client";

import { Box, Grid, IconButton, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import NewsItem from "./NewsItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PreviousIcon from "../shared/icons/PreviousArrowIcon";
import NextArrowIcon from "../shared/icons/NextArrowIcon";

const NewsList = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <Box>
      <Typography
        sx={{ my: "48rem", textAlign: "center", fontSize: "28rem", fontWeight: 600 }}
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
            px="48rem"
            width={"25%"}
          >
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </Grid>
          <Grid
            container
            justifyContent="space-around"
            px="48rem"
            width={"25%"}
          >
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </Grid>
          <Grid
            container
            justifyContent="space-around"
            px="48rem"
            width={"25%"}
          >
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </Grid>
          <Grid
            container
            justifyContent="space-around"
            px="48rem"
            width={"25%"}
          >
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
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
            px: "18rem",
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
          gap: "7rem",
          alignItems: "center",
          mt: "24rem",
        }}
      >
        <Box
          sx={{
            height: "7rem",
            width: tabIndex == 0 ? "21rem" : "7rem",
            borderRadius: "100rem",
            bgcolor: "#63811E",
            transition: ".5s",
          }}
        ></Box>
        <Box
          sx={{
            height: "7rem",
            width: tabIndex == 1 ? "21rem" : "7rem",
            borderRadius: "100rem",
            bgcolor: "#63811E",
            transition: ".5s",
          }}
        ></Box>
        <Box
          sx={{
            height: "7rem",
            width: tabIndex == 2 ? "21rem" : "7rem",
            borderRadius: "100rem",
            bgcolor: "#63811E",
            transition: ".5s",
          }}
        ></Box>
        <Box
          sx={{
            height: "7rem",
            width: tabIndex == 3 ? "21rem" : "7rem",
            borderRadius: "100rem",
            bgcolor: "#63811E",
            transition: ".5s",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default NewsList;
