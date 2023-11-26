import { userApi } from "@/config/api-path";
import { useEnqueueSnackbar } from "@/hooks/shared/useEnqueueSnackbar";
import useUserOrderStatusUpdate from "@/hooks/user/useUserOrderStatusUpdate";
import { AppContext } from "@/providers/AppContext";
import { UserOrder } from "@/types/user";
import { Box, Button, Divider, Typography } from "@mui/material";
import { useRouter } from "next-intl/client";
import React, { useContext } from "react";

type Props = {
  order?: UserOrder;
};

const ProfileOrderDetailSummary = ({ order }: Props) => {
  const router = useRouter();
  const { trigger } = useUserOrderStatusUpdate(order?.id);
  const { setIsLoading } = useContext(AppContext);

  const [setEnqueue] = useEnqueueSnackbar();

  const handleClickReBuy = () => {
    router.push("/product");
  };

  const handleCancel = () => {
    setIsLoading(true);
    trigger(
      {
        path: userApi.updateOrderStatus(order?.id),
        body: {
          status: "cancel",
        },
      },
      {
        onError: () => {
          setIsLoading(false);
        },
      },
    ).then((res) => {
      if (res.statusCode === 200) {
        setEnqueue("Hủy đơn hàng thành công", "success");
        setIsLoading(false);
      }
    });
  };

  return (
    <Box>
      <Typography
        variant="h3"
        lineHeight="30px"
        mb="16px"
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
            {(+(order?.totalPrice || 0)).toLocaleString()} đ
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
            - {(+(order?.discountPrice || 0)).toLocaleString()} đ
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
          {(+(order?.temporaryPrice || 0)).toLocaleString()} đ
        </Typography>
      </Box>
      <Box
        display="flex"
        gap="20px"
      >
        <Button
          variant="outlined"
          fullWidth
          color="error"
          disabled={order?.status !== "pending" ? true : false}
          sx={{ textTransform: "capitalize" }}
          onClick={handleCancel}
        >
          Hủy đơn hàng
        </Button>
        <Button
          variant="contained"
          fullWidth
          onClick={handleClickReBuy}
          sx={{ textTransform: "capitalize" }}
        >
          Mua lại
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileOrderDetailSummary;
