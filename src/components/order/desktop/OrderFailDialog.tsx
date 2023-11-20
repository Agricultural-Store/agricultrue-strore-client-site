import CustomizedSlideDialog from "@/components/shared/CustomizedSlideDialog";
import { Box, Button, DialogContent, Typography } from "@mui/material";
import { useRouter } from "next-intl/client";
import React from "react";

type Props = {
  open: boolean;
  onOpen: (open: boolean) => void;
};

const OrderFailDialog = ({ onOpen, open }: Props) => {
  const router = useRouter();

  const handleMoveOrderHistory = () => {
    onOpen(false);
    setTimeout(() => {
      router.push("/profile/order");
    }, 500);
  };

  const handleClose = () => {
    onOpen(false);
    router.push("/product");
  };

  return (
    <CustomizedSlideDialog open={open}>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src="/images/fail-icon.png"
          mb="24px"
        />
        <Typography
          variant="h3"
          lineHeight="30px"
        >
          Đơn hàng đã đặt thất bại
        </Typography>
        <Typography
          mt="8px"
          lineHeight="28px"
          whiteSpace="pre-wrap"
          textAlign="center"
          mb="24px"
        >
          {
            "Rất tiếc, đơn hàng của bạn không thể được xử lý\nlúc này. Vui lòng thử lại sau."
          }
        </Typography>
        <Button
          fullWidth
          variant="outlined"
          color="error"
          onClick={handleMoveOrderHistory}
        >
          Xem lại
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="error"
          sx={{ mt: "12px" }}
          onClick={handleClose}
        >
          Xong
        </Button>
      </DialogContent>
    </CustomizedSlideDialog>
  );
};

export default OrderFailDialog;
