import { Box, Drawer } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  open: boolean;
  onClose?: (open: boolean) => void;
  children?: ReactNode;
};

const CustomizedDrawer = ({ onClose, open, children }: Props) => {
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
        sx={{ width: 450 }}
        role="presentation"
      >
        {children}
      </Box>
    </Drawer>
  );
};

export default CustomizedDrawer;
