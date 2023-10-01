import { ProductInCart } from "@/types/cart";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import CustomizedQuantityInput from "../shared/CustomizedQuantityInput";
import DeleteIcon from "../shared/icons/DeleteIcon";
import { countDiscount } from "@/utils/count";

type Props = {
  product: ProductInCart;
};

const ProductInCartItem = ({ product }: Props) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", my: "24px" }}>
      <Box
        component="img"
        src={product.productImage}
        sx={{ width: "100px", height: "100px", borderRadius: "4px" }}
      />
      <Box
        pl="24px"
        width="calc(100% - 100px)"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box
          sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          <Typography
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            width="80%"
          >
            {product.productName}
          </Typography>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          <CustomizedQuantityInput />
          <Box>
            <Typography>{product.productPrice.toLocaleString()}đ</Typography>
            <Typography
              fontSize="12px"
              color="color.textPrimary"
              sx={{ textDecoration: "line-through", textAlign: "right" }}
            >
              {countDiscount(
                product.productPrice,
                product.productDiscount,
              ).toLocaleString()}
              đ
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductInCartItem;
