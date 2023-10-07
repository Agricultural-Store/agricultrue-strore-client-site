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

const ProfileOrderTable = () => {
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
                  120.000đ
                </Typography>
                <Typography component="span">90.000đ</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProfileOrderTable;
