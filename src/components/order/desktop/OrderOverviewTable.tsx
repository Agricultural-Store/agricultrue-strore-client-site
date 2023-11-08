import DeleteIcon from "@/components/shared/icons/DeleteIcon";
import { CartContext } from "@/providers/CartContext";
import { ProductInCart } from "@/types/cart";
import { calcPrice } from "@/utils/count";
import {
  TableContainer,
  Table,
  tableCellClasses,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

type Props = {
  data?: ProductInCart[];
};
const OrderOverviewTable = ({ data: dataProps }: Props) => {
  const [data, setData] = useState<ProductInCart[]>();
  const { product } = useContext(CartContext);

  const handleDelete = () => {};

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
      <TableContainer>
        <Table
          sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: "none",
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ fontWeight: 500, pl: 0 }}
                align="left"
              >
                Sản phẩm
              </TableCell>
              <TableCell
                sx={{ fontWeight: 500 }}
                align="center"
              >
                Số lượng
              </TableCell>
              <TableCell
                sx={{ fontWeight: 500 }}
                align="center"
              >
                Thành tiền
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "error.main", fontWeight: 500, pr: 0 }}
              >
                Xóa tất cả (2)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((product) => (
              <TableRow key={product.id}>
                <TableCell
                  align="left"
                  sx={{ display: "flex", alignItems: "center", gap: "8px", pl: 0 }}
                >
                  <Box
                    component="img"
                    src={product.productImage || ""}
                    sx={{
                      minWidth: "65px",
                      maxWidth: "65px",
                      height: "65px",
                      borderRadius: "4px",
                      bgcolor: "color.bgPrimary",
                    }}
                  ></Box>
                  <Typography fontSize="18px">{product.productName}</Typography>
                </TableCell>
                <TableCell align="center">{product.productCount}</TableCell>
                <TableCell align="center">
                  <Typography component="span">
                    {(
                      calcPrice(product.productPrice, product.productDiscount) *
                      (product?.productCount ?? 1)
                    ).toLocaleString()}
                    đ
                  </Typography>
                  <Typography
                    px="10px"
                    display="inline-block"
                    fontSize="12px"
                    sx={{
                      textDecoration: "line-through",
                      color: "color.textPrimary",
                      transform: "translateY(-2px)",
                    }}
                  >
                    {(
                      (product.productPrice || 1) * (product?.productCount ?? 1)
                    ).toLocaleString()}
                    đ
                  </Typography>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ pr: 0 }}
                >
                  <IconButton onClick={handleDelete}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default OrderOverviewTable;
