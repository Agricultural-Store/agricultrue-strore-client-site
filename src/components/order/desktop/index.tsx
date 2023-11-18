import CustomizedStepper from "@/components/shared/CustomizedStepper";
import CustomizedStepIcon from "@/components/shared/CustomizedStepIcon";
import { Box, Step, StepLabel, Typography } from "@mui/material";
import React, { ChangeEvent, useContext, useEffect, useMemo, useState } from "react";
import OrderAddress from "./OrderAddress";
import OrderSummary from "./OrderSummary";
import OrderPayment from "./OrderPayment";
import OrderOverview from "./OrderOverview";
import OrderCompleteDialog from "./OrderCompleteDialog";
import useUserCart from "@/hooks/user/useUserCart";
import { OrderCreateInput, PaymentMethod } from "@/types/order";
import { CartContext } from "@/providers/CartContext";
import { calcPriceDiscount } from "@/utils/count";
import PaymentCheckout from "../PaymentCheckout";

const labelStepper = ["Địa chỉ", "Duyệt lại", "Thanh toán"];

const OrderDesktop = () => {
  const [step, setStep] = useState(1);
  const [openCompleteDialog, setOpenCompleteDialog] = useState(false);
  const [input, setInput] = useState<OrderCreateInput>({
    addressId: 0,
    discountPrice: 0,
    paymentMethod: PaymentMethod.CASH,
    note: "",
    products: [],
    totalPrice: 0,
    isCombo: false,
  });

  const { product } = useContext(CartContext);

  const { data } = useUserCart();

  const originalPrice = useMemo(() => {
    if (product) {
      return (product.productCount || 1) * (product.productPrice || 1);
    }
    return (
      data?.data?.reduce(
        (pre, curr) => pre + (curr?.productPrice || 0) * (curr?.productCount ?? 1),
        0,
      ) || 0
    );
  }, [data, product]);

  const discountPrice = useMemo(() => {
    if (product) {
      return (
        calcPriceDiscount(product.productPrice, product.productDiscount) *
        (product?.productCount ?? 1)
      );
    }
    return (
      data?.data?.reduce(
        (pre, curr) =>
          pre +
          calcPriceDiscount(curr.productPrice, curr.productDiscount) *
            (curr?.productCount ?? 1),
        0,
      ) || 0
    );
  }, [data, product]);

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

  const handleClickLabel = () => {
    console.log("object");
  };

  useEffect(() => {
    if (product) {
      setInput((pre) => ({
        ...pre,
        isCombo: product.isCombo,
        products: [{ id: product.id, productCount: product.productCount }],
      }));
    } else {
      setInput((pre) => ({
        ...pre,
        isCombo: false,
        products: data?.data.map((value) => ({ id: value.id })) || [],
      }));
    }
  }, [data, product]);

  useEffect(() => {
    setInput((pre) => ({
      ...pre,
      discountPrice: discountPrice,
      totalPrice: originalPrice - discountPrice,
    }));
  }, [originalPrice, discountPrice]);

  return (
    <PaymentCheckout amount={originalPrice - discountPrice}>
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
                  component="div"
                  onClick={handleClickLabel}
                  sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                  <StepLabel
                    StepIconComponent={CustomizedStepIcon}
                    sx={{
                      fontSize: "14px",
                      fontWeight: 300,
                      cursor: "pointer",
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

            {step === 2 && (
              <OrderOverview
                addressId={input.addressId}
                data={data?.data}
                onBackStep={setStep}
              />
            )}
            {step === 3 && <OrderPayment onChange={handleChangePayment} />}
          </Box>
        </Box>
        <OrderSummary
          originalPrice={originalPrice}
          discountPrice={discountPrice}
          input={input}
          setOpenCompleteDialog={setOpenCompleteDialog}
          setStep={setStep}
          step={step}
        />
        <OrderCompleteDialog
          open={openCompleteDialog}
          onOpen={setOpenCompleteDialog}
        />
      </Box>
    </PaymentCheckout>
  );
};

export default OrderDesktop;
