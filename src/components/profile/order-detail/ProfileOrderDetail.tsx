"use client";

import CustomizedStepper, { Connector2 } from "@/components/shared/CustomizedStepper";
import { Box, Divider, Step, StepLabel, Typography } from "@mui/material";
import React, { useState } from "react";
import ProfileOrderStepIcon from "./ProfileOrderStepIcon";
import ProfileOrderDetailTable from "./ProfileOrderDetailTable";
import ProfileOrderDetailInformation from "./ProfileOrderDetailInformation";
import ProfileOrderDetailSummary from "./ProfileOrderDetailSummary";

const itemsStepper = [
  {
    label: "Chờ xác nhận",
    date: "01/01/2000",
  },
  {
    label: "Chuẩn bị hàng",
    date: "02/01/2000",
  },
  {
    label: "Đang vận chuyển",
    date: "03/01/2000",
  },
  {
    label: "Đã giao hàng",
    date: "04/01/2000",
  },
];

const ProfileOrderDetail = () => {
  const [step, setStep] = useState(1);

  return (
    <Box
      width="calc(100% - 250px)"
      pl="48px"
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
          Mã vận đơn: #72564
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
                  fontWeight={700}
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
        <ProfileOrderDetailInformation />
        <Divider sx={{ my: "16px" }}></Divider>
        <ProfileOrderDetailTable />
        <Divider sx={{ my: "16px" }}></Divider>
        <ProfileOrderDetailSummary />
      </Box>
    </Box>
  );
};

export default ProfileOrderDetail;
