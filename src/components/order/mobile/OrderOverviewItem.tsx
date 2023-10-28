import DeleteIcon from "@/components/shared/icons/DeleteIcon";
import { ProductInCart } from "@/types/cart";
import { calcPrice } from "@/utils/count";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import React from "react";

type Props = {
  product?: ProductInCart;
};

const OrderOverviewItem = ({ product }: Props) => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        my="12px"
      >
        <Box
          display="flex"
          // alignItems="center"
        >
          <Box
            component="img"
            src={product?.productImage || "/images/image.png"}
            sx={{
              width: "64px",
              height: "64px",
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
            ml="12px"
          >
            <Typography
              fontSize="16px"
              fontWeight={600}
              className="line-clamp-1"
            >
              {product?.productName}
            </Typography>
            <Typography fontSize="14px">
              Số lượng:
              <Typography
                component="span"
                fontSize="14px"
                sx={{ opacity: 0.6 }}
              >
                &nbsp;{product?.productCount}
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          alignItems="end"
        >
          <IconButton sx={{ p: 0 }}>
            <DeleteIcon />
          </IconButton>
          <Typography fontSize="14px">
            {(
              calcPrice(product?.productPrice, product?.productDiscount) *
              (product?.productCount ?? 1)
            ).toLocaleString()}
            đ
          </Typography>
        </Box>
      </Box>
      <Divider></Divider>
    </>
  );
};

export default OrderOverviewItem;
