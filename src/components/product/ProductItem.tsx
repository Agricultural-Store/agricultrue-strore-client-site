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
import React, { useContext } from "react";
import FavoriteIcon from "../shared/icons/FavoriteIcon";
import { calcPrice } from "@/utils/count";
import DiscountBgIcon from "../shared/icons/DiscountBgIcon";
import { AppContext } from "@/providers/AppContext";
import { useSession } from "next-auth/react";

type Props = {
  product?: Product;
  onClick?: (id?: number) => void;
  onButtonClick?: (product?: Product) => void;
};

const ProductItem = ({ product, onClick, onButtonClick }: Props) => {
  const { setOpenAuth } = useContext(AppContext);

  const { status } = useSession();

  const handleClick = () => {
    onClick?.(product?.id);
  };

  const handleButtonClick = () => {
    if (status === "authenticated") {
      onButtonClick?.(product);
    } else {
      setOpenAuth(true);
    }
  };

  return (
    <Card
      sx={{
        bgcolor: "color.bgPrimaryWithOpacity",
        borderRadius: 0,
        width: "100%",
        position: "relative",
        overflow: "visible",
      }}
    >
      <CardActionArea onClick={handleClick}>
        {product?.productDiscount && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              transform: "translate(30%, -40%)",
            }}
          >
            <DiscountBgIcon />
            <Typography
              position="absolute"
              top={0}
              sx={{
                transform: "translateY(60%) rotate(12deg)",
                fontSize: "14px",
                color: "#FFFFFF",
                textAlign: "center",
                width: "100%",
              }}
            >
              -{product.productDiscount}%
            </Typography>
          </Box>
        )}
        <CardMedia
          component="img"
          src={product?.productImage}
          width="100%"
          height="200px"
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
            {product?.productDiscount ? (
              <>
                <Typography
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  sx={{ color: "error.main", fontWeight: 600, fontSize: "16px" }}
                >
                  Giá:{" "}
                  {calcPrice(
                    product?.productPrice,
                    product?.productDiscount,
                  ).toLocaleString()}
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
                  {product?.productPrice?.toLocaleString()}đ/kg
                </Typography>
              </>
            ) : (
              <Typography
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                sx={{ color: "error.main", fontWeight: 600, fontSize: "16px" }}
              >
                Giá: {product?.productPrice}đ/kg
              </Typography>
            )}
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          fullWidth
          onClick={handleButtonClick}
        >
          Mua ngay
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
