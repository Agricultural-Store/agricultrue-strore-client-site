import CustomizedQuantityInput from "@/components/shared/CustomizedQuantityInput";
import FavoriteIcon from "@/components/shared/icons/FavoriteIcon";
import NextArrowIcon from "@/components/shared/icons/NextArrowIcon";
import PreviousIcon from "@/components/shared/icons/PreviousArrowIcon";
import { ProductDetail } from "@/types/product-detail";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";

type Props = {
  product: ProductDetail;
};

const ProductDetailBasicInfo = ({ product }: Props) => {
  return (
    <Grid
      container
      sx={{ p: "0px", height: "auto" }}
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
              sx={{ width: "100%", height: "280px" }}
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
                      sx={{ width: "100%", height: "60px", objectFit: "cover" }}
                    />
                    <Box
                      sx={{
                        width: "100%",
                        height: "60px",
                        objectFit: "cover",
                        bgcolor: "rgba(0, 0, 0, 0.5)",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 1,
                        color: "color.textWhite",
                        textAlign: "center",
                        lineHeight: "60px",
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
                    sx={{ width: "100%", height: "60px", objectFit: "cover" }}
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          mt: "16px",
          px: "16px",
        }}
      >
        <Typography sx={{ fontSize: "18px", fontWeight: 600, lineHeight: "32px" }}>
          {product.productCategory}
        </Typography>
        <Typography
          sx={{ fontSize: "20px", fontWeight: 700, lineHeight: "36px", mt: "2px" }}
        >
          {product.productName}
        </Typography>
        <Box sx={{ display: "flex", gap: "8px", alignItems: "center", mt: "6px" }}>
          <Typography
            sx={{ color: "color.textPrimary", fontSize: "18px", lineHeight: "32px" }}
          >
            Giá: {product.productPrice}đ/kg
          </Typography>
          <Typography sx={{ color: "color.textPrimary300", lineHeight: "28px" }}>
            {product.productDiscount}đ/kg
          </Typography>
        </Box>
        <Typography sx={{ lineHeight: "28px", fontSize: "14px", mt: "16px" }}>
          Gạo ST25 là một loại gạo thơm mới được phát triển tại Việt Nam, đã được vinh
          danh là loại gạo ngon nhất thế giới trong cuộc thi The World’s Best Rice tổ chức
          tại Philippines năm 2019.
        </Typography>
        <Box sx={{ display: "flex", gap: "12px", alignItems: "center", mt: "16px" }}>
          <Typography>Số lượng</Typography>
          <CustomizedQuantityInput
            defaultValue={1}
            maxValue={10}
          />
        </Box>
        <Box sx={{ display: "flex", gap: "16px", mt: "20px", height: "42px" }}>
          <Button
            sx={{ textTransform: "capitalize" }}
            variant="contained"
            fullWidth
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
          <Typography
            textAlign="center"
            mt="24px"
          >
            Chia sẻ qua:
          </Typography>
          <Box></Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductDetailBasicInfo;
