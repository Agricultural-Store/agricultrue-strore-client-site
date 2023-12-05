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
        width={{
          lg: "85%",
          sm: "100%",
        }}
        sx={{
          m: "0 auto",
          paddingX: {
            sm: "48px !important",
            lg: "0px !important",
          },
        }}
      >
        <Box
          p="64px 0px"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <ContactInformation />
          <ContactForm />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactDesktop;
