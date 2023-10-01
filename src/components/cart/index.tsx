"use client";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import CustomizedDrawer from "../shared/CustomizedDrawer";
import CloseIcon from "../shared/icons/CloseIcon";

type Props = {
  open: boolean;
  onClose: (open: boolean) => void;
};

const Cart = ({ onClose, open }: Props) => {
  return (
    <div>
      <CustomizedDrawer
        open={open}
        onClose={onClose}
      >
        <Box sx={{ p: "36rem 24rem", display: "flex" }}>
          <Typography
            fontSize="24rem"
            // fontWeight={700}
            component="h1"
          >
            Sản phẩm
          </Typography>
          <IconButton sx={{ color: "color.textBlack" }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </CustomizedDrawer>
    </div>
  );
};

export default Cart;
