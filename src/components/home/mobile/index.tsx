import React from "react";
import HomeBanner from "./HomeBanner";
import HomeCertification from "./HomeCertification";
import HomeIntroduce from "./HomeIntroduce";
import HomeMiddleIntroduce from "./HomeMiddleIntroduce";
import HomeOutstanding from "./HomeOutstanding";
import HomeVision from "./HomeVision";
import HomeOutstandingProduct from "./HomeOutstandingProduct";
import HomeRating from "./HomeRating";

const HomeMobile = () => {
  return (
    <>
      <HomeBanner />
      <HomeIntroduce />
      <HomeOutstanding />
      <HomeMiddleIntroduce />
      <HomeVision />
      <HomeCertification />
      <HomeOutstandingProduct />
      <HomeRating />
    </>
  );
};

export default HomeMobile;
