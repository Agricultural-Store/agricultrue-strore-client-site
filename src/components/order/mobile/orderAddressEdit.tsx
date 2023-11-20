import CustomizedAutocomplete from "@/components/shared/CustomizedAutocomplete";
import CustomizedInput from "@/components/shared/CustomizedInput";
import ArrowBackIcon from "@/components/shared/icons/ArrowBackIcon";
import { userApi } from "@/config/api-path";
import { useEnqueueSnackbar } from "@/hooks/shared/useEnqueueSnackbar";
import useUserAddressUpdate from "@/hooks/user/useUserAddressUpdate";
import { AppContext } from "@/providers/AppContext";
import { Address, AddressUpdateInput } from "@/types/address";
import { AutoCompleteOption } from "@/types/components/autocomplete";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { City, State } from "country-state-city";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";

const states = State.getStatesOfCountry("VN").map((state) => ({
  label: state.name,
  value: state.isoCode,
}));

type Props = {
  address?: Address;
  open: boolean;
  onOpen: (open: boolean) => void;
};

const OrderAddressEdit = ({ address: addressProps, onOpen, open }: Props) => {
  const [cities, setCities] = useState<AutoCompleteOption[]>([]);
  const [mailError, setMailError] = useState("");
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const [phoneError, setPhoneError] = useState("");
  const [address, setAddress] = useState({
    state: "",
    city: "",
    ward: "",
    street: "",
    home: "",
  });
  const [input, setInput] = useState<AddressUpdateInput>({
    address: "",
    customerName: "",
    mail: "",
    phone: "",
  });
  const [stateOption, setStateOption] = useState<AutoCompleteOption>({
    label: "",
    value: "",
  });

  const { setIsLoading } = useContext(AppContext);

  const [setEnqueue] = useEnqueueSnackbar();

  const { trigger } = useUserAddressUpdate();

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

  const handleClose = () => {
    onOpen(false);
  };

  const handleSubmit = () => {
    const mailRegexp =
      /^[A-Za-z\d]{1,}[A-Za-z\d!@#$%^&*()_+-=\[\]{};':"\\|,\.<>\/?]{1,}[A-Za-z\d]{1,}\@[A-Za-z\d]{1,}\.[A-Za-z\d]{1,}$/;
    const phoneRegexp = /^[0-9]{10,11}$/;
    if (!mailRegexp.test(input?.mail || "")) {
      setMailError("Email không hơp lệ");
      return;
    } else {
      setMailError("");
    }

    if (!phoneRegexp.test(input?.phone || "")) {
      setPhoneError("Số điện thoại không hơp lệ");
      return;
    } else {
      setPhoneError("");
    }

    setIsLoading(true);
    trigger(
      {
        path: userApi.updateAddress(addressProps?.addressId),
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
        setEnqueue("Cập nhật địa chỉ thành công", "success");
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
    const _state = states.find((state) => state.label === addressProps?.ward);
    setStateOption({
      label: _state?.label || "",
      value: _state?.value || "",
    });

    const options: AutoCompleteOption[] =
      City.getCitiesOfState("VN", _state?.value as string).map((city) => ({
        label: city.name,
        value: city.stateCode,
      })) || [];
    setCities(options);

    setAddress({
      state: addressProps?.ward || "",
      ward: addressProps?.state || "",
      city: addressProps?.city || "",
      home: addressProps?.addressDetail?.split(", ")[0] || "",
      street: addressProps?.addressDetail?.split(", ")[1] || "",
    });
    setInput({
      address: "",
      customerName: addressProps?.customerName || "",
      phone: addressProps?.phone || "",
      mail: addressProps?.mail || "",
    });
  }, [addressProps]);

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
      component="div"
      sx={{
        position: "fixed",
        top: "65px",
        right: 0,
        bgcolor: "white",
        width: "100%",
        height: "calc(100vh)",
        zIndex: 10,
        px: "16px",
        display: open ? "block" : "none",
      }}
      width={"100vw"}
    >
      <Box
        sx={{
          pt: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          mb: "24px",
        }}
      >
        <IconButton
          sx={{ color: "color.textBlack" }}
          onClick={handleClose}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="h2"
          textAlign="center"
          width="100%"
        >
          Chỉnh sửa địa chỉ
        </Typography>
        <Box
          height="40px"
          width="40px"
        ></Box>
      </Box>
      <Stack gap="24px">
        <CustomizedInput
          label="Họ tên"
          placeholder="Nhập họ tên"
          fullWidth
          name="customerName"
          value={input.customerName}
          onChange={handleChangeInput}
          size="small"
        />
        <CustomizedInput
          label="Email"
          placeholder="Nhập email"
          fullWidth
          name="mail"
          value={input.mail}
          error={!!mailError}
          onChange={handleChangeInput}
          size="small"
        />
        <CustomizedInput
          label="Số điện thoại"
          placeholder="Nhập số điện thoại"
          fullWidth
          name="phone"
          onChange={handleChangePhone}
          error={!!phoneError}
          value={input.phone}
          size="small"
        />
        <CustomizedAutocomplete
          options={states}
          onChange={handleChangeState}
          label="Thành phố"
          value={stateOption}
          size="small"
          placeholder="Chọn thành phố"
        />
        <CustomizedAutocomplete
          options={cities}
          label="Quận/huyện"
          placeholder="Chọn quận/huyện"
          fullWidth
          value={{ label: address.city, value: address.city }}
          size="small"
          onChange={handleChangeCity}
        />
        <CustomizedInput
          label="Phường"
          placeholder="Nhập phường"
          fullWidth
          value={address.ward}
          onChange={handleChangeWard}
          size="small"
        />
        <CustomizedInput
          label="Số nhà"
          placeholder="Nhập số nhà"
          fullWidth
          name="home"
          value={address.home}
          onChange={handleChangeAddressInput}
          size="small"
        />
        <CustomizedInput
          label="Đường"
          placeholder="Nhập tên đường"
          fullWidth
          name="street"
          value={address.street}
          onChange={handleChangeAddressInput}
          size="small"
        />
      </Stack>
      <Button
        sx={{
          // bgcolor: (theme) => `${theme.palette.color?.bgPrimary}1A`,
          textTransform: "capitalize",
          mt: "24px",
          ":hover": {
            bgcolor: (theme) => `${theme.palette.color?.bgPrimary}`,
          },
        }}
        fullWidth
        disabled={disabledSubmit}
        onClick={handleSubmit}
        variant="contained"
      >
        Lưu địa chỉ
      </Button>
    </Box>
  );
};

export default OrderAddressEdit;
