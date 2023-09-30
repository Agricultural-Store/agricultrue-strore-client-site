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
      gap="10rem"
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "10rem" }}>
        <Box
          component="img"
          src={rating.userImage}
        />
        <Box>
          <Typography
            fontSize="18rem"
            fontWeight={700}
            lineHeight="27rem"
          >
            {rating.username}
          </Typography>
          <Box>
            {Array.apply(null, Array(rating.productRating)).map((_v, index) => (
              <YellowStarIcon key={index}></YellowStarIcon>
            ))}
          </Box>
        </Box>
      </Box>
      <Typography sx={{ textAlign: "justify", lineHeight: "28rem" }}>
        {rating.feedback}
      </Typography>
      <Typography sx={{ color: "color.textGrey500", fontSize: "14rem" }}>
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
