import ProductItem from "@/components/product/ProductItem";
import { AppContext } from "@/providers/AppContext";
import { CartContext } from "@/providers/CartContext";
import { Product } from "@/types/product";
import { Grid, Box } from "@mui/material";
import { useRouter } from "next-intl/client";
import React, { useContext } from "react";

type Props = {
  product: Product;
};

const ProductDetailRelatedItem = ({ product }: Props) => {
  const { setOpenCart } = useContext(AppContext);
  const { setProduct } = useContext(CartContext);

  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${product.id}`);
  };

  const handleButtonClick = () => {
    if (product) {
      setProduct({
        ...product,
        productCount: 1,
        isCombo: false,
      });
    }
    setOpenCart(true);
  };

  return (
    <Grid
      item
      md={4}
      lg={3}
      sm={6}
    >
      <Box
        sx={{
          width: "90%",
          m: "0 auto",
          height: "320px",
          borderRadius: "5px",
        }}
      >
        <ProductItem
          product={product}
          onClick={handleClick}
          onButtonClick={handleButtonClick}
        />
      </Box>
    </Grid>
  );
};

export default ProductDetailRelatedItem;
