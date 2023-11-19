import React from "react";
import ProfileOrderItem from "./ProfileOrderItem";
import { Box } from "@mui/material";
import { UserOrder } from "@/types/user";

type Props = {
  orders?: UserOrder[];
};

const ProfileOrderList = ({ orders }: Props) => {
  return (
    <Box my="24px">
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
