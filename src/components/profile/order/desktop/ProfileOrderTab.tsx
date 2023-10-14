import CustomizedTab from "@/components/shared/tab/CustomizedTab";
import { Box } from "@mui/material";
import React, { useState } from "react";
import ProfileOrderList from "./ProfileOrderList";

const tabs = [
  {
    value: 0,
    label: "Tất cả",
  },
  {
    value: 1,
    label: "Chờ xác nhận",
  },
  {
    value: 2,
    label: "Chờ vận chuyển",
  },
  {
    value: 3,
    label: "Đang giao",
  },
  {
    value: 4,
    label: "Hoàn thành",
  },
  {
    value: 5,
    label: "Đã huỷ",
  },
  {
    value: 6,
    label: "Hoàn hàng",
  },
];

const ProfileOrderTab = () => {
  const [tabActive, setTabActive] = useState(0);
  return (
    <Box>
      <CustomizedTab
        value={tabActive}
        onChange={setTabActive}
        labels={tabs.map((tab) => tab.label)}
      >
        <ProfileOrderList />
      </CustomizedTab>
    </Box>
  );
};

export default ProfileOrderTab;
