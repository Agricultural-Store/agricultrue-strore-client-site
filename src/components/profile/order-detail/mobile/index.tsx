"use client";

import CustomizedStepper, { Connector3 } from "@/components/shared/CustomizedStepper";
import { Box, Step, StepLabel, Typography } from "@mui/material";
import React, { useState } from "react";
import ProfileOrderStepIcon from "./ProfileOrderStepIcon";
import ProfileOrderDetailInformation from "./ProfileOrderDetailInformation";
import ProfileOrderDetailSummary from "./ProfileOrderDetailSummary";
import ProfileOrderDetailList from "./ProfileOrderDetailList";

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

const ProfileOrderDetailMobile = () => {
  const [step] = useState(1);

  return (
    <Box width="calc(100%)">
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
            orientation="vertical"
            connector={<Connector3 />}
          >
            {itemsStepper.map((item) => (
              <Step
                key={item.label}
                sx={{ display: "flex" }}
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
                <Box
                  display="flex"
                  ml="8px"
                  flexDirection="column"
                  justifyContent="space-evenly"
                >
                  <Typography
                    fontSize="14px"
                    lineHeight="25px"
                    fontWeight={500}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    fontSize="12px"
                    lineHeight="25px"
                  >
                    <span style={{ fontWeight: "bold", fontSize: "inherit" }}>
                      Dự kiến:
                    </span>{" "}
                    {item.date}
                  </Typography>
                </Box>
              </Step>
            ))}
          </CustomizedStepper>
        </Box>
        <ProfileOrderDetailInformation />
        <ProfileOrderDetailList />
        <ProfileOrderDetailSummary />
      </Box>
    </Box>
  );
};

export default ProfileOrderDetailMobile;
