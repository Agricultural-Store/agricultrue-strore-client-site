"use client";

import useMedia from "@/hooks/shared/useMedia";
import { Box, Container } from "@mui/material";
import React from "react";

const FooterImage = () => {
  const { media } = useMedia();

  if (media)
    return (
      <Box
        component="img"
        width="100%"
        src="/images/footer-image-mobile.png"
      ></Box>
    );

  return (
    <Container
      sx={{
        paddingX: {
          sm: "0px !important",
        },
      }}
    >
      <Box
        component="img"
        width="100%"
        src="/images/footer-image.png"
      ></Box>
    </Container>
  );
};

export default FooterImage;
