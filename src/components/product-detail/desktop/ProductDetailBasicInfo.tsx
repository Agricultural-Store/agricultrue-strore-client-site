import CustomizedQuantityInput from "@/components/shared/CustomizedQuantityInput";
import FavoriteIcon from "@/components/shared/icons/FavoriteIcon";
import NextArrowIcon from "@/components/shared/icons/NextArrowIcon";
import PreviousIcon from "@/components/shared/icons/PreviousArrowIcon";
import { useEnqueueSnackbar } from "@/hooks/shared/useEnqueueSnackbar";
import useUserCartCreate from "@/hooks/user/useUserCartCreate";
import { ProductDetail } from "@/types/product-detail";
import { calcPrice } from "@/utils/count";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useState } from "react";

type Props = {
  product?: ProductDetail;
};

const ProductDetailBasicInfo = ({ product }: Props) => {
  const [count, setCount] = useState(1);

  const params = useParams();
  const [setEnqueue] = useEnqueueSnackbar();

  const { trigger } = useUserCartCreate();

  const handleChange = (value: number) => {
    setCount(value);
  };

  const handleAddToCart = () => {
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

  return (
    <Grid
      container
      sx={{ py: "48px", height: "auto" }}
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
              src={product?.productImages?.[0] || "/images/product-detail-main.png"}
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
                size="small"
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
              >
                <NextArrowIcon color="#FFFFFF" />
              </IconButton>
            </Box>
          </Box>
          <Grid
            container
            justifyContent="space-between"
            mt="20px"
            spacing={1}
          >
            {product?.productImages?.slice(1, 7).map((image, index) => (
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
                      +9
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
            maxValue={10}
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
              color: "#FFC3C3",
            }}
            variant="contained"
            color="error"
          >
            <FavoriteIcon />
          </Button>
        </Box>
        <Box>
          <Typography>Chia sẻ qua:</Typography>
          <Box></Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductDetailBasicInfo;
