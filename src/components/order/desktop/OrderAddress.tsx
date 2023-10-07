import { Box, Collapse, Typography } from "@mui/material";
import React, { useState } from "react";
import OrderAddressItem from "./OrderAddressItem";
import ArrowUpIcon from "@/components/shared/icons/ArrowUpIcon";
import OrderAddressForm from "./OrderAddressForm";
import CustomizedInput from "@/components/shared/CustomizedInput";

const OrderAddress = () => {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addressCurrentId, setAddressCurrentId] = useState(1);

  const handleToggleOrderAddress = () => {
    setShowAddressForm((pre) => !pre);
  };

  const handleAddressChecked = (id: number) => {
    setAddressCurrentId(id);
  };

  return (
    <Box my="24px">
      <Typography
        variant="h3"
        lineHeight="30px"
        mb="4px"
      >
        Chọn địa chỉ giao hàng
      </Typography>
      <Typography
        fontSize="14px"
        fontStyle="italic"
        lineHeight="25px"
        color="color.textNeutral600"
      >
        Địa chỉ bạn muốn sử dụng có hiển thị bên dưới không? Nếu vậy, hãy nhấp vào nút
        &quot;Gửi đến địa chỉ này&quot; tương ứng. Hoặc bạn có thể nhập một địa chỉ giao
        hàng mới.
      </Typography>
      <Box sx={{ overflowX: "scroll" }}>
        <Box
          my="24px"
          display="flex"
          // flexWrap="wrap"
          gap="16px"
        >
          <OrderAddressItem
            id={1}
            currentId={addressCurrentId}
            onChecked={handleAddressChecked}
          />
          <OrderAddressItem
            id={2}
            currentId={addressCurrentId}
            onChecked={handleAddressChecked}
          />
          <OrderAddressItem
            id={3}
            currentId={addressCurrentId}
            onChecked={handleAddressChecked}
          />
          <OrderAddressItem
            id={4}
            currentId={addressCurrentId}
            onChecked={handleAddressChecked}
          />
          <OrderAddressItem
            id={5}
            currentId={addressCurrentId}
            onChecked={handleAddressChecked}
          />
        </Box>
      </Box>
      <Box mt="20px">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
          component="div"
          onClick={handleToggleOrderAddress}
        >
          <Typography variant="h3">Thêm địa chỉ giao hàng</Typography>
          <Box
            sx={{
              transform: `rotateZ(${showAddressForm ? 0 : 180}deg)`,
              transition: "transform .4s",
              transformOrigin: "center",
              width: "24px",
              height: "24px",
            }}
          >
            <ArrowUpIcon />
          </Box>
        </Box>
        <Collapse in={showAddressForm}>
          <OrderAddressForm />
        </Collapse>
        {!showAddressForm && (
          <Typography
            fontSize="14px"
            fontStyle="italic"
            lineHeight="25px"
            my="16px"
            color="color.textNeutral400"
          >
            Thêm vào một địa chỉ giao hàng mới, điền tất cả vào phiếu thông tin để cập
            nhật địa chỉ giao hàng
          </Typography>
        )}
        <Typography
          variant="h3"
          mb="32px"
        >
          Thông tin bổ sung
        </Typography>
        <CustomizedInput
          multiline
          rows={5}
          fullWidth
          label="Lời nhắn"
          placeholder="Ghi chú về thông tin xuất hoá đơn, thông tin bổ sung,..."
        />
        <Typography
          fontSize="14px"
          fontStyle="italic"
          color="color.textNeutral400"
          my="12px"
        >
          Bằng cách cung cấp số điện thoại của mình, bạn đồng ý nhận các ưu đãi và lời
          nhắc bằng tin nhắn văn bản
        </Typography>
      </Box>
    </Box>
  );
};

export default OrderAddress;
