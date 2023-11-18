"use client";
import { StepIconProps, styled } from "@mui/material";
import React from "react";
import OrderAddressIcon from "./icons/OrderAddressIcon";
import OrderPaymentIcon from "./icons/OrderPaymentIcon";
import OrderOverviewIcon from "./icons/OrderOverviewIcon";

const StepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.color?.bgNeutral200,
  zIndex: 1,
  color: theme.palette.color?.textBlack,
  width: "52px",
  height: "52px",
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  paddingRight: 0,
  transition: ".4s",
  ...(ownerState.active &&
    {
      // backgroundColor: theme.palette.color?.bgPrimary,
    }),
  ...(ownerState.completed && {
    backgroundColor: theme.palette.color?.bgPrimary,
    color: "#fff",
  }),
}));

const CustomizedStepIcon = ({
  active,
  completed,
  className,
  ...props
}: StepIconProps) => {
  const icons: { [index: string]: React.ReactElement } = {
    1: <OrderAddressIcon />,
    2: <OrderOverviewIcon />,
    3: <OrderPaymentIcon />,
  };

  return (
    <StepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </StepIconRoot>
  );
};

export default CustomizedStepIcon;
