import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import OrderAddress from "./OrderAddress";
import OrderPayment from "./OrderPayment";
import OrderOverview from "./OrderOverview";
import ArrowBackIcon from "@/components/shared/icons/ArrowBackIcon";
import OrderComplete from "./OrderComplete";
import useUserCar from "@/hooks/user/useUserCart";
import { scrollTo } from "@/utils/scroll";
import useOrderCreate from "@/hooks/order/useOrderCreate";
import { OrderCreateInput, PaymentMethod } from "@/types/order";
import { CartContext } from "@/providers/CartContext";
import { usePathname, useRouter } from "next-intl/client";
import appConfig from "@/config/env";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useEnqueueSnackbar } from "@/hooks/shared/useEnqueueSnackbar";

const OrderMobile = () => {
  const [step, setStep] = useState(1);
  const [creditComplete, setCreateComplete] = useState(false);
  const [input, setInput] = useState<OrderCreateInput>({
    addressId: 0,
    discountPrice: 0,
    paymentMethod: PaymentMethod.CASH,
    note: "",
    products: [],
    totalPrice: 0,
  });

  const { product } = useContext(CartContext);

  const router = useRouter();
  const [setEnqueue] = useEnqueueSnackbar();

  const { data } = useUserCar();
  const { trigger } = useOrderCreate();
  const stripe = useStripe();
  const elements = useElements();
  const pathname = usePathname();

  const handleSubmit = async () => {
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
    scrollTo({ top: 0 });
    if (step < 3) {
      setStep((pre) => (pre = pre + 1));
    } else {
      if (input.paymentMethod === PaymentMethod.CREDIT) {
        handleSubmit();
      }
      trigger(
        {
          body: input,
        },
        {
          onError: () => {
            setEnqueue("Đặt hàng thất bại", "error");
          },
        },
      ).then(() => {
        setStep(4);
      });
    }
  };
  const handlePreviousStep = () => {
    if (step > 1) {
      setStep((pre) => (pre = pre - 1));
    } else {
      router.push("/product");
    }
  };

  const handleChangeAddress = (id?: number) => {
    setInput((pre) => ({
      ...pre,
      addressId: id || 0,
    }));
  };
  const handleChangeNote = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((pre) => ({
      ...pre,
      note: e.target.value,
    }));
  };
  const handleChangePayment = (payment: PaymentMethod) => {
    setInput((pre) => ({
      ...pre,
      paymentMethod: payment || "",
    }));
  };

  const handleChangeSummary = (origin: number, discount: number) => {
    setInput((pre) => ({
      ...pre,
      discountPrice: discount,
      totalPrice: origin - discount,
    }));
  };

  useEffect(() => {
    setInput((pre) => ({
      ...pre,
      products: product
        ? [{ id: product.id, productCount: product.productCount }]
        : data?.data.map((value) => ({ id: value.id })) || [],
    }));
  }, [data, product]);

  return (
    <>
      <Box sx={{ px: "16px" }}>
        <Box>
          <Box width="100%">
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
                onClick={handlePreviousStep}
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography
                variant="h2"
                textAlign="center"
                width="100%"
              >
                Giao Hàng
              </Typography>
              <Box
                height="40px"
                width="40px"
              ></Box>
            </Box>
            {step === 1 && (
              <OrderAddress
                onChange={handleChangeAddress}
                onChangeNote={handleChangeNote}
              />
            )}
            <OrderPayment
              onChange={handleChangePayment}
              unmounted={step === 2 ? false : true}
              onCompleteCredit={setCreateComplete}
            />
            {step === 3 && (
              <OrderOverview
                data={data?.data}
                onBackStep={setStep}
                onChange={handleChangeSummary}
                addressId={input.addressId}
              />
            )}
            {step === 4 && <OrderComplete />}
          </Box>
        </Box>
        {step !== 4 && (
          <Button
            variant="contained"
            fullWidth
            onClick={handleNextStep}
            disabled={
              input.paymentMethod === PaymentMethod.CASH
                ? false
                : step === 2 && !creditComplete
            }
            sx={{ textTransform: "capitalize", my: "16px" }}
          >
            Tiếp tục
          </Button>
        )}
      </Box>
    </>
  );
};

export default OrderMobile;
