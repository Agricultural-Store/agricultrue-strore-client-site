import DeleteIcon from "@/components/shared/icons/DeleteIcon";
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
import React from "react";

const OrderOverviewTable = () => {
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
                sx={{ fontWeight: 700, pl: 0 }}
                align="left"
              >
                Sản phẩm
              </TableCell>
              <TableCell
                sx={{ fontWeight: 700 }}
                align="center"
              >
                Số lượng
              </TableCell>
              <TableCell
                sx={{ fontWeight: 700 }}
                align="center"
              >
                Thành tiền
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "error.main", fontWeight: 700, pr: 0 }}
              >
                Xóa tất cả (2)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                align="left"
                sx={{ display: "flex", alignItems: "center", gap: "8px", pl: 0 }}
              >
                <Box
                  sx={{
                    width: "65px",
                    height: "65px",
                    borderRadius: "4px",
                    bgcolor: "color.bgPrimary",
                  }}
                ></Box>
                <Typography fontSize="18px">Gạo Dẻo ST25</Typography>
              </TableCell>
              <TableCell align="center">01</TableCell>
              <TableCell align="center">
                <Typography component="span">90.000đ</Typography>
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
                  120.000đ
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{ pr: 0 }}
              >
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default OrderOverviewTable;
