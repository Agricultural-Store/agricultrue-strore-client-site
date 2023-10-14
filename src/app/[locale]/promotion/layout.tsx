import News from "@/components/news";
import { Box } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const PromotionLayout = ({ children }: Props) => {
  return (
    <>
      {children}
      <Box sx={{ pb: "48px", mt: "60px" }}>
        <News />
      </Box>
    </>
  );
};

export default PromotionLayout;
