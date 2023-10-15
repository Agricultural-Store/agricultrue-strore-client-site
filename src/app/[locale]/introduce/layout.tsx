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
      <Box sx={{ pb: "48px", mt: "48px" }}>
        <News />
      </Box>
      <FooterImage />
    </>
  );
};

export default IntroduceLayout;
