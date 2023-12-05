import FooterImage from "@/components/layouts/FooterImage";
import News from "@/components/news";
import { Box } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const IntroduceLayout = ({ children }: Props) => {
  return (
    <>
      {children}
      <Box
        width={{
          lg: "85%",
          sm: "100%",
        }}
        sx={{
          m: "0 auto",
          pb: "48px",
          mt: "48px",
          paddingX: {
            sm: "48px !important",
            lg: "0px !important",
          },
        }}
      >
        <News />
      </Box>
      <FooterImage />
    </>
  );
};

export default IntroduceLayout;
