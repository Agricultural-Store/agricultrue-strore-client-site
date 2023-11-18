import { Box, IconButton, Typography } from "@mui/material";
import React, { ChangeEvent, useContext, useEffect, useMemo, useState } from "react";
import OrderAddress from "./OrderAddress";
import OrderPayment from "./OrderPayment";
import OrderOverview from "./OrderOverview";
import ArrowBackIcon from "@/components/shared/icons/ArrowBackIcon";
import OrderComplete from "./OrderComplete";
import useUserCar from "@/hooks/user/useUserCart";
import { OrderCreateInput, PaymentMethod } from "@/types/order";
import { CartContext } from "@/providers/CartContext";
import { useRouter } from "next-intl/client";
import { calcPriceDiscount } from "@/utils/count";
import PaymentCheckout from "../PaymentCheckout";
import OrderSubmit from "./OrderSubmit";
import { scrollTo } from "@/utils/scroll";

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

  const { data } = useUserCar();

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
    if (product) {
      setInput((pre) => ({
        ...pre,
        products: [{ id: product.id, productCount: product.productCount }],
      }));
    } else {
      setInput((pre) => ({
        ...pre,
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

  useEffect(() => {
    scrollTo({
      top: 0,
    });
  }, [step]);

  return (
    <PaymentCheckout amount={originalPrice - discountPrice}>
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

            {step === 2 && (
              <OrderOverview
                data={data?.data}
                onBackStep={setStep}
                onChange={handleChangeSummary}
                addressId={input.addressId}
              />
            )}
            <OrderPayment
              onChange={handleChangePayment}
              unmounted={step === 3 ? false : true}
              onCompleteCredit={setCreateComplete}
            />
            {step === 4 && <OrderComplete />}
          </Box>
        </Box>
        {step !== 4 && (
          <OrderSubmit
            input={input}
            setStep={setStep}
            step={step}
            creditComplete={creditComplete}
          />
        )}
      </Box>
    </PaymentCheckout>
  );
};

export default OrderMobile;
