"use client";

import ProfileBar from "@/components/profile/ProfileBar";
import { Box } from "@mui/material";
import { useSession } from "next-auth/react";
import { usePathname } from "next-intl/client";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
import RootLoading from "../loading";

type Props = {
  children: ReactNode;
};

const ProfileLayout = ({ children }: Props) => {
  const { status } = useSession();
  const pathname = usePathname();

  if (status === "loading") {
    return <RootLoading />;
  }

  if (status === "unauthenticated") {
    redirect(`/?loginUrl=${pathname}`);
  }

  return (
    <Box
      p="64px 48px"
      display="flex"
      justifyContent="space-between"
      bgcolor="color.bgNeutral200"
    >
      <ProfileBar />
      {children}
    </Box>
  );
};

export default ProfileLayout;
