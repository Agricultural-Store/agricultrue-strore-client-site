import { ProductInCart } from "@/types/cart";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useContext } from "react";
import CustomizedQuantityInput from "../shared/CustomizedQuantityInput";
import DeleteIcon from "../shared/icons/DeleteIcon";
import { calcPrice } from "@/utils/count";
import useUserCartDelete from "@/hooks/user/useUserCartDelete";
import { userApi } from "@/config/api-path";
import { CartContext } from "@/providers/CartContext";

type Props = {
  product: ProductInCart;
  onChangeCount?: (value: number, id?: number) => void;
};

const ProductInCartItem = ({ product, onChangeCount }: Props) => {
  const { trigger } = useUserCartDelete();
  const { product: productCart, setProduct } = useContext(CartContext);

  const handleClickDelete = () => {
    if (productCart) {
      setProduct(undefined);
    } else
      trigger(
        {
          path: userApi.deleteCart(product.id),
        },
        {
          onError: (err) => {
            console.log(err);
          },
        },
      ).then((res) => {
        if (res.statusCode === 200) {
        }
      });
  };

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
          <IconButton onClick={handleClickDelete}>
            <DeleteIcon />
          </IconButton>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          <CustomizedQuantityInput
            defaultValue={product.productCount}
            onChange={(value) => onChangeCount?.(value, product.id)}
          />
          <Box>
            <Typography>
              {(
                calcPrice(product.productPrice, product.productDiscount) *
                (product?.productCount ?? 1)
              ).toLocaleString()}
              đ
            </Typography>
            <Typography
              fontSize="12px"
              color="color.textPrimary"
              sx={{ textDecoration: "line-through", textAlign: "right" }}
            >
              {(
                +(product.productPrice || 0) * (product?.productCount ?? 1)
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
