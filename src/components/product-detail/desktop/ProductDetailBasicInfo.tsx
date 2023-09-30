import CustomizedQuantityInput from "@/components/shared/CustomizedQuantityInput";
import NextArrowIcon from "@/components/shared/icons/NextArrowIcon";
import PreviousIcon from "@/components/shared/icons/PreviousArrowIcon";
import { ProductDetail } from "@/types/product-detail";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

type Props = {
  product: ProductDetail;
};

const ProductDetailBasicInfo = ({ product }: Props) => {
  return (
    <Grid
      container
      sx={{ p: "48rem", height: "auto" }}
      columnSpacing={6}
    >
      <Grid
        item
        lg={5}
        sm={6}
      >
        <Box>
          <Box sx={{ position: "relative" }}>
            <Box
              component="img"
              src="/images/product-detail-main.png"
              sx={{ width: "100%", height: "400rem" }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                position: "absolute",
                paddingX: "16rem",
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
            mt="20rem"
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
                      sx={{ width: "100%", height: "80rem", objectFit: "cover" }}
                    />
                    <Box
                      sx={{
                        width: "100%",
                        height: "80rem",
                        objectFit: "cover",
                        bgcolor: "rgba(0, 0, 0, 0.5)",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 1,
                        color: "color.textWhite",
                        textAlign: "center",
                        lineHeight: "80rem",
                        fontSize: "18rem",
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
                    sx={{ width: "100%", height: "80rem", objectFit: "cover" }}
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
          gap: "16rem",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: "14rem", fontStyle: "italic" }}>
          {product.productCategory}
        </Typography>
        <Typography sx={{ fontSize: "28rem", fontWeight: 700 }}>
          {product.productName}
        </Typography>
        <Box sx={{ display: "flex", gap: "8rem", alignItems: "center" }}>
          <Typography sx={{ color: "color.textPrimary", fontSize: "20rem" }}>
            Giá: {product.productPrice}đ/kg
          </Typography>
          <Typography sx={{ color: "color.textPrimary300" }}>
            {product.productDiscount}đ/kg
          </Typography>
        </Box>
        <Typography sx={{ lineHeight: "28rem" }}>
          Gạo ST25 là một loại gạo thơm mới được phát triển tại Việt Nam, đã được vinh
          danh là loại gạo ngon nhất thế giới trong cuộc thi The World’s Best Rice tổ chức
          tại Philippines năm 2019.
        </Typography>
        <Box sx={{ display: "flex", gap: "12rem", alignItems: "center" }}>
          <Typography>Số lượng</Typography>
          <CustomizedQuantityInput
            defaultValue={1}
            maxValue={10}
          />
        </Box>
        <Box sx={{ display: "flex", gap: "16rem", mt: "20rem" }}>
          <Button
            sx={{ textTransform: "capitalize" }}
            variant="contained"
          >
            Thêm vào giỏ hàng
          </Button>
          <Button
            sx={{ textTransform: "capitalize" }}
            variant="outlined"
          >
            Liên hệ
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
