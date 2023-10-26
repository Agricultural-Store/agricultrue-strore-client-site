"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import NextIcon from "../../shared/icons/NextIcon";
import { Variants, motion } from "framer-motion";

const leftVariants: Variants = {
  offscreen: {
    x: -100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
      delay: 0.25,
    },
  },
};

const rightVariants: Variants = {
  offscreen: {
    x: 100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
      delay: 0.25,
    },
  },
};

const HomeIntroduce = () => {
  return (
    <Grid
      container
      sx={{ height: "450px", px: "48px", py: "64px" }}
    >
      <Grid
        item
        xs={5}
      >
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          style={{ width: "100%" }}
        >
          <motion.div variants={leftVariants}>
            <Box
              component="img"
              src="/images/home-introduce.png"
              sx={{ width: "100%" }}
            />
          </motion.div>
        </motion.div>
      </Grid>
      <Grid
        item
        xs={6}
      >
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          style={{ width: "100%" }}
        >
          <motion.div variants={rightVariants}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
                ml: "64px",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  textTransform: "capitalize",
                  whiteSpace: "pre-line",
                  fontSize: "28px",
                  fontWeight: 600,
                }}
              >
                Sự đặc biệt của{" "}
                <Typography
                  component="span"
                  sx={{
                    color: "color.textPrimary300",
                    fontSize: "inherit",
                    fontWeight: 600,
                  }}
                >
                  Lúa gạo vùng đồng bằng
                </Typography>
                {" Sông cửu Long"}
              </Typography>
              <Typography
                className="line-clamp-5"
                sx={{
                  py: "16px",
                  fontSize: "16px",
                  lineHeight: "28px",
                  fontWeight: "400px",
                  maxHeight: "150px",
                }}
              >
                Đồng bằng Sông Cửu Long, nơi được mẹ thiên nhiên ưu đãi với hệ thống sông
                ngòi dày đặc, mang trong mình vẻ đẹp hùng vĩ của những dòng sông mẹ, là
                &quote;lá phổi xanh&quote; của cả nước. Khi nhắc đến Cửu Long, người ta
                không thể không nghĩ ngay đến biểu tượng của nền nông nghiệp: những cánh
                đồng lúa xanh bát ngát.
              </Typography>
              <Button
                variant="text"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textTransform: "capitalize",
                }}
              >
                <Box
                  sx={{
                    fontSize: {
                      lg: "16px",
                      xs: "14px",
                    },
                    paddingRight: "8px",
                    textTransform: "capitalize",
                  }}
                >
                  Tìm hiểu thêm
                </Box>
                <NextIcon />
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default HomeIntroduce;
