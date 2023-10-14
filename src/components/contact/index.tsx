"use client";

import useMedia from "@/hooks/shared/useMedia";
import React from "react";
import ContactDesktop from "./desktop";
import ContactMobile from "./mobile";

const Contact = () => {
  const { media } = useMedia();

  if (media) {
    return <ContactMobile />;
  }
  return <ContactDesktop />;
};

export default Contact;
