import { Box } from "@mui/material";
import React from "react";
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";

const ContactDesktop = () => {
  return (
    <Box>
      <Box
        component="img"
        src="/images/contact.png"
        width="100%"
      />
      <Box
        p="64px 48px"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <ContactInformation />
        <ContactForm />
      </Box>
    </Box>
  );
};

export default ContactDesktop;
