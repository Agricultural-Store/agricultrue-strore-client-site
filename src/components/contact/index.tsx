"use client";

import useMedia from "@/hooks/shared/useMedia";
import React from "react";
import ContactDesktop from "./desktop";

const Contact = () => {
  const { media } = useMedia();

  if (media) {
    return null;
  }
  return <ContactDesktop />;
};

export default Contact;
