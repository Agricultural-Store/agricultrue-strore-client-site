import { Product } from "@/types/product";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Typography,
} from "@mui/material";
import React from "react";

type Props = {
  products?: Product[];
};

const ProfileOrderTable = ({ products }: Props) => {
  return (
    <Box px="24px">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ pl: 0 }}
                align="left"
              >
                Sản phẩm
              </TableCell>
              <TableCell
                sx={{ width: "150px" }}
                align="center"
              >
                Số lượng (kg)
              </TableCell>
              <TableCell
                sx={{ pr: 0, width: "180px" }}
                align="right"
              >
                Tạm tính
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((product) => (
              <TableRow key={product.id}>
                <TableCell
                  align="left"
                  sx={{ display: "flex", alignItems: "center", gap: "8px", pl: 0 }}
                >
                  <Box
                    sx={{
                      width: "65px",
                      height: "65px",
                      borderRadius: "4px",
                    }}
                    component="img"
                    src={product.productImage}
                  ></Box>
                  <Box>
                    <Typography fontSize="18px">{product.productName}</Typography>
                    <Typography
                      fontSize="14px"
                      color="#777E90"
                    >
                      Mã sản phẩm: #{product.id}
                    </Typography>
                    <Typography
                      fontSize="14px"
                      color="#777E90"
                    >
                      Phân loại: {product.productCategory}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">{product.quantity}</TableCell>
                <TableCell
                  align="right"
                  sx={{ pr: 0 }}
                >
                  <Typography
                    px="10px"
                    display="inline-block"
                    fontSize="12px"
                    sx={{
                      textDecoration: "line-through",
                      color: "color.textPrimary",
                    }}
                  >
                    {product.totalPrice?.toLocaleString()}đ
                  </Typography>
                  <Typography component="span">
                    {product.temporaryPrice?.toLocaleString()}đ
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProfileOrderTable;
