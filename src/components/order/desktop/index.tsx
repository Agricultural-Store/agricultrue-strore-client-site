import CustomizedStepper from "@/components/shared/CustomizedStepper";
import CustomizedStepIcon from "@/components/shared/CustomizedStepIcon";
import { Box, Step, StepLabel, Typography } from "@mui/material";
import React, { useState } from "react";
import OrderAddress from "./OrderAddress";
import OrderSummary from "./OrderSummary";
import OrderPayment from "./OrderPayment";
import OrderOverview from "./OrderOverview";
import OrderCompleteDialog from "./OrderCompleteDialog";

const labelStepper = ["Địa chỉ", "Thanh toán", "Duyệt lại"];

const OrderDesktop = () => {
  const [step, setStep] = useState(1);
  const [openCompleteDialog, setOpenCompleteDialog] = useState(false);

  const handleNextStep = () => {
    if (step < 3) setStep((pre) => (pre = pre + 1));
    else {
      setOpenCompleteDialog(true);
    }
  };
  const handlePreviousStep = () => {
    if (step > 1) setStep((pre) => (pre = pre - 1));
  };

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

            {step === 1 && <OrderAddress />}
            {step === 2 && <OrderPayment />}
            {step === 3 && <OrderOverview onBackStep={setStep} />}
          </Box>
        </Box>
        <OrderSummary
          onNext={handleNextStep}
          onPrevious={handlePreviousStep}
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
