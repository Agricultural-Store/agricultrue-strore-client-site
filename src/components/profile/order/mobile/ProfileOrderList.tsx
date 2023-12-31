import React from "react";
import ProfileOrderItem from "./ProfileOrderItem";
import { Box, Typography } from "@mui/material";
import { UserOrder } from "@/types/user";

type Props = {
  orders?: UserOrder[];
};

const ProfileOrderList = ({ orders }: Props) => {
  return (
    <Box my="24px">
      {!orders?.length && <Typography textAlign="center">Chưa có đơn hàng</Typography>}
      {orders?.map((order) => (
        <ProfileOrderItem
          key={order.id}
          order={order}
        />
      ))}
    </Box>
  );
};

export default ProfileOrderList;
