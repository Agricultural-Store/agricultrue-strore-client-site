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
                sx={{ width: "140px", fontWeight: 500 }}
                align="center"
              >
                Số lượng (kg)
              </TableCell>
              <TableCell
                sx={{ width: "120px", fontWeight: 500 }}
                align="center"
              >
                Niêm yết
              </TableCell>
              <TableCell
                sx={{ width: "120px", fontWeight: 500 }}
                align="center"
              >
                Giảm giá
              </TableCell>
              <TableCell
                sx={{ pr: 0, width: "130px", fontWeight: 500 }}
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
                  <Box>
                    <Typography fontSize="18px">{product.productName}</Typography>
                    <Typography
                      fontSize="14px"
                      color="#777E90"
                    >
                      Mã sản phẩm: #52178
                    </Typography>
                    <Typography
                      fontSize="14px"
                      color="#777E90"
                    >
                      Phân loại: Gạo dẻo
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">{product.quantity}</TableCell>
                <TableCell align="center">
                  {(+(product?.totalPrice?.toString() || 0))?.toLocaleString()}đ
                </TableCell>
                <TableCell align="center">
                  {(+(product?.discountPrice?.toString() || 0)).toLocaleString()}đ
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ pr: 0 }}
                >
                  <Typography component="span">
                    {(+(product?.temporaryPrice?.toString() || 0))?.toLocaleString()}đ
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
