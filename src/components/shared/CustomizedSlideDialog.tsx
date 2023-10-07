"use client";

import { SxProps } from "@mui/material";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { ReactNode, forwardRef } from "react";

type Props = {
  children?: ReactNode;
  open: boolean;
  fullWidth?: boolean;
  maxWidth?: DialogProps["maxWidth"];
  onClose?: (e: React.MouseEvent) => void;
  width?: string | number;
  sx?: SxProps;
  fullScreen?: boolean;
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return (
    <Slide
      direction="up"
      ref={ref}
      {...props}
    />
  );
});

const CustomizedSlideDialog = ({
  open,
  onClose,
  maxWidth,
  fullScreen,
  fullWidth,
  sx,
  width,
  children,
}: Props) => {
  return (
    <div>
      <Dialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionComponent={Transition}
        maxWidth={maxWidth}
        fullWidth={fullWidth}
        keepMounted
        fullScreen={fullScreen}
        sx={{
          "& .MuiDialog-paper": {
            ...(sx as React.CSSProperties),
            maxWidth: width || "1152px",
            width: width || "auto",
          },
        }}
        componentsProps={{
          backdrop: {
            sx: {
              // backdropFilter: "blur(5px)",
              backgroundColor: "#141416A1",
            },
          },
        }}
      >
        {children}
      </Dialog>
    </div>
  );
};

export default CustomizedSlideDialog;
