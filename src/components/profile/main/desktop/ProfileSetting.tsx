import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import ProfileSettingNotificationItem from "./ProfileSettingNotificationItem";
import ProfileSettingDeviceItem from "./ProfileSettingDeviceItem";
import CustomizedLogoutDialog from "@/components/shared/dialog/CustomizedLogoutDialog";

const notifications = [
  {
    title: "Thông báo tổng quan",
    desc: "Nhận tất cả thông báo từ Dashboard.",
    id: 1,
  },
  {
    title: "Thông báo từ đơn hàng",
    desc: "Nhận thông báo từ đơn hàng, vận chuyển.",
    id: 2,
  },
  {
    title: "Thông báo từ khách hàng",
    desc: "Nhận thông báo từ bình luận.",
    id: 3,
  },
  {
    title: "Thông báo từ hệ thống",
    desc: "Nhận cảnh báo từ lỗi hệ thống.",
    id: 4,
  },
];

const devices = [
  {
    id: 1,
    isActive: true,
    name: "Macbook air",
    isMe: true,
  },
  {
    id: 1,
    isActive: false,
  },
  {
    id: 1,
    isActive: false,
  },
];

const security = [
  {
    title: "Tin nhắn văn bản",
    desc: "Nhận mã xác minh qua điện thoại của bạn.",
    id: 1,
  },
  {
    title: "Email",
    desc: "Nhận mã xác minh qua email của bạn.",
    id: 2,
  },
  {
    title: "Ứng dụng Authenticator",
    desc: "Nhận xác minh từ Google Authenticator.",
    id: 3,
  },
];

const ProfileSetting = () => {
  const [open, setOpen] = useState(false);

  const handleOpenLogout = () => {
    setOpen(true);
  };

  return (
    <Box
      width="400px"
      minHeight="128.5vh"
      bgcolor="color.bgWhite"
      boxShadow="0px 6px 36px 0px rgba(0, 0, 0, 0.08)"
      p="24px 24px 24px 24px"
    >
      <Typography
        fontSize="20px"
        lineHeight="30px"
        fontWeight={500}
      >
        Cài đặt tài khoản
      </Typography>
      <Divider sx={{ mt: "12px", mb: "16px" }}></Divider>
      <Typography
        fontSize="18px"
        lineHeight="32px"
        fontWeight={500}
      >
        Thông báo
      </Typography>
      {notifications.map((notification) => (
        <ProfileSettingNotificationItem
          key={notification.id}
          title={notification.title}
          desc={notification.desc}
        />
      ))}
      <Divider sx={{ my: "8px" }}></Divider>
      <Typography
        fontSize="18px"
        lineHeight="32px"
        fontWeight={500}
        mt="8px"
      >
        Thiết bị tin cậy
      </Typography>
      {devices.map((device) => (
        <ProfileSettingDeviceItem
          key={device.id}
          {...device}
        />
      ))}
      <Divider sx={{ my: "8px" }}></Divider>
      <Typography
        fontSize="18px"
        lineHeight="32px"
        fontWeight={500}
        mt="8px"
      >
        Bảo mật tài khoản
      </Typography>
      {security.map((se) => (
        <ProfileSettingNotificationItem
          key={se.id}
          title={se.title}
          desc={se.desc}
        />
      ))}
      <Divider sx={{ mt: "12px", mb: "16px" }}></Divider>
      <Button
        variant="contained"
        color="error"
        fullWidth
        onClick={handleOpenLogout}
      >
        Thoát tài khoản
      </Button>
      <CustomizedLogoutDialog
        open={open}
        onOpen={setOpen}
      />
    </Box>
  );
};

export default ProfileSetting;
