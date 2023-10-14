import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import OrderAddress from "./OrderAddress";
import OrderPayment from "./OrderPayment";
import OrderOverview from "./OrderOverview";
import ArrowBackIcon from "@/components/shared/icons/ArrowBackIcon";
import OrderComplete from "./OrderComplete";

const OrderMobile = () => {
  const [step, setStep] = useState(3);

  const handleNextStep = () => {
    window.scrollTo({ top: 0 });
    if (step < 4) setStep((pre) => (pre = pre + 1));
  };
  const handlePreviousStep = () => {
    console.log("object");
    if (step > 1) setStep((pre) => (pre = pre - 1));
  };

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
            {step === 1 && <OrderAddress />}
            {step === 2 && <OrderPayment />}
            {step === 3 && <OrderOverview onBackStep={setStep} />}
            {step === 4 && <OrderComplete />}
          </Box>
        </Box>
        {step !== 4 && (
          <Button
            variant="contained"
            fullWidth
            onClick={handleNextStep}
            sx={{ textTransform: "capitalize" }}
          >
            Tiếp tục
          </Button>
        )}
      </Box>
    </>
  );
};

export default OrderMobile;
