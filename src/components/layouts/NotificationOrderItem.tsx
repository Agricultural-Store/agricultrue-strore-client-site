import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowLargeRightIcon from "../shared/icons/ArrowLargeRightIcon";
import { Notification } from "@/types/notification";

type Props = { data: Notification; onClick?: (id?: number) => void };

const NotificationOrderItem = ({ data, onClick }: Props) => {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          display="flex"
          alignItems="center"
          gap="10px"
        >
          <Box
            width="48px"
            height="48px"
            bgcolor="#D9EDD7"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="50%"
          >
            <Box
              component="img"
              src="/images/local_mall.svg"
            />
          </Box>
          <Box>
            <Typography fontWeight={500}>Đơn hàng</Typography>
            <Typography
              fontSize="14px"
              color="#A3AAAB"
            >
              Vào lúc:{" "}
              <Typography
                component="span"
                fontSize="inherit"
                color="#606779"
              >
                {new Date(data.updateAt || "").toLocaleTimeString()}
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          onClick={() => onClick?.(data?.id)}
          sx={{ cursor: "pointer" }}
        >
          <Typography
            fontSize="14px"
            color="#777E90"
          >
            Xem chi tiết
          </Typography>
          <ArrowLargeRightIcon />
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt="10px"
      >
        <Typography
          color="#777E90"
          fontSize="16px"
        >
          ID đơn hàng
        </Typography>
        <Typography
          fontSize="16px"
          fontWeight={500}
        >
          #{data.id}
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt="6px"
      >
        <Typography
          color="#777E90"
          fontSize="16px"
        >
          Đơn vị vận chuyển
        </Typography>
        <Typography
          fontSize="16px"
          fontWeight={500}
        >
          HGQ Express
        </Typography>
      </Box>
    </Box>
  );
};

export default NotificationOrderItem;
