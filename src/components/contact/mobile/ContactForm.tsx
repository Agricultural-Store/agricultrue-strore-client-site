import CustomizedInput from "@/components/shared/CustomizedInput";
import { ContactInput } from "@/types/contact";
import { Box, Button, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";

const ContactForm = () => {
  const [, setInput] = useState<ContactInput>({
    feedback: "",
    mail: "",
    name: "",
    phone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInput((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  return (
    <Box>
      <Typography
        variant="h1"
        mb="16px"
        fontSize="20px"
      >
        Liên hệ với chúng tôi
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        gap="40px"
      >
        <CustomizedInput
          fullWidth
          label="Họ tên"
          placeholder="Nhập họ tên"
          onChange={handleChange}
        />
        <CustomizedInput
          fullWidth
          label="Số điện thoại"
          placeholder="Nhập số điện thoại"
          onChange={handleChange}
        />
        <CustomizedInput
          fullWidth
          label="Email"
          placeholder="Nhập email"
          onChange={handleChange}
        />
        <CustomizedInput
          fullWidth
          label="Lời nhắn"
          placeholder="Nhập lời nhắn"
          onChange={handleChange}
          multiline
          rows={5}
        />
        <Button
          variant="contained"
          fullWidth
          // sx={{ mt: "48px" }}
        >
          Gửi
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
