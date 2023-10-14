"use client";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomizedDrawer from "../shared/CustomizedDrawer";
import CloseIcon from "../shared/icons/CloseIcon";
import ProductInCartList from "./ProductInCartList";
import { ProductInCart } from "@/types/cart";
import CartSummary from "./CartSummary";
import CartEmpty from "./CartEmpty";
import useMedia from "@/hooks/shared/useMedia";
import ArrowBackIcon from "../shared/icons/ArrowBackIcon";

type Props = {
  open: boolean;
  onClose: (open: boolean) => void;
};

const Cart = ({ onClose, open }: Props) => {
  const [products] = useState<ProductInCart[]>([
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

  const { media } = useMedia();

  return (
    <>
      <CustomizedDrawer
        open={open}
        onClose={onClose}
        width={media ? "100%" : undefined}
      >
        <Box sx={{ px: media ? "16px" : "24px", width: media ? "100vw" : undefined }}>
          {media ? (
            <Box
              sx={{
                pt: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                mb: "8px",
              }}
            >
              <IconButton
                sx={{ color: "color.textBlack" }}
                onClick={() => onClose(false)}
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography
                variant="h2"
                textAlign="center"
                width="100%"
              >
                Sản phẩm
              </Typography>
              <Box
                height="40px"
                width="40px"
              ></Box>
            </Box>
          ) : (
            <Box
              sx={{
                pt: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: "8px",
              }}
            >
              <Typography variant="h2">Sản phẩm</Typography>
              <IconButton
                sx={{ color: "color.textBlack" }}
                onClick={() => onClose(false)}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          )}
          {products.length > 0 ? (
            <>
              <Box
                height="calc(90vh - 320px)"
                sx={{ overflowY: "scroll" }}
              >
                <ProductInCartList products={products} />
              </Box>
              <Box height="320px">
                <CartSummary products={products} />
              </Box>
            </>
          ) : (
            <CartEmpty />
          )}
        </Box>
      </CustomizedDrawer>
    </>
  );
};

export default Cart;
