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
      <Box sx={{ pb: "48px", mt: "120px" }}>
        <News />
      </Box>
    </>
  );
};

export default IntroduceLayout;
