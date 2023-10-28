import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import OrderAddress from "./OrderAddress";
import OrderPayment from "./OrderPayment";
import OrderOverview from "./OrderOverview";
import ArrowBackIcon from "@/components/shared/icons/ArrowBackIcon";
import OrderComplete from "./OrderComplete";
import useUserCar from "@/hooks/user/useUserCar";
import { scrollTo } from "@/utils/scroll";
import useOrderCreate from "@/hooks/order/useOrderCreate";
import { OrderCreateInput, PaymentMethod } from "@/types/order";
import { CartContext } from "@/providers/CartContext";
import { useRouter } from "next-intl/client";

const OrderMobile = () => {
  const [step, setStep] = useState(1);
  const [input, setInput] = useState<OrderCreateInput>({
    addressId: 0,
    discountPrice: 0,
    paymentMethod: PaymentMethod.CASH,
    note: "",
    productIds: [],
    totalPrice: 0,
  });

  const { product } = useContext(CartContext);

  const router = useRouter();

  const { data } = useUserCar();
  const { trigger } = useOrderCreate();

  const handleNextStep = () => {
    scrollTo({ top: 0 });
    if (step < 3) {
      setStep((pre) => (pre = pre + 1));
    } else {
      trigger(
        {
          body: input,
        },
        {
          onError: () => {},
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
      productIds: product ? [product.id] : data?.data.map((value) => value.id) || [],
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
            {step === 2 && <OrderPayment onChange={handleChangePayment} />}
            {step === 3 && (
              <OrderOverview
                data={data?.data}
                onBackStep={setStep}
                onChange={handleChangeSummary}
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
