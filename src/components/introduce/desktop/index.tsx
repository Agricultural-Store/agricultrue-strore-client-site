import React from "react";
import IntroduceBanner from "./IntroduceBanner";
import IntroduceStory from "./IntroduceStory";
import IntroduceChoice from "./IntroduceChoice";
import IntroduceMoreContent from "./IntroduceMoreContent";
import { Container } from "@mui/material";

const IntroduceDesktop = () => {
  return (
    <>
      <Container
        sx={{
          paddingX: {
            sm: "0px !important",
          },
        }}
      >
        <IntroduceBanner />
        <IntroduceStory />
        <IntroduceChoice />
        <IntroduceMoreContent />
      </Container>
    </>
  );
};

export default IntroduceDesktop;
