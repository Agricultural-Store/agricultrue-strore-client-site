"use client";
import React, { useContext, useEffect } from "react";
import useMedia from "@/hooks/shared/useMedia";
import HomeDesktop from "./desktop";
import { AppContext } from "@/providers/AppContext";
import { useSearchParams } from "next/navigation";
import HomeMobile from "./mobile";
import { Box } from "@mui/material";
import News from "../news";
import FooterImage from "../layouts/FooterImage";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const { media } = useMedia();
  const { setOpenAuth } = useContext(AppContext);
  const params = useSearchParams();

  useEffect(() => {
    const loginUrl = params.get("loginUrl");
    if (loginUrl) {
      setOpenAuth(true);
    }
  }, [params, setOpenAuth]);

  if (media) {
    return (
      <>
        <HomeMobile />;
        <Box sx={{ pb: "48px", mt: "48px" }}>
          <News />
        </Box>
        <FooterImage />
      </>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <HomeDesktop />;
        <Box
          width={{
            lg: "85%",
            sm: "100%",
          }}
          sx={{
            m: "0 auto",
            pb: "48px",
            mt: "48px",
            paddingX: {
              sm: "48px !important",
              lg: "0px !important",
            },
          }}
        >
          <News />
        </Box>
        <FooterImage />
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
