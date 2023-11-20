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
import React, { MouseEvent, useContext, useEffect, useState } from "react";
import FavoriteIcon from "../shared/icons/FavoriteIcon";
import { calcPrice } from "@/utils/count";
import DiscountBgIcon from "../shared/icons/DiscountBgIcon";
import { AppContext } from "@/providers/AppContext";
import { useSession } from "next-auth/react";
import useUserFavoriteCreate from "@/hooks/user/useUserFavoriteCreate";
import { userApi } from "@/config/api-path";
import useUserFavoriteDelete from "@/hooks/user/useUserFavoriteDelete";

type Props = {
  product?: Product;
  onClick?: (id?: number) => void;
  onButtonClick?: (product?: Product) => void;
  isFavorite?: boolean;
};

const ProductItem = ({ product, onClick, onButtonClick, isFavorite }: Props) => {
  const [favorite, setFavorite] = useState<boolean>();
  const { setOpenAuth } = useContext(AppContext);

  const { status } = useSession();

  const { trigger } = useUserFavoriteCreate();
  const { trigger: deleteTrigger } = useUserFavoriteDelete();

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

  const handleFavorite = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    // setIsLoading(true);

    if (status === "unauthenticated") {
      setOpenAuth(true);
      return;
    }
    setFavorite((pre) => !pre);
    if (isFavorite === true) {
      if (product?.id)
        deleteTrigger(
          {
            path: userApi.deleteFavorite(product.id),
          },
          {
            onError: (err) => {
              // setIsLoading(false);
              console.log(err);
            },
          },
        ).then((res) => {
          if (res.statusCode === 200) {
            // setIsLoading(false);
          }
        });
    } else {
      if (product?.id)
        trigger(
          {
            path: userApi.addFavorite(product.id),
          },
          {
            onError: (err) => {
              // setIsLoading(false);
              console.log(err);
            },
          },
        ).then((res) => {
          if (res.statusCode === 200) {
            // setIsLoading(false);
          }
        });
    }
  };

  useEffect(() => {
    setFavorite(isFavorite || false);
  }, [isFavorite]);

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
              onClick={handleFavorite}
              sx={{
                minWidth: "40px",
                height: "40px",
                borderRadius: "50%",
                bgcolor: favorite ? "error.main" : "#E6E8EC",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: favorite ? "#FFC3C3" : "#777E90",
                cursor: "pointer",
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
