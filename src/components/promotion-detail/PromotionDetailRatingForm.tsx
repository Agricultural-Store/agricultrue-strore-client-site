import { Box, Button, Divider, Typography } from "@mui/material";
import React, { ChangeEvent, useContext, useState } from "react";
import EmptyStarIcon from "../shared/icons/EmptyStarIcon";
import YellowStarIcon from "../shared/icons/YellowStarIcon";
import { ProductRatingInput } from "@/types/product-rating";
import CustomizedInput from "../shared/CustomizedInput";
import useMedia from "@/hooks/shared/useMedia";
import useComboRatingCreate from "@/hooks/product-combo/useComboRatingCreate";
import { AppContext } from "@/providers/AppContext";
import { productComboApi } from "@/config/api-path";
import { useParams } from "next/navigation";

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

const PromotionDetailRatingForm = () => {
  const [rating, setRating] = useState<ProductRatingInput>({
    feedback: "",
    rating: 0,
  });

  const { setIsLoading } = useContext(AppContext);

  const { media } = useMedia();
  const params = useParams();

  const { trigger } = useComboRatingCreate(+(params.id as string));

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

  const handleSubmit = () => {
    setIsLoading(true);
    trigger(
      {
        path: productComboApi.comboRatingCreate(+(params.id as string)),
        body: rating,
      },
      {
        onError: () => {
          setIsLoading(false);
        },
      },
    ).then(() => {
      setIsLoading(false);
    });
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
        onClick={handleSubmit}
      >
        Đánh giá ngay
      </Button>
    </Box>
  );
};

export default PromotionDetailRatingForm;
