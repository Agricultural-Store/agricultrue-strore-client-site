import LargeQuoteIcon from "@/components/shared/icons/LargeQuoteIcon";
import SmallQuoteIcon from "@/components/shared/icons/SmallQuoteIcon";
import YellowStarIcon from "@/components/shared/icons/YellowStarIcon";
import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  content?: string;
  isActive?: boolean;
};

const HomeRatingItem = ({ content, isActive }: Props) => {
  return (
    <Box
      sx={[
        {
          width: "calc(70vw)",
          height: isActive ? "220px" : "200px",
          bgcolor: "color.bgPrimary",
          position: "relative",
          p: "24px 30px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: "6px",
        },
        isActive ?? {
          ":after": {
            content: "''",
            width: "100%",
            height: "100%",
            zIndex: 1,
            position: "absolute",
            top: 0,
            left: 0,
            bgcolor: "rgba(217,227,206, 0.5)",
          },
        },
      ]}
    >
      <Box
        sx={{
          position: "absolute",
          zIndex: 2,
          top: isActive ? -35 : -20,
          left: isActive ? -40 : -25,
        }}
      >
        {isActive ? <LargeQuoteIcon /> : <SmallQuoteIcon />}
      </Box>
      <Typography
        sx={{
          color: isActive ? "color.textWhite" : "color.textBlack",
          textAlign: "center",
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

export default HomeRatingItem;
