import { Box } from "@mui/material";
import React from "react";
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";

const ContactMobile = () => {
  return (
    <Box>
      <Box
        component="img"
        src="/images/contact.png"
        width="100%"
      />
      <Box p="24px 16px">
        <ContactInformation />
        <ContactForm />
      </Box>
    </Box>
  );
};

export default ContactMobile;
