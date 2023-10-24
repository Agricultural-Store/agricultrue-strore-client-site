"use client";

import { Box, Container } from "@mui/material";
import { useSession } from "next-auth/react";
import { usePathname } from "next-intl/client";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
import RootLoading from "../loading";
import useMedia from "@/hooks/shared/useMedia";
import ProfileBar from "@/components/profile/ProfileBar";

type Props = {
  children: ReactNode;
};

const ProfileLayout = ({ children }: Props) => {
  const { status } = useSession();
  const { media } = useMedia();
  const { media: media1100 } = useMedia(1100);
  const pathname = usePathname();

  if (status === "loading") {
    return <RootLoading />;
  }

  if (status === "unauthenticated") {
    redirect(`/?loginUrl=${pathname}`);
  }

  if (media) {
    return (
      <Box
        p="0px 16px"
        pb="24px"
        display="flex"
        justifyContent="space-between"
        bgcolor="color.bgNeutral200"
      >
        {children}
      </Box>
    );
  }

  return (
    <Box
      p="64px 0px"
      bgcolor="color.bgNeutral200"
    >
      <Container
        sx={{
          paddingX: {
            sm: "48px !important",
            lg: "0px !important",
          },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {!media1100 && <ProfileBar />}
        {children}
      </Container>
    </Box>
  );
};

export default ProfileLayout;
