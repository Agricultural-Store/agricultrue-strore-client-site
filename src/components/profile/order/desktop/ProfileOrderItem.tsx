import { Box, Typography } from "@mui/material";
import React from "react";
import ProfileOrderTable from "./ProfileOrderTable";
import { useRouter } from "next-intl/client";
import { UserOrder } from "@/types/user";
import { convertStatus } from "@/utils/convert";

type Props = {
  order?: UserOrder;
};

const ProfileOrderItem = ({ order }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/profile/order/order-detail/${order?.id}`);
  };

  return (
    <Box
      sx={{
        boxShadow: "0px 6px 36px 0px rgba(0, 0, 0, 0.08)",
        mt: "24px",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <Box
        height="62px"
        bgcolor="#D9EDD7"
        p="24px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h3">
          Mã vận đơn:{" "}
          <Typography
            component="span"
            onClick={handleClick}
            sx={{
              fontWeight: 500,
              fontSize: "inherit",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            #{order?.id}
          </Typography>
        </Typography>
        <Typography fontWeight={600}>
          Trạng thái: {convertStatus(order?.status)}
        </Typography>
      </Box>
      <ProfileOrderTable products={order?.productOrders} />
      <Box
        p="24px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontSize="20px">Thành tiền</Typography>
        <Typography
          fontSize="18px"
          fontWeight={600}
        >
          {(+(order?.totalPrice || 0))?.toLocaleString()}đ
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileOrderItem;
