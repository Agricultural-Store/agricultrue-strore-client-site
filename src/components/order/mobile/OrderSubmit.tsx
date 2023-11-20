import appConfig from "@/config/env";
import useOrderCreate from "@/hooks/order/useOrderCreate";
import { OrderCreateInput, PaymentMethod } from "@/types/order";
import { Button } from "@mui/material";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { usePathname } from "next-intl/client";
import React from "react";
type Props = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  input: OrderCreateInput;
  creditComplete?: boolean;
};
const OrderSubmit = ({ input, setStep, step, creditComplete }: Props) => {
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
    if (step < 3) setStep((pre) => (pre = pre + 1));
    else {
      if (input.paymentMethod === PaymentMethod.CREDIT) {
        handlePayment();
      }
      trigger(
        {
          body: input,
        },
        {
          onError: () => {
            setStep(5);
          },
        },
      ).then(() => {
        setStep(4);
      });
    }
  };
  return (
    <Button
      variant="contained"
      fullWidth
      onClick={handleNextStep}
      disabled={
        input.paymentMethod === PaymentMethod.CASH ? false : step === 2 && !creditComplete
      }
      sx={{ textTransform: "capitalize", my: "16px" }}
    >
      Tiếp tục
    </Button>
  );
};

export default OrderSubmit;
