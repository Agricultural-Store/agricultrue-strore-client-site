import SmallQuoteIcon from "@/components/shared/icons/SmallQuoteIcon";
import YellowStarIcon from "@/components/shared/icons/YellowStarIcon";
import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  content?: string;
};

const PromotionRatingItem = ({ content }: Props) => {
  return (
    <Box
      sx={[
        {
          bgcolor: "color.bgPrimary",
          position: "relative",
          p: "24px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: "6px",
        },
      ]}
    >
      <Box
        sx={{
          position: "absolute",
          zIndex: 2,
          top: -20,
          left: -25,
        }}
      >
        <SmallQuoteIcon color="#98B568" />
      </Box>
      <Typography
        sx={{
          color: "color.textWhite",
          textAlign: "center",
          fontSize: "14px",
          lineHeight: "28px",
        }}
      >
        {content}
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          mt: "24px",
        }}
      >
        <YellowStarIcon />
        <YellowStarIcon />
        <YellowStarIcon />
        <YellowStarIcon />
        <YellowStarIcon />
      </Box>
    </Box>
  );
};

export default PromotionRatingItem;
