import ProductItem from "@/components/product/ProductItem";
import NextIcon from "@/components/shared/icons/NextIcon";
import useProductList from "@/hooks/product/useProductList";
import { AppContext } from "@/providers/AppContext";
import { CartContext } from "@/providers/CartContext";
import { Product } from "@/types/product";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next-intl/client";
import React, { useContext } from "react";

const HomeOutstandingProduct = () => {
  const { setOpenCart } = useContext(AppContext);
  const { setProduct } = useContext(CartContext);

  const router = useRouter();

  const { data } = useProductList({
    limit: 4,
    offset: 0,
  });

  const handleClick = () => {
    router.push("/product");
  };

  const handleProductClick = (id?: number) => {
    router.push(`/product/${id}`);
  };

  const handleButtonClick = (product?: Product) => {
    if (product)
      setProduct?.({
        ...product,
        productCount: 1,
        isCombo: false,
      });
    setOpenCart(true);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        mt: "48px",
        px: "16px",
      }}
    >
      <Typography sx={{ fontSize: "20px", lineHeight: "42px", fontWeight: 600 }}>
        Sản phẩm nổi bật
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          my: "16px",
          fontSize: "14px",
        }}
      >
        Đồng Bằng Sông Cửu Long, với đất đai màu mỡ và nguồn nước từ hệ thống sông ngòi
        chảy qua, đã tạo ra những giống gạo nổi tiếng không chỉ trong nước mà còn trên thị
        trường quốc tế.
      </Typography>
      <Grid
        container
        py="48px"
        rowGap="10px"
      >
        {data?.data.map((product) => (
          <Grid
            item
            xs={12}
            key={product.id}
          >
            <ProductItem
              product={product}
              onButtonClick={handleButtonClick}
              onClick={handleProductClick}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="text"
          onClick={handleClick}
          sx={{ display: "flex", alignItems: "center", textTransform: "capitalize" }}
        >
          <Box
            sx={{
              fontSize: {
                lg: "16px",
                xs: "14px",
              },
              paddingRight: "8px",
              textTransform: "capitalize",
            }}
          >
            Xem tất cả
          </Box>
          <NextIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default HomeOutstandingProduct;
