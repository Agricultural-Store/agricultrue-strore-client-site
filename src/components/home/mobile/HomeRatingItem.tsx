import QuoteGrayDownIcon from "@/components/shared/icons/QuoteGrayDownIcon";
import QuoteGrayUpIcon from "@/components/shared/icons/QuoteGrayUpIcon";
import YellowStarIcon from "@/components/shared/icons/YellowStarIcon";
import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  content?: string;
};

const HomeRatingItem = ({ content }: Props) => {
  return (
    <Box
      sx={[
        {
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        },
      ]}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          mt: "24px",
          mb: "24px",
        }}
      >
        <YellowStarIcon />
        <YellowStarIcon />
        <YellowStarIcon />
        <YellowStarIcon />
        <YellowStarIcon />
      </Box>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            zIndex: 2,
            top: -20,
            left: 0,
          }}
        >
          <QuoteGrayUpIcon />
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            px: "10px",
            fontSize: "14px",
          }}
        >
          {content}
        </Typography>
        <Box
          sx={{
            position: "absolute",
            zIndex: 2,
            bottom: -30,
            right: 20,
          }}
        >
          <QuoteGrayDownIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeRatingItem;
