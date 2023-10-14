"use client";
import useMedia from "@/hooks/shared/useMedia";
import React from "react";
import ProfileOrderDetailDesktop from "./desktop";
import ProfileOrderDetailMobile from "./mobile";

const ProfileOrderDetail = () => {
  const { media } = useMedia();

  if (media) return <ProfileOrderDetailMobile />;

  return <ProfileOrderDetailDesktop />;
};

export default ProfileOrderDetail;
