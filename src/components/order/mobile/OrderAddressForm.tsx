import CustomizedAutocomplete from "@/components/shared/CustomizedAutocomplete";
import CustomizedInput from "@/components/shared/CustomizedInput";
import DeleteIcon from "@/components/shared/icons/DeleteIcon";
import SaveIcon from "@/components/shared/icons/SaveIcon";
import { Box, Button } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { State, City } from "country-state-city";
import { AutoCompleteOption } from "@/types/components/autocomplete";
import { AddressInput } from "@/types/address";

const states = State.getStatesOfCountry("VN").map((state) => ({
  label: state.name,
  value: state.isoCode,
}));

const OrderAddressForm = () => {
  const [cities, setCities] = useState<AutoCompleteOption[]>([]);
  const [address, setAddress] = useState({
    state: "",
    city: "",
    ward: "",
    street: "",
    home: "",
  });
  const [input, setInput] = useState<AddressInput>({
    address: "",
    customerName: "",
    mail: "",
    phone: "",
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInput((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleChangeAddressInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setAddress((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleChangeState = (value: string | AutoCompleteOption | null) => {
    if (typeof value !== "string") {
      if (value && value.value) {
        const options: AutoCompleteOption[] =
          City.getCitiesOfState("VN", value.value as string).map((city) => ({
            label: city.name,
            value: city.stateCode,
          })) || [];
        setCities(options);
        setAddress((pre) => ({
          ...pre,
          state: value.label,
        }));
      }
    }
  };

  const handleChangeCity = (value: string | AutoCompleteOption | null) => {
    if (typeof value !== "string") {
      if (value && value.value) {
        setAddress((pre) => ({
          ...pre,
          city: value.label,
        }));
      }
    }
  };

  const handleSubmit = () => {
    console.log(input);
  };

  useEffect(() => {
    const _address = Object.values(address).reverse().join(", ");
    setInput((pre) => ({
      ...pre,
      address: _address,
    }));
  }, [address]);

  return (
    <Box
      my="40px"
      sx={{ gap: "40px", flexDirection: "column", display: "flex" }}
    >
      <CustomizedInput
        label="Họ tên"
        placeholder="Nhập họ tên"
        fullWidth
        name="customerName"
        value={input.customerName}
        onChange={handleChangeInput}
      />
      <CustomizedInput
        label="Email"
        placeholder="Nhập email"
        fullWidth
        name="mail"
        value={input.mail}
        onChange={handleChangeInput}
      />
      <CustomizedInput
        label="Số điện thoại"
        placeholder="Nhập số điện thoại"
        fullWidth
        name="phone"
        onChange={handleChangeInput}
        value={input.phone}
      />
      <CustomizedAutocomplete
        options={states}
        onChange={handleChangeState}
        label="Thành phố"
        placeholder="Chọn thành phố"
      />
      <Box sx={{ display: "flex", gap: "16px" }}>
        <CustomizedAutocomplete
          options={cities}
          label="Quận/huyện"
          placeholder="Chọn quận/huyện"
          fullWidth
          onChange={handleChangeCity}
        />
        <CustomizedAutocomplete
          options={cities}
          label="Phường"
          placeholder="Chọn phường"
          fullWidth
        />
      </Box>
      <Box sx={{ display: "flex", gap: "16px" }}>
        <CustomizedInput
          label="Số nhà"
          placeholder="Nhập số nhà"
          fullWidth
          name="home"
          onChange={handleChangeAddressInput}
        />
        <CustomizedInput
          label="Đường"
          placeholder="Nhập tên đường"
          fullWidth
          name="street"
          onChange={handleChangeAddressInput}
        />
      </Box>
      <Box sx={{ display: "flex", gap: "16px" }}>
        <Button
          sx={{
            bgcolor: (theme) => `${theme.palette.error.main}1A`,
            textTransform: "capitalize",
            color: "error.main",
            ":hover": {
              bgcolor: (theme) => `${theme.palette.error.main}1A`,
            },
          }}
          fullWidth
        >
          <DeleteIcon /> &nbsp; Xóa bỏ
        </Button>
        <Button
          sx={{
            bgcolor: (theme) => `${theme.palette.color?.bgPrimary}1A`,
            textTransform: "capitalize",
            ":hover": {
              bgcolor: (theme) => `${theme.palette.color?.bgPrimary}1A`,
            },
          }}
          fullWidth
          onClick={handleSubmit}
        >
          <SaveIcon /> &nbsp; Lưu
        </Button>
      </Box>
    </Box>
  );
};

export default OrderAddressForm;
