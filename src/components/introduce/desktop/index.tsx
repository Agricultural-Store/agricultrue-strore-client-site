import React from "react";
import IntroduceBanner from "./IntroduceBanner";
import IntroduceStory from "./IntroduceStory";
import IntroduceChoice from "./IntroduceChoice";
import IntroduceMoreContent from "./IntroduceMoreContent";
import { Box } from "@mui/material";
const IntroduceDesktop = () => {
  return (
    <>
      <IntroduceBanner />
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
        <IntroduceStory />
      </Box>
      <IntroduceChoice />
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
        <IntroduceMoreContent />
      </Box>
    </>
  );
};

export default IntroduceDesktop;
