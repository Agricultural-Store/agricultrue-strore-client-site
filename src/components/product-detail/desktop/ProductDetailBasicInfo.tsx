import CustomizedQuantityInput from "@/components/shared/CustomizedQuantityInput";
import FavoriteIcon from "@/components/shared/icons/FavoriteIcon";
import NextArrowIcon from "@/components/shared/icons/NextArrowIcon";
import PreviousIcon from "@/components/shared/icons/PreviousArrowIcon";
import { userApi } from "@/config/api-path";
import { useEnqueueSnackbar } from "@/hooks/shared/useEnqueueSnackbar";
import useUserCartCreate from "@/hooks/user/useUserCartCreate";
import useUserFavoriteCreate from "@/hooks/user/useUserFavoriteCreate";
import useUserFavoriteDelete from "@/hooks/user/useUserFavoriteDelete";
import { AppContext } from "@/providers/AppContext";
import { ProductDetail } from "@/types/product-detail";
import { calcPrice } from "@/utils/count";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

type Props = {
  product?: ProductDetail;
};

const ProductDetailBasicInfo = ({ product }: Props) => {
  const [count, setCount] = useState(1);
  const [index, setIndex] = useState(0);
  const [favorite, setFavorite] = useState<boolean>();
  const { setOpenAuth } = useContext(AppContext);

  const { status } = useSession();
  const params = useParams();
  const [setEnqueue] = useEnqueueSnackbar();
  const { trigger } = useUserCartCreate();
  const { trigger: createTrigger } = useUserFavoriteCreate();
  const { trigger: deleteTrigger } = useUserFavoriteDelete();

  const handleChange = (value: number) => {
    setCount(value);
  };

  const handlePreviousImage = () => {
    setIndex((pre) => pre - 1);
  };

  const handleNextImage = () => {
    setIndex((pre) => pre + 1);
  };

  const handleFavorite = () => {
    if (status === "unauthenticated") {
      setOpenAuth(true);
      return;
    }
    setFavorite((pre) => !pre);
    if (product?.isFavorites) {
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
        createTrigger(
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

  const handleAddToCart = () => {
    if (status === "unauthenticated") {
      setOpenAuth(true);
      return;
    }

    trigger(
      {
        body: {
          productCount: count.toString(),
          productId: params.id as string,
        },
      },
      {
        onError: () => {},
      },
    ).then(() => {});
    setEnqueue("Added product to your cart", "success");
  };

  useEffect(() => {
    setFavorite(product?.isFavorites);
  }, [product?.isFavorites]);

  return (
    <Grid
      container
      sx={{ pb: "48px", height: "auto" }}
      columnSpacing={6}
    >
      <Grid
        item
        lg={5}
        sm={6}
        width="100%"
      >
        <Box width="100%">
          <Box sx={{ position: "relative", width: "100%" }}>
            <Box
              component="img"
              src={product?.productImages?.[index] || "/images/product-detail-main.png"}
              sx={{ width: "100%", height: "400px" }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                position: "absolute",
                paddingX: "16px",
                width: "100%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <IconButton
                sx={{
                  bgcolor: "rgba(0, 0, 0, .5)",
                  ":hover": {
                    bgcolor: "rgba(0, 0, 0, .3)",
                  },
                }}
                disabled={index === 0}
                size="small"
                onClick={handlePreviousImage}
              >
                <PreviousIcon color="#FFFFFF" />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: "rgba(0, 0, 0, .5)",
                  ":hover": {
                    bgcolor: "rgba(0, 0, 0, .3)",
                  },
                }}
                size="small"
                onClick={handleNextImage}
                disabled={index + 1 === product?.productImages?.length}
              >
                <NextArrowIcon color="#FFFFFF" />
              </IconButton>
            </Box>
          </Box>
          <Grid
            container
            mt="20px"
            spacing={1}
          >
            {product?.productImages?.slice(0, 6).map((image, index) => (
              <Grid
                item
                xs={2}
                key={index}
              >
                {index === 5 ? (
                  <Box sx={{ position: "relative" }}>
                    <Box
                      component="img"
                      src={image}
                      sx={{ width: "100%", height: "80px", objectFit: "cover" }}
                    />
                    <Box
                      sx={{
                        width: "100%",
                        height: "80px",
                        objectFit: "cover",
                        bgcolor: "rgba(0, 0, 0, 0.5)",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 1,
                        color: "color.textWhite",
                        textAlign: "center",
                        lineHeight: "80px",
                        fontSize: "18px",
                        cursor: "pointer",
                      }}
                    >
                      +{product.productImages?.length && product.productImages.length - 5}
                    </Box>
                  </Box>
                ) : (
                  <Box
                    component="img"
                    src={image}
                    sx={{ width: "100%", height: "80px", objectFit: "cover" }}
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box></Box>
      </Grid>
      <Grid
        item
        lg={7}
        sm={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: "14px", fontStyle: "italic" }}>
          {product?.productCategory}
        </Typography>
        <Typography sx={{ fontSize: "28px", fontWeight: 500 }}>
          {product?.productName}
        </Typography>
        <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Typography sx={{ color: "color.textPrimary", fontSize: "20px" }}>
            Giá:{" "}
            {calcPrice(product?.productPrice, product?.productDiscount).toLocaleString()}
            đ/kg
          </Typography>
          <Typography sx={{ color: "color.textPrimary300" }}>
            {product?.productPrice?.toLocaleString()}đ/kg
          </Typography>
        </Box>
        <Typography sx={{ lineHeight: "28px" }}>
          Gạo ST25 là một loại gạo thơm mới được phát triển tại Việt Nam, đã được vinh
          danh là loại gạo ngon nhất thế giới trong cuộc thi The World’s Best Rice tổ chức
          tại Philippines năm 2019.
        </Typography>
        <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <Typography>Số lượng</Typography>
          <CustomizedQuantityInput
            defaultValue={1}
            maxValue={product?.productQuantity || 1}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ display: "flex", gap: "16px", mt: "20px", height: "42px" }}>
          <Button
            sx={{ textTransform: "capitalize" }}
            variant="contained"
            onClick={handleAddToCart}
          >
            Thêm vào giỏ hàng
          </Button>
          <Button
            sx={{
              textTransform: "capitalize",
              minWidth: "42px",
              maxWidth: "42px",
              p: 0,
              bgcolor: favorite ? "error.main" : "#E6E8EC",
              color: favorite ? "#FFC3C3" : "#777E90",
              ":hover": {
                bgcolor: favorite ? "error.main" : "#E6E8EC",
              },
            }}
            variant="contained"
            color="error"
            onClick={handleFavorite}
          >
            <FavoriteIcon />
          </Button>
        </Box>
        {/* <Box>
          <Typography>Chia sẻ:</Typography>
          <Box>
            <ShareIcon />
          </Box>
        </Box> */}
      </Grid>
    </Grid>
  );
};

export default ProductDetailBasicInfo;
