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
      <HomeBanner />
      <Container
        sx={{
          paddingX: {
            sm: "48px !important",
            lg: "0px !important",
          },
        }}
      >
        <HomeIntroduce />
        <HomeOutstanding />
        <HomeMiddleIntroduce />
        <HomeVision />
        <HomeCertification />
        <HomeOutstandingProduct />
        <HomeRating />
      </Container>
    </>
  );
};

export default HomeDesktop;
