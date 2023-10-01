"use client";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomizedDrawer from "../shared/CustomizedDrawer";
import CloseIcon from "../shared/icons/CloseIcon";
import ProductInCartList from "./ProductInCartList";
import { ProductInCart } from "@/types/cart";
import CartSummary from "./CartSummary";

type Props = {
  open: boolean;
  onClose: (open: boolean) => void;
};

const Cart = ({ onClose, open }: Props) => {
  const [products, setProducts] = useState<ProductInCart[]>([
    {
      id: 1,
      productDiscount: 10,
      productImage: "/images/image.png",
      productName: "Gao",
      productPrice: 100000,
      productQuantity: 2,
    },
    {
      id: 2,
      productDiscount: 10,
      productImage: "/images/image.png",
      productName: "Gao",
      productPrice: 100000,
      productQuantity: 2,
    },
    {
      id: 3,
      productDiscount: 10,
      productImage: "/images/image.png",
      productName: "Gao",
      productPrice: 100000,
      productQuantity: 2,
    },
    {
      id: 4,
      productDiscount: 10,
      productImage: "/images/image.png",
      productName: "Gao",
      productPrice: 100000,
      productQuantity: 2,
    },
    {
      id: 5,
      productDiscount: 10,
      productImage: "/images/image.png",
      productName: "Gao",
      productPrice: 100000,
      productQuantity: 2,
    },
    {
      id: 6,
      productDiscount: 10,
      productImage: "/images/image.png",
      productName: "Gao",
      productPrice: 100000,
      productQuantity: 2,
    },
    {
      id: 7,
      productDiscount: 5,
      productImage: "/images/image.png",
      productName: "Gao",
      productPrice: 100000,
      productQuantity: 2,
    },
  ]);

  return (
    <div>
      <CustomizedDrawer
        open={open}
        onClose={onClose}
      >
        <Box sx={{ px: "24px" }}>
          <Box
            sx={{
              pt: "26px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "8px",
            }}
          >
            <Typography variant="h2">Sản phẩm</Typography>
            <IconButton sx={{ color: "color.textBlack" }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            height="calc(90vh - 320px)"
            sx={{ overflowY: "scroll" }}
          >
            <ProductInCartList products={products} />
          </Box>
          <Box height="320px">
            <CartSummary products={products} />
          </Box>
        </Box>
      </CustomizedDrawer>
    </div>
  );
};

export default Cart;
