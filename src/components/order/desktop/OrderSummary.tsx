import appConfig from "@/config/env";
import useOrderCreate from "@/hooks/order/useOrderCreate";
import { useEnqueueSnackbar } from "@/hooks/shared/useEnqueueSnackbar";
import { OrderCreateInput, PaymentMethod } from "@/types/order";
import { Box, Button, Divider, Typography } from "@mui/material";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { usePathname } from "next-intl/client";
import React from "react";

type Props = {
  originalPrice: number;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  discountPrice: number;
  input: OrderCreateInput;
  setOpenCompleteDialog: (bool: boolean) => void;
};

const OrderSummary = ({
  discountPrice,
  originalPrice,
  setStep,
  step,
  input,
  setOpenCompleteDialog,
}: Props) => {
  const [setEnqueue] = useEnqueueSnackbar();

  const { trigger } = useOrderCreate();

  const stripe = useStripe();
  const elements = useElements();
  const pathname = usePathname();
  const handlePayment = async () => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: appConfig.PUBLIC_URL + pathname,
      },
      redirect: "if_required",
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  const handleNextStep = () => {
    console.log(input);
    if (step < 3) setStep((pre) => (pre = pre + 1));
    else {
      if (input.paymentMethod === PaymentMethod.CREDIT) {
        handlePayment();
      }
      trigger(
        {
          body: {
            ...input,
            isCombo: input.isCombo || false,
          },
        },
        {
          onError: () => {
            setEnqueue("Đặt hàng thất bại", "error");
          },
        },
      ).then(() => {
        setOpenCompleteDialog(true);
      });
    }
  };
  const handlePreviousStep = () => {
    if (step > 1) setStep((pre) => (pre = pre - 1));
  };

  return (
    <Box
      width="35%"
      height="277px"
      p="24px"
      borderRadius="6px"
      position="sticky"
      ml="40px"
      top="20px"
      sx={{ bgcolor: (theme) => `${theme.palette.color?.bgPrimary}14` }}
    >
      <Typography
        variant="h3"
        lineHeight="30px"
        mb="16px"
      >
        Tóm tắt
      </Typography>
      <Box>
        <Divider></Divider>
        <Box
          my="8px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          lineHeight="32px"
        >
          <Typography lineHeight="32px">Tạm tính</Typography>
          <Typography lineHeight="32px">{originalPrice.toLocaleString()}đ</Typography>
        </Box>
        <Box
          mb="8px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          lineHeight="32px"
        >
          <Typography lineHeight="32px">Giảm giá</Typography>
          <Typography lineHeight="32px">-{discountPrice.toLocaleString()}₫</Typography>
        </Box>
        <Divider></Divider>
      </Box>
      <Box
        mt="8px"
        mb="16px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        lineHeight="32px"
      >
        <Typography
          fontSize="18px"
          fontWeight={500}
          lineHeight="32px"
        >
          Tổng
        </Typography>
        <Typography
          fontSize="18px"
          fontWeight={500}
          lineHeight="32px"
        >
          {(originalPrice - discountPrice).toLocaleString()}đ
        </Typography>
      </Box>
      <Box
        display="flex"
        gap="20px"
      >
        <Button
          variant="outlined"
          fullWidth
          onClick={handlePreviousStep}
          sx={{ textTransform: "capitalize" }}
        >
          Trở về
        </Button>
        <Button
          variant="contained"
          fullWidth
          onClick={handleNextStep}
          sx={{ textTransform: "capitalize" }}
        >
          Tiếp tục
        </Button>
      </Box>
    </Box>
  );
};

export default OrderSummary;
