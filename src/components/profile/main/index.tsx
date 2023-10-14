"use client";

import React from "react";
import ProfileMainDesktop from "./desktop";
import useMedia from "@/hooks/shared/useMedia";
import ProfileMainMobile from "./mobile";

const ProfileMain = () => {
  const { media } = useMedia();
  if (media) return <ProfileMainMobile />;

  return <ProfileMainDesktop></ProfileMainDesktop>;
};

export default ProfileMain;
