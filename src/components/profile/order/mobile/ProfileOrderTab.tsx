import CustomizedTab from "@/components/shared/tab/CustomizedTab";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProfileOrderList from "./ProfileOrderList";
import useUserOrderList from "@/hooks/user/useUserOrderList";

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

  const [status, setStatus] = useState<string>();

  const { data } = useUserOrderList({ status: status });

  useEffect(() => {
    switch (tabActive) {
      case 1: {
        setStatus("pending");
        break;
      }
      case 5: {
        setStatus("cancel");
        break;
      }
      case 4: {
        setStatus("completed");
        break;
      }
      default: {
        setStatus(undefined);
      }
    }
  }, [tabActive]);

  return (
    <Box>
      <CustomizedTab
        value={tabActive}
        onChange={setTabActive}
        labels={tabs.map((tab) => tab.label)}
      >
        <ProfileOrderList orders={data?.data} />
      </CustomizedTab>
    </Box>
  );
};

export default ProfileOrderTab;
