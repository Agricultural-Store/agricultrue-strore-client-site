import CustomizedInput from "@/components/shared/CustomizedInput";
import useContactCreate from "@/hooks/contact/useContactCreate";
import { AppContext } from "@/providers/AppContext";
import { ContactInput } from "@/types/contact";
import { Box, Button, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";

const ContactForm = () => {
  const [input, setInput] = useState<ContactInput>({
    feedback: "",
    mail: "",
    name: "",
    phone: "",
  });

  const [error, setError] = useState(true);

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
          setInput({
            feedback: "",
            mail: "",
            name: "",
            phone: "",
          });
          setIsLoading(false);
          setIsCompleted(true);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  };

  useEffect(() => {
    const isEmpty = Object.values(input).includes("");
    if (isEmpty) {
      setError(true);
    } else {
      setError(false);
    }
  }, [input]);

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
          value={input.name}
          onChange={handleChange}
        />
        <CustomizedInput
          fullWidth
          label="Số điện thoại"
          type="number"
          name="phone"
          placeholder="Nhập số điện thoại"
          value={input.phone}
          onChange={handleChange}
        />
        <CustomizedInput
          fullWidth
          label="Email"
          placeholder="Nhập email"
          name="mail"
          value={input.mail}
          onChange={handleChange}
        />
        <CustomizedInput
          fullWidth
          label="Lời nhắn"
          placeholder="Nhập lời nhắn"
          name="feedback"
          onChange={handleChange}
          multiline
          value={input.feedback}
          rows={5}
        />
        <Button
          variant="contained"
          fullWidth
          disabled={error}
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
