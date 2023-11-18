import appConfig from "@/config/env";
import useOrderPaymentKeyCreate from "@/hooks/order/useOrderPaymentKeyCreate";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { ReactNode, useEffect, useState } from "react";

const promiseStrip = loadStripe(appConfig.PAYMENT_KEY);

type Props = {
  children: ReactNode;
  amount: number;
};

const PaymentCheckout = ({ children, amount }: Props) => {
  const [clientSecret, setClientSecret] = useState("");

  const { trigger } = useOrderPaymentKeyCreate();
  useEffect(() => {
    if (amount)
      trigger({
        body: {
          amount: amount,
        },
      }).then((res) => {
        if (res.statusCode === 200) {
          setClientSecret(res.data.clientSecret || "");
        }
      });
  }, [trigger, amount]);

  if (clientSecret)
    return (
      <Elements
        stripe={promiseStrip}
        options={{
          clientSecret,
          appearance: {
            variables: {
              spacingUnit: "5px",
              // See all possible variables below
            },
          },
        }}
      >
        {children}
      </Elements>
    );

  return null;
};

export default PaymentCheckout;
