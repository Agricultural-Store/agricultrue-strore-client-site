"use client";

import React, { CSSProperties, ReactNode } from "react";
import { usePathname } from "next-intl/client";
import { Box } from "@mui/material";
import NextIntlLink from "next-intl/link";

type Props = {
  children: ReactNode;
  href: string;
  sx?: CSSProperties;
  activeColor?: string;
};

const CustomizeLink = ({ children, href, sx, activeColor }: Props) => {
  const pathname = usePathname();
  return (
    <Box sx={{ color: "white", fontSize: "16px", cursor: "pointer" }}>
      <NextIntlLink
        href={href}
        style={{
          textDecoration: "none",
          color: pathname.split("/").includes(href.split("/")?.[1])
            ? activeColor ?? "#0C7345"
            : "white",
          fontWeight: "bold",
          width: "100%",
          ...sx,
        }}
      >
        {children}
      </NextIntlLink>
    </Box>
  );
};

export default CustomizeLink;
