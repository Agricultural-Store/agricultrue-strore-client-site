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

const ProfileOrderDetailTable = () => {
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
              <TableCell align="center">120.000đ</TableCell>
              <TableCell align="center">30.000đ</TableCell>
              <TableCell
                align="right"
                sx={{ pr: 0 }}
              >
                <Typography component="span">90.000đ</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProfileOrderDetailTable;
