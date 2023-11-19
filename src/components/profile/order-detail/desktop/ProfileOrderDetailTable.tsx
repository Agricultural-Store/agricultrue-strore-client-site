import { UserOrder } from "@/types/user";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  tableCellClasses,
} from "@mui/material";
import React from "react";

type Props = {
  order?: UserOrder;
};

const ProfileOrderDetailTable = ({ order }: Props) => {
  return (
    <>
      <Typography
        variant="h3"
        lineHeight="30px"
      >
        Danh sách sản phẩm
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
                sx={{ pl: 0, fontWeight: 500 }}
                align="left"
              >
                Sản phẩm
              </TableCell>
              <TableCell
                sx={{ width: "150px", fontWeight: 500 }}
                align="center"
              >
                Số lượng (kg)
              </TableCell>
              <TableCell
                sx={{ width: "150px", fontWeight: 500 }}
                align="center"
              >
                Niêm yết
              </TableCell>
              <TableCell
                sx={{ width: "150px", fontWeight: 500 }}
                align="center"
              >
                Giảm giá
              </TableCell>
              <TableCell
                sx={{ pr: 0, width: "180px", fontWeight: 500 }}
                align="right"
              >
                Thành tiền
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {order?.productOrders?.map((product) => (
              <TableRow key={product.id}>
                <TableCell
                  align="left"
                  sx={{ display: "flex", alignItems: "center", gap: "8px", pl: 0 }}
                >
                  <Box
                    sx={{
                      minWidth: "65px",
                      height: "65px",
                      borderRadius: "4px",
                    }}
                    component="img"
                    src={product.productImage}
                  ></Box>
                  <Typography fontSize="18px">{product.productName}</Typography>
                </TableCell>
                <TableCell align="center">{product.quantity}</TableCell>
                <TableCell align="center">
                  {product.totalPrice?.toLocaleString()}đ
                </TableCell>
                <TableCell align="center">
                  {product.discountPrice?.toLocaleString()}đ
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ pr: 0 }}
                >
                  <Typography component="span">
                    {product.temporaryPrice?.toLocaleString()}đ
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProfileOrderDetailTable;
