import CustomizedStepper from "@/components/shared/CustomizedStepper";
import CustomizedStepIcon from "@/components/shared/CustomizedStepIcon";
import { Box, Step, StepLabel, Typography } from "@mui/material";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import OrderAddress from "./OrderAddress";
import OrderSummary from "./OrderSummary";
import OrderPayment from "./OrderPayment";
import OrderOverview from "./OrderOverview";
import OrderCompleteDialog from "./OrderCompleteDialog";
import useUserCar from "@/hooks/user/useUserCar";
import { OrderCreateInput, PaymentMethod } from "@/types/order";
import useOrderCreate from "@/hooks/order/useOrderCreate";
import { CartContext } from "@/providers/CartContext";

const labelStepper = ["Địa chỉ", "Thanh toán", "Duyệt lại"];

const OrderDesktop = () => {
  const [step, setStep] = useState(1);
  const [openCompleteDialog, setOpenCompleteDialog] = useState(false);
  const [input, setInput] = useState<OrderCreateInput>({
    addressId: 0,
    discountPrice: 0,
    paymentMethod: PaymentMethod.CASH,
    note: "",
    productIds: [],
    totalPrice: 0,
  });

  const { product } = useContext(CartContext);

  const { data } = useUserCar();
  const { trigger } = useOrderCreate();

  const handleNextStep = () => {
    if (step < 3) setStep((pre) => (pre = pre + 1));
    else {
      trigger(
        {
          body: input,
        },
        {
          onError: () => {},
        },
      ).then(() => {
        setOpenCompleteDialog(true);
      });
    }
  };
  const handlePreviousStep = () => {
    if (step > 1) setStep((pre) => (pre = pre - 1));
  };

  const handleChangeAddress = (id?: number) => {
    console.log(id);
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
      <Typography variant="h1">Địa chỉ giao hàng</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: "64px",
          width: "100%",
        }}
      >
        <Box width="61%">
          <Box width="100%">
            <CustomizedStepper activeStep={step}>
              {labelStepper.map((label) => (
                <Step
                  key={label}
                  sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                  <StepLabel
                    StepIconComponent={CustomizedStepIcon}
                    sx={{
                      fontSize: "14px",
                      fontWeight: 300,
                      "& .MuiStepLabel-iconContainer": {
                        p: 0,
                      },
                    }}
                  ></StepLabel>
                  <Typography
                    fontSize="14px"
                    lineHeight="25px"
                  >
                    {label}
                  </Typography>
                </Step>
              ))}
            </CustomizedStepper>

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
              />
            )}
          </Box>
        </Box>
        <OrderSummary
          onNext={handleNextStep}
          onChange={handleChangeSummary}
          onPrevious={handlePreviousStep}
          data={data?.data}
        />
        <OrderCompleteDialog
          open={openCompleteDialog}
          onOpen={setOpenCompleteDialog}
        />
      </Box>
    </>
  );
};

export default OrderDesktop;
