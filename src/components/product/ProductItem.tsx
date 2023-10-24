import { Product } from "@/types/product";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import React from "react";
import FavoriteIcon from "../shared/icons/FavoriteIcon";
import { calcPrice } from "@/utils/count";

type Props = {
  product?: Product;
  onClick?: (id?: number) => void;
};

const ProductItem = ({ product, onClick }: Props) => {
  const handleClick = () => {
    onClick?.(product?.id);
  };

  return (
    <Card
      sx={{
        bgcolor: "color.bgPrimaryWithOpacity",
        borderRadius: 0,
        width: "100%",
      }}
    >
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          src={product?.productImage}
          width="100%"
          height="230px"
          sx={{ objectFit: "cover" }}
        />
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            height="45px"
          >
            <Typography
              fontSize="18px"
              fontWeight={600}
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {product?.productName}
            </Typography>
            <Box
              sx={{
                minWidth: "40px",
                height: "40px",
                borderRadius: "50%",
                bgcolor: "error.main",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#FFC3C3",
              }}
            >
              <FavoriteIcon />
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
              sx={{ color: "error.main", fontWeight: 600, fontSize: "16px" }}
            >
              Giá: {calcPrice(product?.productPrice, product?.productDiscount)}
              đ/kg
            </Typography>
            <Typography
              component="span"
              sx={{
                color: "color.textNeutral400",
                pl: "8px",
                transform: "translateY(-1px)",
                textDecoration: "line-through",
              }}
            >
              {product?.productPrice}đ/kg
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          fullWidth
          onClick={handleClick}
        >
          Mua ngay
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
