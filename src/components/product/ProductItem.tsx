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
        />
        <CardContent>
          <Typography
            fontSize="24px"
            fontWeight={600}
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {product?.productName}
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ color: "error.main", fontWeight: 600 }}>
              Giá:{" "}
              {product?.productDiscount &&
                product.productPrice &&
                (product.productPrice * product.productDiscount) / 100}
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
