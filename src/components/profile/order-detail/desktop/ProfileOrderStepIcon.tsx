"use client";
import InHomeIcon from "@/components/shared/icons/InHomeIcon";
import LocalShippingIcon from "@/components/shared/icons/LocalShippingIcon";
import PackageIcon from "@/components/shared/icons/PackageIcon";
import ValetIcon from "@/components/shared/icons/ValetIcon";
import { StepIconProps, styled } from "@mui/material";
import React from "react";

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

const ProfileOrderStepIcon = ({
  active,
  completed,
  className,
  ...props
}: StepIconProps) => {
  const icons: { [index: string]: React.ReactElement } = {
    1: <ValetIcon />,
    2: <PackageIcon />,
    3: <LocalShippingIcon />,
    4: <InHomeIcon />,
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

export default ProfileOrderStepIcon;
