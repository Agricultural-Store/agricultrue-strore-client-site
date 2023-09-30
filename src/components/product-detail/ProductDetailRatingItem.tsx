import { Box, Typography } from "@mui/material";
import React from "react";
import YellowStarIcon from "../shared/icons/YellowStarIcon";
import { ProductRating } from "@/types/product-rating";

type Props = {
  rating: ProductRating;
};

const ProductDetailRatingItem = ({ rating }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="10px"
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Box
          component="img"
          src={rating.userImage}
        />
        <Box>
          <Typography
            fontSize="18px"
            fontWeight={700}
            lineHeight="27px"
          >
            {rating.username}
          </Typography>
          <Box>
            {Array.apply(null, Array(rating.productRating)).map(() => (
              <YellowStarIcon></YellowStarIcon>
            ))}
          </Box>
        </Box>
      </Box>
      <Typography sx={{ textAlign: "justify", lineHeight: "28px" }}>
        {rating.feedback}
      </Typography>
      <Typography sx={{ color: "color.textGrey500", fontSize: "14px" }}>
        Được đánh giá vào{" "}
        <Typography
          component="span"
          fontSize="inherit"
          color="color.textNeutral600"
        >
          {rating.createdAt}
        </Typography>
      </Typography>
    </Box>
  );
};

export default ProductDetailRatingItem;
