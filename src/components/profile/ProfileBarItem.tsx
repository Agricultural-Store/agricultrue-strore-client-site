import { Box } from "@mui/material";
import { usePathname } from "next-intl/client";
import React, { ReactNode } from "react";
import NextIntlLink from "next-intl/link";

type Props = {
  item: {
    icon: ReactNode;
    label: string;
    href: string;
  };
};

const ProfileBarItem = ({ item }: Props) => {
  const pathname = usePathname();
  return (
    <Box
      height="48px"
      sx={{ cursor: "pointer" }}
    >
      <NextIntlLink
        href={item.href}
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          color:
            pathname.split("/").includes(item.href.split("/")?.[2]) ||
            (!pathname.split("/")[2] && !item.href.split("/")?.[2])
              ? "#265426"
              : "#141416",
          padding: "12px 24px",
          backgroundColor:
            pathname.split("/").includes(item.href.split("/")?.[2]) ||
            (!pathname.split("/")[2] && !item.href.split("/")?.[2])
              ? "#D9EDD7"
              : "white",
        }}
      >
        {item.icon}
        &nbsp; {item.label}
      </NextIntlLink>
    </Box>
  );
};

export default ProfileBarItem;
