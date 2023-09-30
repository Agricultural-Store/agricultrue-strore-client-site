"use client";
import { Box, Pagination, PaginationItem, SxProps, Typography } from "@mui/material";
import React from "react";

type Props = {
  itemCount?: number;
  page?: number;
  rowPerPage?: number;
  sx?: SxProps;
  paginationProps?: {
    sx?: SxProps;
  };
  onPageChange?: (page: number) => void;
};

const CustomizedPagination = ({
  itemCount,
  page,
  rowPerPage,
  sx,
  paginationProps,
  onPageChange,
}: Props) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onPageChange?.(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        ...sx,
      }}
    >
      <Typography sx={{ fontSize: "12px", color: "#777E90" }}>
        Hiển thị {rowPerPage} trên {itemCount} sản phẩm
      </Typography>
      <Pagination
        count={itemCount && rowPerPage ? Math.ceil(itemCount / rowPerPage) : 1}
        shape="rounded"
        page={page}
        onChange={handleChange}
        sx={{ ...paginationProps?.sx }}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            color="secondary"
            sx={{ color: "color.textNeutral400" }}
          />
        )}
      />
    </Box>
  );
};

export default CustomizedPagination;
