import { PaymentMethod } from "@/types/order";
import { Box, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { PaymentElement } from "@stripe/react-stripe-js";

type Props = {
  onChange?: (payment: PaymentMethod) => void;
  unmounted?: boolean;
  onCompleteCredit: (bool: boolean) => void;
};
const OrderPayment = ({ onChange, unmounted, onCompleteCredit }: Props) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(PaymentMethod.CASH);

  const handleChangePaymentMethod = (
    event: ChangeEvent<HTMLInputElement>,
    value: string,
  ) => {
    setPaymentMethod(value as PaymentMethod);
    onChange?.(value as PaymentMethod);
  };

  return (
    <Box
      my="24px"
      sx={{
        position: unmounted ? "absolute" : "relative",
        zIndex: unmounted ? -1 : 0,
        visibility: unmounted ? "hidden" : "visible",
      }}
    >
      <Typography variant="h3">Chọn phương thức thanh toán</Typography>
      <Box my="24px">
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={paymentMethod}
          name="radio-buttons-group"
          onChange={handleChangePaymentMethod}
        >
          <FormControlLabel
            value={PaymentMethod.CASH}
            control={<Radio />}
            label="Giao hàng trực tiếp"
            componentsProps={{
              typography: {
                sx: {
                  fontSize: "14px",
                  fontStyle: "italic",
                },
              },
            }}
          />
          <FormControlLabel
            value={PaymentMethod.CREDIT}
            control={<Radio />}
            label="Thanh toán bằng thẻ tín dụng/ghi nợ"
            componentsProps={{
              typography: {
                sx: {
                  fontSize: "14px",
                  fontStyle: "italic",
                },
              },
            }}
          />
        </RadioGroup>
      </Box>
      {paymentMethod === PaymentMethod.CREDIT && (
        <PaymentElement onChange={(event) => onCompleteCredit(event.complete)} />
      )}
    </Box>
  );
};

export default OrderPayment;
