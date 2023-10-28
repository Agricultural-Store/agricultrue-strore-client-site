import CustomizedCheckbox from "@/components/shared/CustomizedCheckbox";
import DeleteIcon from "@/components/shared/icons/DeleteIcon";
import EditIcon from "@/components/shared/icons/EditIcon";
import { Address } from "@/types/address";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

type Props = {
  id?: number;
  currentId?: number;
  onChecked: (id?: number) => void;
  address?: Address;
};

const OrderAddressItem = ({ id, onChecked, currentId, address }: Props) => {
  const handleChange = () => {
    onChecked(id);
  };
  return (
    <Box
      minWidth="432px"
      height="189px"
      bgcolor="color.bgNeutral200"
      p="24px"
      borderRadius="4px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography
            fontSize="18px"
            fontWeight={500}
            lineHeight="27px"
          >
            {address?.customerName}
          </Typography>
          <CustomizedCheckbox
            onChange={handleChange}
            checked={id === currentId ? true : false}
          ></CustomizedCheckbox>
        </Box>
        <Typography
          fontSize="14px"
          color="color.textNeutral600"
          lineHeight="22px"
          my="16px"
        >
          {address?.address}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "16px" }}>
        <Button
          sx={{ bgcolor: "color.bgNeutral300", textTransform: "capitalize" }}
          fullWidth
        >
          <EditIcon /> &nbsp; Chỉnh sửa
        </Button>
        <Button
          sx={{
            bgcolor: (theme) => `${theme.palette.error.main}1A`,
            textTransform: "capitalize",
            color: "error.main",
          }}
          fullWidth
        >
          <DeleteIcon /> &nbsp; Xóa bỏ
        </Button>
      </Box>
    </Box>
  );
};

export default OrderAddressItem;
