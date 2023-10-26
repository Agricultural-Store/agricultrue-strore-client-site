"use client";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CustomizedDrawer from "../shared/CustomizedDrawer";
import CloseIcon from "../shared/icons/CloseIcon";
import ProductInCartList from "./ProductInCartList";
import CartSummary from "./CartSummary";
import CartEmpty from "./CartEmpty";
import useMedia from "@/hooks/shared/useMedia";
import ArrowBackIcon from "../shared/icons/ArrowBackIcon";
import useUserCar from "@/hooks/user/useUserCar";
import { useSession } from "next-auth/react";

type Props = {
  open: boolean;
  onClose: (open: boolean) => void;
};

const Cart = ({ onClose, open }: Props) => {
  const { status } = useSession();

  const { media } = useMedia();

  const { data, mutate } = useUserCar();

  useEffect(() => {
    mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <>
      <CustomizedDrawer
        open={open}
        onClose={onClose}
        width={media ? "100%" : undefined}
      >
        <Box sx={{ px: media ? "16px" : "24px", width: media ? "100vw" : undefined }}>
          {media ? (
            <Box
              sx={{
                pt: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                mb: "8px",
              }}
            >
              <IconButton
                sx={{ color: "color.textBlack" }}
                onClick={() => onClose(false)}
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography
                variant="h2"
                textAlign="center"
                width="100%"
              >
                Sản phẩm
              </Typography>
              <Box
                height="40px"
                width="40px"
              ></Box>
            </Box>
          ) : (
            <Box
              sx={{
                pt: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: "8px",
              }}
            >
              <Typography variant="h2">Sản phẩm</Typography>
              <IconButton
                sx={{ color: "color.textBlack" }}
                onClick={() => onClose(false)}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          )}
          {data?.data.length && data.data.length > 0 ? (
            <>
              <Box
                height="calc(90vh - 320px)"
                sx={{ overflowY: "auto" }}
              >
                <ProductInCartList products={data.data} />
              </Box>
              <Box height="320px">
                <CartSummary
                  products={data.data}
                  onClose={onClose}
                />
              </Box>
            </>
          ) : (
            <CartEmpty />
          )}
        </Box>
      </CustomizedDrawer>
    </>
  );
};

export default Cart;
