import CustomizedInput from "@/components/shared/CustomizedInput";
import { Divider, Typography, Box } from "@mui/material";
import React, { ChangeEvent, useState } from "react";

const OrderPaymentCreditForm = () => {
  const [input, setInput] = useState({
    number: "",
    cardName: "",
    cardCVV: "",
    cardDate: "",
  });

  const handleChangeCVVInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value = e.target.value;
    const regexp = /^\d{0,3}$/;
    if (value.length <= 3 && regexp.test(value)) {
      setInput((pre) => ({
        ...pre,
        cardCVV: value,
      }));
    }
  };

  const handleChangeExpiredDateInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value = e.target.value;
    const regexp = /^[\d]{0,}-{0,1}[\d]{0,}$/;
    if (value.length <= 5 && regexp.test(value)) {
      const _value =
        value.length === 2 ? value + "-" : value.length === 3 ? value.slice(0, 2) : value;
      setInput((pre) => ({
        ...pre,
        cardDate: _value,
      }));
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setInput((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  return (
    <>
      <Divider></Divider>
      <Typography
        mt="24px"
        variant="h3"
      >
        Thêm thẻ tín dụng/ghi nợ
      </Typography>
      <Box
        py="32px"
        flexDirection="column"
        display="flex"
        gap="56px"
      >
        <CustomizedInput
          label="Số thẻ"
          placeholder="Nhập số thẻ"
          fullWidth
          value={input.number}
          onChange={handleChangeInput}
          name="number"
        />
        <CustomizedInput
          label="Tên chủ thẻ"
          placeholder="Nhập tên chủ thẻ"
          fullWidth
          value={input.cardName}
          onChange={handleChangeInput}
          name="cardName"
        />
        <Box
          display="flex"
          gap="16px"
        >
          <CustomizedInput
            label="Ngày hết hạn"
            placeholder="00-00"
            fullWidth
            name="cardDate"
            value={input.cardDate}
            onChange={handleChangeExpiredDateInput}
          />
          <CustomizedInput
            label="CVV"
            placeholder="***"
            fullWidth
            name="cardCVV"
            value={input.cardCVV}
            onChange={handleChangeCVVInput}
          />
        </Box>
      </Box>
    </>
  );
};

export default OrderPaymentCreditForm;
