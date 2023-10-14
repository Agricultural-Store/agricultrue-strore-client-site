import { Box, Typography, Divider } from "@mui/material";
import React from "react";

const ProfileOrderDetailItem = () => {
  return (
    <>
      <Box py="12px">
        <Box
          display="flex"
          justifyContent="start"
          alignItems="center"
        >
          <Box
            component="img"
            src="/images/image.png"
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
              Gạo Dẻo ST25
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
                #52178
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
                Gạo dẻo
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
            04
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
              160.000đ
            </Typography>
            <Typography
              fontSize="14px"
              lineHeight="28px"
            >
              120.000đ
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider></Divider>
    </>
  );
};

export default ProfileOrderDetailItem;
