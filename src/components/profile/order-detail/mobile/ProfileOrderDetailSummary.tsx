import { UserOrder } from "@/types/user";
import { Box, Button, Divider, Typography } from "@mui/material";
import { useRouter } from "next-intl/client";
import React from "react";

type Props = {
  order?: UserOrder;
};

const ProfileOrderDetailSummary = ({ order }: Props) => {
  const router = useRouter();

  const handleClickReBuy = () => {
    router.push("/product");
  };

  const handleCancel = () => {};
  return (
    <Box>
      <Typography
        variant="h3"
        lineHeight="30px"
        mb="16px"
        mt="24px"
      >
        Tóm tắt
      </Typography>
      <Box>
        <Divider></Divider>
        <Box
          my="8px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          lineHeight="32px"
        >
          <Typography lineHeight="32px">Tạm tính</Typography>
          <Typography lineHeight="32px">
            {(+(order?.totalPrice || 0)).toLocaleString()}đ
          </Typography>
        </Box>
        <Box
          mb="8px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          lineHeight="32px"
        >
          <Typography lineHeight="32px">Giảm giá</Typography>
          <Typography lineHeight="32px">
            -{(+(order?.discountPrice || 0)).toLocaleString()}đ
          </Typography>
        </Box>
        <Divider></Divider>
      </Box>
      <Box
        mt="8px"
        mb="16px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        lineHeight="32px"
      >
        <Typography
          fontSize="18px"
          fontWeight={500}
          lineHeight="32px"
        >
          Tổng
        </Typography>
        <Typography
          fontSize="18px"
          fontWeight={500}
          lineHeight="32px"
        >
          {(+(order?.temporaryPrice || 0)).toLocaleString()}đ
        </Typography>
      </Box>
      <Box>
        <Button
          variant="outlined"
          fullWidth
          color="error"
          onClick={handleCancel}
          sx={{ textTransform: "capitalize", mb: "12px" }}
        >
          Hủy đơn hàng
        </Button>
        <Button
          variant="contained"
          fullWidth
          sx={{ textTransform: "capitalize" }}
          onClick={handleClickReBuy}
        >
          Mua lại
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileOrderDetailSummary;
