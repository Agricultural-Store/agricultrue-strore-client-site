import DeleteIcon from "@/components/shared/icons/DeleteIcon";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import React from "react";

const OrderOverviewItem = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        my="12px"
      >
        <Box
          display="flex"
          // alignItems="center"
        >
          <Box
            component="img"
            src="/images/image.png"
            sx={{
              width: "64px",
              height: "64px",
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
            ml="12px"
          >
            <Typography
              fontSize="16px"
              fontWeight={600}
              className="line-clamp-1"
            >
              Gạo Dẻo ST25 asd asd sad as d sad sa d sad sad as da s a
            </Typography>
            <Typography fontSize="14px">
              Số lượng:
              <Typography
                component="span"
                fontSize="14px"
                sx={{ opacity: 0.6 }}
              >
                &nbsp;01
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          alignItems="end"
        >
          <IconButton sx={{ p: 0 }}>
            <DeleteIcon />
          </IconButton>
          <Typography fontSize="14px">90.000đ</Typography>
        </Box>
      </Box>
      <Divider></Divider>
    </>
  );
};

export default OrderOverviewItem;
