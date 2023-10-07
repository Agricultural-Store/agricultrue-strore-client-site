"use client";

import { StepConnector, Stepper, stepConnectorClasses, styled } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  activeStep: number;
};

const Connector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 100,
  },
  [`&.${stepConnectorClasses.horizontal}`]: {
    marginTop: -22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      // borderColor: theme.palette.color?.bgPrimary,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.color?.bgPrimary,
      "::before": {
        backgroundColor: theme.palette.color?.bgPrimary,
      },
      "::after": {
        backgroundColor: theme.palette.color?.bgPrimary,
      },
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderTop: "1px dashed",
    margin: "0px 12px",
    position: "relative",
    borderColor: theme.palette.color?.bgNeutral300,
    "::before": {
      content: "''",
      position: "absolute",
      width: "5px",
      height: "5px",
      borderRadius: "50%",
      top: 0,
      left: -10,
      transition: ".4s",
      transform: "translateY(-50%)",
      backgroundColor: theme.palette.color?.bgNeutral300,
    },
    "::after": {
      content: "''",
      position: "absolute",
      width: "5px",
      height: "5px",
      borderRadius: "50%",
      top: 0,
      transition: ".4s",
      right: -10,
      transform: "translateY(-50%)",
      backgroundColor: theme.palette.color?.bgNeutral300,
    },
  },
}));

const CustomizedStepper = ({ children, activeStep }: Props) => {
  return (
    <Stepper
      // alternativeLabel
      activeStep={activeStep}
      connector={<Connector />}
    >
      {children}
    </Stepper>
  );
};

export default CustomizedStepper;
