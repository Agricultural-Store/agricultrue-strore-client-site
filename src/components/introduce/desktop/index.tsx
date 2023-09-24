import React from "react";
import IntroduceBanner from "./IntroduceBanner";
import IntroduceStory from "./IntroduceStory";
import IntroduceChoice from "./IntroduceChoice";
import IntroduceMoreContent from "./IntroduceMoreContent";

const IntroduceDesktop = () => {
  return (
    <>
      <IntroduceBanner />
      <IntroduceStory />
      <IntroduceChoice />
      <IntroduceMoreContent />
    </>
  );
};

export default IntroduceDesktop;
