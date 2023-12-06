"use client";

import useMedia from "@/hooks/shared/useMedia";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next-intl/client";
import React from "react";

const FooterImage = () => {
  const { media } = useMedia();
  const router = useRouter();

  if (media)
    return (
      <Box
        component="img"
        width="100%"
        src="/images/footer-image-mobile.png"
      ></Box>
    );

  return (
    <Box
      position="relative"
      width="100%"
    >
      <Box
        component="img"
        width="100%"
        src="/images/footer-image-contact.png"
      ></Box>
      <Box
        position="absolute"
        // height="100%"
        zIndex={1}
        left="50%"
        top={"50%"}
        width={{
          lg: "85%",
          sm: "100%",
        }}
        sx={{
          m: "0 auto",
          transform: "translate(-50%, -50%)",
          paddingX: {
            sm: "48px !important",
            lg: "16px !important",
          },
        }}
      >
        <Stack gap="12px">
          <Typography
            fontWeight={500}
            fontSize="28px"
            color="#FFFFFF"
          >
            Liên hệ ngay
          </Typography>
          <Typography sx={{ whiteSpace: "pre-wrap", color: "#FFF", fontSize: "16px" }}>
            {
              "Chúng tôi sẽ cố gắng giải đáp mọi câu hỏi và giúp bạn giải quyết các vấn đề\nmột cách nhanh chóng và hiệu quả."
            }
          </Typography>
          <Box>
            <Button
              variant="contained"
              onClick={() => router.push("/contact")}
            >
              Liên hệ
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default FooterImage;
