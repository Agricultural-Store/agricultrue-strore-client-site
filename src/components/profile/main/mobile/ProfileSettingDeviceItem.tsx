import ComputerIcon from "@/components/shared/icons/ComputerIcon";
import DeleteIcon from "@/components/shared/icons/DeleteIcon";
import LaptopIcon from "@/components/shared/icons/LaptopIcon";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";

type Props = {
  name?: string;
  isActive?: boolean;
  address?: string;
  isMe?: boolean;
  id?: number;
};

const ProfileSettingDeviceItem = ({ address, id, isActive, isMe, name }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        my: "10px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
        {!name ? <ComputerIcon /> : <LaptopIcon />}
        <Stack
          gap="8px"
          ml="12px"
        >
          <Box
            display="flex"
            gap="6px"
          >
            <Typography
              fontSize="16px"
              fontWeight={500}
            >
              {name || "Unknow Devide"}
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              gap="6px"
              p="4px 8px"
              borderRadius="4px"
              sx={{ height: "26px", bgcolor: isActive ? "#D9EDD7" : "#F4F5F6" }}
            >
              <Box
                sx={{
                  bgcolor: isActive ? "#40B649" : "#606779",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                }}
              ></Box>
              <Typography
                sx={{ color: isActive ? "#40B649" : "#606779", fontSize: "14px" }}
              >
                {isActive ? "Hoạt  động" : "Đã thoát"}
              </Typography>
            </Box>
          </Box>
          {isMe && (
            <Typography
              fontSize="14px"
              fontWeight={500}
            >
              Thiết bị này
            </Typography>
          )}
          <Typography
            fontSize="14px"
            fontWeight={400}
            color="#777E90"
          >
            {address || "Cần Thơ, Việt Nam | 01/01/2000"}
          </Typography>
        </Stack>
      </Box>
      <IconButton id={id?.toString()}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default ProfileSettingDeviceItem;
