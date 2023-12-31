import { Box, Typography } from "@mui/material";
import React from "react";
import YellowStarIcon from "../shared/icons/YellowStarIcon";
import { ProductRating } from "@/types/product-rating";
import useMedia from "@/hooks/shared/useMedia";

type Props = {
  rating: ProductRating;
};

const ProductDetailRatingItem = ({ rating }: Props) => {
  const { media } = useMedia();

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="10px"
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Box
          component="img"
          maxWidth="50px"
          minWidth="50px"
          height="50px"
          borderRadius="50%"
          sx={{objectFit:'cover' }}
          src={rating.user?.avatar || "/images/profile-avatar.svg"}
        />
        <Box>
          <Typography
            fontSize={media ? "14px" : "18px"}
            fontWeight={500}
            lineHeight="27px"
          >
            {rating.user?.name || "Khách hàng ẩn danh"}
          </Typography>
          <Box>
            {Array(...Array(rating.productRating)).map((_v, index) => (
              <YellowStarIcon key={index}></YellowStarIcon>
            ))}
          </Box>
        </Box>
      </Box>
      <Typography
        sx={{
          textAlign: "justify",
          lineHeight: "28px",
          fontSize: media ? "14px" : "16px",
        }}
      >
        {rating.feedback}
      </Typography>
      <Typography sx={{ color: "color.textGrey500", fontSize: "14px" }}>
        Được đánh giá vào{" "}
        <Typography
          component="span"
          fontSize="inherit"
          color="color.textNeutral600"
        >
          {new Date(rating.createAt || "").toLocaleDateString()}
        </Typography>
      </Typography>
    </Box>
  );
};

export default ProductDetailRatingItem;
