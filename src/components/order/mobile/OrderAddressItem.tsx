import CustomizedCheckbox from "@/components/shared/CustomizedCheckbox";
import DeleteIcon from "@/components/shared/icons/DeleteIcon";
import EditIcon from "@/components/shared/icons/EditIcon";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

type Props = {
  id: number;
  currentId?: number;
  onChecked: (id: number) => void;
};

const OrderAddressItem = ({ id, onChecked, currentId }: Props) => {
  const handleChange = () => {
    onChecked(id);
  };
  return (
    <Box
      bgcolor="color.bgNeutral200"
      p="24px"
      borderRadius="4px"
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography
          fontSize="18px"
          fontWeight={700}
          lineHeight="27px"
        >
          Vũ Hoàng Hiệp
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
        Khoa Công nghệ phần mềm, Trường Công nghệ Thông tin & Truyền thông, Trường Đại học
        Cần Thơ
      </Typography>
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
