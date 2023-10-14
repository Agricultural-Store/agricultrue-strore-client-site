"use client";

import useMedia from "@/hooks/shared/useMedia";
import React from "react";
import ProfileOrderDesktop from "./desktop";
import ProfileOrderMobile from "./mobile";

const ProfileOrder = () => {
  const { media } = useMedia();
  if (media) return <ProfileOrderMobile />;

  return <ProfileOrderDesktop />;
};

export default ProfileOrder;
