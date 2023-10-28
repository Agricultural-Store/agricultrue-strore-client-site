import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import OrderOverviewItem from "./OrderOverviewItem";
import { ProductInCart } from "@/types/cart";
import { CartContext } from "@/providers/CartContext";

type Props = {
  data?: ProductInCart[];
};
const OrderOverviewTable = ({ data: dataProps }: Props) => {
  const [data, setData] = useState<ProductInCart[]>();
  const { product } = useContext(CartContext);

  useEffect(() => {
    if (product) {
      setData([product]);
    } else {
      setData(dataProps);
    }
  }, [dataProps, product]);
  return (
    <>
      <Typography
        variant="h3"
        my="16px"
      >
        Ngày đặt hàng: 01/01/2000
      </Typography>
      <Box>
        <Typography
          variant="h3"
          my="16px"
        >
          Sản phẩm
        </Typography>
        <Box>
          {data?.map((product) => (
            <OrderOverviewItem
              key={product.id}
              product={product}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default OrderOverviewTable;
