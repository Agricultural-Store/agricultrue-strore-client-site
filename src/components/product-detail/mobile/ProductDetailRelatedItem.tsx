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
      xs={12}
      key={product.id}
    >
      <Box
        sx={{
          m: "0 auto",
          borderRadius: "5px",
        }}
      >
        <ProductItem
          onButtonClick={handleButtonClick}
          onClick={handleClick}
          product={product}
        />
      </Box>
    </Grid>
  );
};

export default ProductDetailRelatedItem;
