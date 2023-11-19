import LargeQuoteIcon from "@/components/shared/icons/LargeQuoteIcon";
import SmallQuoteIcon from "@/components/shared/icons/SmallQuoteIcon";
import YellowStarIcon from "@/components/shared/icons/YellowStarIcon";
import { Box, Typography } from "@mui/material";
import React, { MouseEvent } from "react";

type Props = {
  content?: string;
  isActive?: boolean;
  onClick?: (index: number) => void;
  index: number;
};

const PromotionRatingItem = ({ content, isActive, onClick, index }: Props) => {
  const handleClick = (e: MouseEvent<HTMLInputElement>) => {
    e.currentTarget.scrollIntoView({
      inline: "center",
      behavior: "smooth",
      block: "center",
    });
    onClick?.(index);
  };

  return (
    <Box
      onClick={handleClick}
      sx={[
        {
          minWidth: "100%",
          height: isActive ? "220px" : "200px",
          bgcolor: "color.bgPrimary",
          position: "relative",
          p: "24px 30px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: "6px",
          transform: "scale(0.9)",
          transition: "0.5s",
          ":after": {
            content: "''",
            width: "100%",
            height: "100%",
            zIndex: 1,
            position: "absolute",
            top: 0,
            left: 0,
            transition: "0.5s",
            bgcolor: !isActive ? "rgba(217,227,206, 0.5)" : "none",
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
      {content && (
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
      )}
    </Box>
  );
};

export default PromotionRatingItem;
