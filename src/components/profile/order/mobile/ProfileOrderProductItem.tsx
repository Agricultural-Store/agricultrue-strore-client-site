import { Product } from "@/types/product";
import { Box, Typography, Divider } from "@mui/material";
import React from "react";

type Props = {
  product?: Product;
};

const ProfileOrderProductItem = ({ product }: Props) => {
  return (
    <>
      <Box
        px="16px"
        py="12px"
      >
        <Box
          display="flex"
          justifyContent="start"
          alignItems="center"
        >
          <Box
            component="img"
            src={product?.productImage}
            width="64px"
            height="64px"
            borderRadius="4px"
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="start"
            flexDirection="column"
            ml="12px"
          >
            <Typography
              fontSize="16px"
              fontWeight={600}
            >
              {product?.productName}
            </Typography>
            <Typography
              fontSize="14px"
              color="color.textNeutral500"
            >
              Mã sản phẩm:{" "}
              <Typography
                component="span"
                fontSize="inherit"
              >
                #{product?.id}
              </Typography>
            </Typography>
            <Typography
              fontSize="14px"
              color="color.textNeutral500"
            >
              Phân loại:{" "}
              <Typography
                component="span"
                fontSize="inherit"
              >
                {product?.productCategory}
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            fontSize="14px"
            lineHeight="28px"
          >
            Số lượng
          </Typography>
          <Typography
            fontSize="14px"
            lineHeight="28px"
            fontWeight={600}
          >
            {product?.quantity}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            fontSize="14px"
            lineHeight="28px"
          >
            Tạm tính
          </Typography>
          <Box
            display="flex"
            justifyContent="end"
            gap="8px"
            alignItems="center"
          >
            <Typography
              fontSize="14px"
              lineHeight="28px"
              color="#B1B5C3"
              sx={{ textDecoration: "line-through" }}
            >
              {product?.temporaryPrice?.toLocaleString()}đ
            </Typography>
            <Typography
              fontSize="14px"
              lineHeight="28px"
            >
              {product?.totalPrice?.toLocaleString()}đ
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider></Divider>
    </>
  );
};

export default ProfileOrderProductItem;
