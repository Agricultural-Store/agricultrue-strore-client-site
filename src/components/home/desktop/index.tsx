import React from "react";
import HomeBanner from "./HomeBanner";
import HomeCertification from "./HomeCertification";
import HomeIntroduce from "./HomeIntroduce";
import HomeMiddleIntroduce from "./HomeMiddleIntroduce";
import HomeOutstanding from "./HomeOutstanding";
import HomeVision from "./HomeVision";
import HomeOutstandingProduct from "./HomeOutstandingProduct";
import HomeRating from "./HomeRating";
import { Container } from "@mui/material";

const HomeDesktop = () => {
  return (
    <>
      <Container
        sx={{
          paddingX: {
            sm: "0px !important",
          },
        }}
      >
        <HomeBanner />
      </Container>
      <Container
        sx={{
          paddingX: {
            sm: "48px !important",
            lg: "0px !important",
          },
        }}
      >
        <HomeIntroduce />
      </Container>
      <Container
        sx={{
          paddingX: {
            sm: "0px !important",
          },
        }}
      >
        <HomeOutstanding />
      </Container>
      <Container
        sx={{
          paddingX: {
            sm: "48px !important",
            lg: "0px !important",
          },
        }}
      >
        <HomeMiddleIntroduce />
        <HomeVision />
      </Container>
      <Container
        sx={{
          paddingX: {
            sm: "0px !important",
          },
        }}
      >
        <HomeCertification />
      </Container>
      <Container
        sx={{
          paddingX: {
            sm: "48px !important",
            lg: "0px !important",
          },
        }}
      >
        <HomeOutstandingProduct />
      </Container>
      <Container
        sx={{
          paddingX: {
            sm: "0px !important",
          },
        }}
      >
        <HomeRating />
      </Container>
    </>
  );
};

export default HomeDesktop;
