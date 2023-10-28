import { Box, Typography } from "@mui/material";
import React from "react";

const ProfileOrderDetailInformation = () => {
  return (
    <>
      <Box py="16px">
        <Typography
          variant="h3"
          lineHeight="30px"
        >
          Địa chỉ nhận hàng
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "16px",
            mt: "16px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "6px", my: "8px" }}>
            <Typography
              fontSize="14px"
              fontWeight={500}
              lineHeight="28px"
            >
              Họ tên:{" "}
              <Typography
                fontWeight="normal"
                component="span"
                fontSize="inherit"
              >
                Dinh Phuc Khang
              </Typography>
            </Typography>
            <Typography
              fontSize="14px"
              fontWeight={500}
              lineHeight="28px"
            >
              Điện thoại:{" "}
              <Typography
                fontWeight="normal"
                component="span"
                fontSize="inherit"
              >
                0123 456 789
              </Typography>
            </Typography>
            <Typography
              fontSize="14px"
              fontWeight={500}
              lineHeight="28px"
            >
              Địa chỉ:{" "}
              <Typography
                fontWeight="normal"
                component="span"
                fontSize="inherit"
              >
                Khoa Công nghệ phần mềm, Trường Công nghệ Thông tin & Truyền thông, Trường
                Đại học Cần Thơ
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          variant="h3"
          lineHeight="30px"
        >
          Phương thức thanh toán
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "16px",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "16px",
          }}
        >
          <Typography
            fontSize="14px"
            fontWeight={500}
            lineHeight="28px"
          >
            Phương thức::{" "}
            <Typography
              fontWeight="normal"
              component="span"
              fontSize="inherit"
            >
              Thẻ tín dụng
            </Typography>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ProfileOrderDetailInformation;
