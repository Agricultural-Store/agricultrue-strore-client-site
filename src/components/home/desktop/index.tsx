import React from "react";
import HomeBanner from "./HomeBanner";
import HomeCertification from "./HomeCertification";
import HomeIntroduce from "./HomeIntroduce";
import HomeMiddleIntroduce from "./HomeMiddleIntroduce";
import HomeOutstanding from "./HomeOutstanding";
import HomeVision from "./HomeVision";
import HomeOutstandingProduct from "./HomeOutstandingProduct";
import HomeRating from "./HomeRating";
import { Box } from "@mui/material";

const HomeDesktop = () => {
  return (
    <>
      <HomeBanner />
      <Box
        width={{
          lg: "85%",
          sm: "100%",
        }}
        sx={{
          m: "0 auto",
          paddingX: {
            sm: "48px !important",
            lg: "0px !important",
          },
        }}
      >
        <HomeIntroduce />
      </Box>
      <HomeOutstanding />
      <Box
        width={{
          lg: "85%",
          sm: "100%",
        }}
        sx={{
          m: "0 auto",
          paddingX: {
            sm: "48px !important",
            lg: "0px !important",
          },
        }}
      >
        <HomeMiddleIntroduce />
        <HomeVision />
      </Box>
      <HomeCertification />

      <Box
        width={{
          lg: "85%",
          sm: "100%",
        }}
        sx={{
          m: "0 auto",
          paddingX: {
            sm: "48px !important",
            lg: "0px !important",
          },
        }}
      >
        <HomeOutstandingProduct />
      </Box>
      <HomeRating />
    </>
  );
};

export default HomeDesktop;
