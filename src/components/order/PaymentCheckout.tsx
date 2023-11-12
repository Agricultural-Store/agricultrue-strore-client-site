import appConfig from "@/config/env";
import useOrderPaymentKeyCreate from "@/hooks/order/useOrderPaymentKeyCreate";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { ReactNode, useEffect, useState } from "react";

const promiseStrip = loadStripe(appConfig.PAYMENT_KEY);

type Props = {
  children: ReactNode;
};

const PaymentCheckout = ({ children }: Props) => {
  const [clientSecret, setClientSecret] = useState("");

  const { trigger } = useOrderPaymentKeyCreate();
  useEffect(() => {
    trigger({
      body: {
        amount: 500000,
      },
    }).then((res) => {
      if (res.statusCode === 200) {
        setClientSecret(res.data.clientSecret || "");
      }
    });
  }, [trigger]);

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
