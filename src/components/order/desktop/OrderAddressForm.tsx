import CustomizedAutocomplete from "@/components/shared/CustomizedAutocomplete";
import CustomizedInput from "@/components/shared/CustomizedInput";
import DeleteIcon from "@/components/shared/icons/DeleteIcon";
import SaveIcon from "@/components/shared/icons/SaveIcon";
import { Box, Button } from "@mui/material";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { State, City } from "country-state-city";
import { AutoCompleteOption } from "@/types/components/autocomplete";
import { AddressCreateInput } from "@/types/address";
import useUserAddressCreate from "@/hooks/user/useUserAddressCreate";
import { AppContext } from "@/providers/AppContext";

const states = State.getStatesOfCountry("VN").map((state) => ({
  label: state.name,
  value: state.isoCode,
}));
const OrderAddressForm = () => {
  const [cities, setCities] = useState<AutoCompleteOption[]>([]);
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const [mailError, setMailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [address, setAddress] = useState({
    state: "",
    city: "",
    ward: "",
    street: "",
    home: "",
  });
  const [input, setInput] = useState<AddressCreateInput>({
    address: "",
    customerName: "",
    mail: "",
    phone: "",
  });

  const { setIsLoading } = useContext(AppContext);

  const { trigger } = useUserAddressCreate();

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
  const handleChangePhone = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const regexp = /^[0-9]{0,11}$/;
    const { value } = e.target;
    if (regexp.test(value)) {
      console.log(regexp.test(value));
      setInput((pre) => ({
        ...pre,
        phone: value,
      }));
    }
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

  const handleChangeWard = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAddress((pre) => ({
      ...pre,
      ward: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const mailRegexp =
      /^[A-Za-z\d]{1,}[A-Za-z\d!@#$%^&*()_+-=\[\]{};':"\\|,\.<>\/?]{1,}[A-Za-z\d]{1,}\@[A-Za-z\d]{1,}\.[A-Za-z\d]{1,}$/;
    const phoneRegexp = /^[0-9]{10,11}$/;
    if (!mailRegexp.test(input.mail)) {
      setMailError("Email không hơp lệ");
      return;
    } else {
      setMailError("");
    }

    if (!phoneRegexp.test(input.phone)) {
      setPhoneError("Số điện thoại không hơp lệ");
      return;
    } else {
      setPhoneError("");
    }

    setIsLoading(true);
    trigger(
      {
        body: {
          ...input,
          city: address.city,
          district: address.state,
          commune: address.ward,
        },
      },
      {
        onError: (error) => {
          console.log(error);
          setIsLoading(false);
        },
      },
    ).then((res) => {
      if (res.statusCode === 200) {
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    const _address = Object.values(address).reverse().join(", ");
    setInput((pre) => ({
      ...pre,
      address: _address,
    }));
  }, [address]);

  useEffect(() => {
    const isEmptyAddress = Object.values(address).some((add) => add === "");
    const isEmptyInput = Object.values(input).some((inp) => inp === "");
    if (isEmptyAddress || isEmptyInput) {
      setDisabledSubmit(true);
    } else {
      setDisabledSubmit(false);
    }
  }, [address, input]);

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
        error={!!mailError}
        onChange={handleChangeInput}
      />
      <CustomizedInput
        label="Số điện thoại"
        placeholder="Nhập số điện thoại"
        fullWidth
        name="phone"
        onChange={handleChangePhone}
        error={!!phoneError}
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
        <CustomizedInput
          label="Phường"
          placeholder="Nhập phường"
          fullWidth
          onChange={handleChangeWard}
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
          disabled={disabledSubmit}
          onClick={handleSubmit}
        >
          <SaveIcon /> &nbsp; Lưu
        </Button>
      </Box>
    </Box>
  );
};

export default OrderAddressForm;
