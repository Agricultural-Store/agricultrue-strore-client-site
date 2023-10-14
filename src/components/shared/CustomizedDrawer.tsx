import { Box, Drawer } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  open: boolean;
  onClose?: (open: boolean) => void;
  children?: ReactNode;
  width?: number | string;
};

const CustomizedDrawer = ({ onClose, open, children, width }: Props) => {
  const handleClose = () => {
    onClose?.(false);
  };

  return (
    <Drawer
      anchor={"right"}
      open={open}
      onClose={handleClose}
    >
      <Box
        sx={{ width: width ?? 450 }}
        role="presentation"
      >
        {children}
      </Box>
    </Drawer>
  );
};

export default CustomizedDrawer;
