import { Box, Button, Divider, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import EmptyStarIcon from "../shared/icons/EmptyStarIcon";
import YellowStarIcon from "../shared/icons/YellowStarIcon";
import { ProductRatingInput } from "@/types/product-rating";
import CustomizedInput from "../shared/CustomizedInput";
import useMedia from "@/hooks/shared/useMedia";

function renderStarItem(length: number, value: number, size?: number) {
  if (length == value)
    return Array(...Array(length)).map((_v, index) => (
      <YellowStarIcon
        width={size}
        height={size}
        key={index}
      />
    ));
  return Array(...Array(length)).map((_v, index) => (
    <EmptyStarIcon
      width={size}
      height={size}
      key={index}
    />
  ));
}

const ProductDetailRatingForm = () => {
  const [rating, setRating] = useState<ProductRatingInput>({
    feedback: "",
    rating: 0,
  });

  const { media } = useMedia();

  const handleClick = (value: number) => {
    setRating((pre) => ({
      ...pre,
      rating: value,
    }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRating((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  return (
    <Box>
      <Typography
        fontSize={media ? "14px" : "16px"}
        fontWeight={500}
        mb="10px"
      >
        Chất lượng sản phẩm
      </Typography>
      <Box display="flex">
        <Box
          component="div"
          sx={{ cursor: "pointer" }}
          onClick={() => handleClick(1)}
        >
          {renderStarItem(1, rating.rating, media ? 16 : undefined)}
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: "10px" }}
        ></Divider>
        <Box
          component="div"
          sx={{ cursor: "pointer" }}
          onClick={() => handleClick(2)}
        >
          {renderStarItem(2, rating.rating, media ? 16 : undefined)}
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: "10px" }}
        ></Divider>
        <Box
          component="div"
          sx={{ cursor: "pointer" }}
          onClick={() => handleClick(3)}
        >
          {renderStarItem(3, rating.rating, media ? 16 : undefined)}
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: "10px" }}
        ></Divider>
        <Box
          component="div"
          sx={{ cursor: "pointer" }}
          onClick={() => handleClick(4)}
        >
          {renderStarItem(4, rating.rating, media ? 16 : undefined)}
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: "10px" }}
        ></Divider>
        <Box
          component="div"
          sx={{ cursor: "pointer" }}
          onClick={() => handleClick(5)}
        >
          {renderStarItem(5, rating.rating, media ? 16 : undefined)}
        </Box>
      </Box>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: "20px", my: "30px" }}
      >
        <CustomizedInput
          fullWidth
          label="Tên của bạn"
          placeholder="Nhập tên của bạn"
          name="username"
          onChange={handleChange}
        />
        <CustomizedInput
          fullWidth
          label="Địa chỉ email"
          placeholder="Nhập địa chỉ email"
          name="mail"
          onChange={handleChange}
        />
        <CustomizedInput
          fullWidth
          label="Đánh giá"
          placeholder="Viết đánh giá..."
          rows={4}
          multiline
          name="feedback"
          onChange={handleChange}
        />
      </Box>
      <Button
        variant="contained"
        type="submit"
      >
        Đánh giá ngay
      </Button>
    </Box>
  );
};

export default ProductDetailRatingForm;
