"use client";

import CustomizedStepper, { Connector2 } from "@/components/shared/CustomizedStepper";
import { Box, Divider, Step, StepLabel, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProfileOrderStepIcon from "./ProfileOrderStepIcon";
import ProfileOrderDetailTable from "./ProfileOrderDetailTable";
import ProfileOrderDetailInformation from "./ProfileOrderDetailInformation";
import ProfileOrderDetailSummary from "./ProfileOrderDetailSummary";
import useMedia from "@/hooks/shared/useMedia";
import useUserOrderDetail from "@/hooks/user/useUserOrderDetail";
import { useParams } from "next/navigation";
import RootLoading from "@/app/[locale]/loading";

const ProfileOrderDetailDesktop = () => {
  const [step, setStep] = useState(1);

  const params = useParams();
  const { media: media1200 } = useMedia(1200);

  const { data, isLoading, isValidating } = useUserOrderDetail(+(params.id && params.id));

  const itemsStepper = [
    {
      label: "Chờ xác nhận",
      date: new Date(data?.data.createAt || Date.now()).toLocaleDateString(),
    },
    {
      label: "Chuẩn bị hàng",
      date: new Date(data?.data.updateAt || Date.now()).toLocaleDateString(),
    },
    {
      label: "Đang vận chuyển",
      date: new Date(data?.data.updateAt || Date.now()).toLocaleDateString(),
    },
    {
      label: "Đã giao hàng",
      date: new Date(data?.data.updateAt || Date.now()).toLocaleDateString(),
    },
  ];

  useEffect(() => {
    if (data?.data) {
      if (data?.data.status === "pending") {
        setStep(1);
      } else if (data?.data.status === "completed") {
        setStep(4);
      }
    }
  }, [data]);

  if (isLoading || isValidating) {
    return <RootLoading />;
  }

  return (
    <Box
      width={media1200 ? "100%" : "calc(100% - 250px)"}
      pl={media1200 ? "0px" : "48px"}
    >
      <Box
        bgcolor="color.bgWhite"
        width="100%"
        p="26px 24px"
      >
        <Typography
          variant="h3"
          mb="24px"
        >
          Mã vận đơn: #{data?.data.id}
        </Typography>
        <Box>
          <CustomizedStepper
            activeStep={step}
            connector={<Connector2 />}
          >
            {itemsStepper.map((item) => (
              <Step
                key={item.label}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <StepLabel
                  StepIconComponent={ProfileOrderStepIcon}
                  sx={{
                    fontSize: "14px",
                    fontWeight: 300,
                    "& .MuiStepLabel-iconContainer": {
                      p: 0,
                    },
                  }}
                ></StepLabel>
                <Typography
                  fontSize="16px"
                  lineHeight="25px"
                  fontWeight={500}
                >
                  {item.label}
                </Typography>
                <Typography
                  fontSize="14px"
                  lineHeight="25px"
                >
                  <span style={{ fontWeight: "bold", fontSize: "inherit" }}>
                    Dự kiến:
                  </span>{" "}
                  {item.date}
                </Typography>
              </Step>
            ))}
          </CustomizedStepper>
        </Box>
        <Divider sx={{ my: "16px" }}></Divider>
        <ProfileOrderDetailInformation order={data?.data} />
        <Divider sx={{ my: "16px" }}></Divider>
        <ProfileOrderDetailTable order={data?.data} />
        <Divider sx={{ my: "16px" }}></Divider>
        <ProfileOrderDetailSummary order={data?.data} />
      </Box>
    </Box>
  );
};

export default ProfileOrderDetailDesktop;
