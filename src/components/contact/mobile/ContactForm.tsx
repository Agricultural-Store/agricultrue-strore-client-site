import CustomizedInput from "@/components/shared/CustomizedInput";
import useContactCreate from "@/hooks/contact/useContactCreate";
import { AppContext } from "@/providers/AppContext";
import { ContactInput } from "@/types/contact";
import { Box, Button, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import React, { ChangeEvent, useContext, useState } from "react";

const ContactForm = () => {
  const [input, setInput] = useState<ContactInput>({
    feedback: "",
    mail: "",
    name: "",
    phone: "",
  });

  const { setIsCompleted, setIsLoading, setOpenAuth } = useContext(AppContext);

  const { status } = useSession();

  const { trigger } = useContactCreate();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInput((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (status === "unauthenticated") {
      setOpenAuth(true);
    } else {
      setIsLoading(true);
      trigger({
        body: input,
      })
        .then(() => {
          setIsLoading(false);
          setIsCompleted(true);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
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
          name="name"
          placeholder="Nhập họ tên"
          onChange={handleChange}
        />
        <CustomizedInput
          fullWidth
          label="Số điện thoại"
          type="number"
          name="phone"
          placeholder="Nhập số điện thoại"
          onChange={handleChange}
        />
        <CustomizedInput
          fullWidth
          label="Email"
          placeholder="Nhập email"
          name="mail"
          onChange={handleChange}
        />
        <CustomizedInput
          fullWidth
          label="Lời nhắn"
          placeholder="Nhập lời nhắn"
          name="feedback"
          onChange={handleChange}
          multiline
          rows={5}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
          // sx={{ mt: "48px" }}
        >
          Gửi
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
