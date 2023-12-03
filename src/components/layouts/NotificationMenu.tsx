import { IconButton, Menu, Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import NotificationOrderItem from "./NotificationOrderItem";
import RotateRightIcon from "../shared/icons/RotateRightIcon";
import NotificationIcon from "../shared/icons/NotificationIcon";
import useNotificationList from "@/hooks/notification/useNotificationList";
import CustomizedLoading from "../shared/CustomizedLoading";

import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import { useRouter } from "next-intl/client";

const NotificationMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const { data, isLoading, isValidating, mutate } = useNotificationList();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    mutate();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (id?: number) => {
    router.push(`/profile/order/order-detail/${id}`);
    handleClose();
  };

  return (
    <div>
      <IconButton
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ height: "40px", width: "40px" }}
      >
        <NotificationIcon />
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        slotProps={{
          paper: {
            sx: {
              // bgcolor: "red",
              boxShadow: "-2px 0px 36px 0px rgba(0, 0, 0, 0.08)",
              "::-webkit-scrollbar": {
                display: "none",
              },
            },
          },
        }}
      >
        <Box
          width="400px"
          maxHeight="600px"
          py="12px"
          px="24px"
        >
          <Typography
            fontSize="20px"
            fontWeight={600}
            mb="16px"
          >
            Thông báo
          </Typography>

          {(isLoading || isValidating) && (
            <Box
              display="flex"
              justifyContent="center"
            >
              <CustomizedLoading
                color="green"
                size="small"
              />
            </Box>
          )}
          {!isLoading &&
            !isValidating &&
            Array.isArray(data?.data) &&
            data?.data.map((d) => {
              return (
                <React.Fragment key={d.id}>
                  <NotificationOrderItem
                    data={d}
                    onClick={handleItemClick}
                  />
                  <Divider sx={{ my: "16px" }}></Divider>
                </React.Fragment>
              );
            })}
          {!isLoading && !isValidating && data?.data.length == 0 && (
            <Box
              textAlign="center"
              color="color.textNeutral500"
            >
              <FindInPageOutlinedIcon
                color="inherit"
                sx={{ fontSize: "48px" }}
              />
              <Typography fontSize="14px">Không có thông báo</Typography>
            </Box>
          )}

          {!isLoading && !isValidating && (
            <Box
              textAlign="center"
              pb="20px"
            >
              <IconButton onClick={() => mutate()}>
                <RotateRightIcon />
              </IconButton>
            </Box>
          )}
        </Box>
      </Menu>
    </div>
  );
};

export default NotificationMenu;
