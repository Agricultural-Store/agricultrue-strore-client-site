import { PaymentMethod } from "@/types/order";
import { Box, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import OrderPaymentCreditForm from "./OrderPaymentCreditForm";

type Props = {
  onChange?: (payment: PaymentMethod) => void;
};

const OrderPayment = ({ onChange }: Props) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(PaymentMethod.CREDIT);

  const handleChangePaymentMethod = (
    event: ChangeEvent<HTMLInputElement>,
    value: string,
  ) => {
    setPaymentMethod(value as PaymentMethod);
    onChange?.(value as PaymentMethod);
  };

  return (
    <Box my="24px">
      <Typography variant="h3">Chọn phương thức thanh toán</Typography>
      <Box my="24px">
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={PaymentMethod.CREDIT}
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
      {paymentMethod === PaymentMethod.CREDIT && <OrderPaymentCreditForm />}
    </Box>
  );
};

export default OrderPayment;
