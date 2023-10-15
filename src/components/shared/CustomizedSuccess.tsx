"use client";

import React from "react";
import Lottie from "react-lottie";
import animationData from "@/assets/lotties/success.json";
import { Backdrop } from "@mui/material";

type Props = {
  open: boolean;
  onCompleted?: (isCompleted: boolean, callback?: () => void) => void;
};

const CustomizedSuccess = ({ open, onCompleted }: Props) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Backdrop
      open={open}
      sx={{ zIndex: 100000, position: "fixed", top: 0, left: 0 }}
    >
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
        eventListeners={[
          {
            eventName: "complete",
            callback: () => {
              onCompleted?.(false);
            },
          },
        ]}
      />
    </Backdrop>
  );
};

export default CustomizedSuccess;
