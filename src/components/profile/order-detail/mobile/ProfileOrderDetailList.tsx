import { Box, Typography } from "@mui/material";
import React from "react";
import ProfileOrderDetailItem from "./ProfileOrderDetailItem";
import { UserOrder } from "@/types/user";

type Props = {
  order?: UserOrder;
};

const ProfileOrderDetailList = ({ order }: Props) => {
  return (
    <>
      <Typography
        variant="h3"
        lineHeight="30px"
        mt="24px"
      >
        Sản phẩm
      </Typography>
      <Box>
        {order?.productOrders?.map((product) => (
          <ProfileOrderDetailItem key={product.id} product={product} />
        ))}
      </Box>
    </>
  );
};

export default ProfileOrderDetailList;
