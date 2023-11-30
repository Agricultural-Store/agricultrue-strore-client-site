import CustomizedAutocomplete from "@/components/shared/CustomizedAutocomplete";
import CustomizedDatePicker from "@/components/shared/CustomizedDatePicker";
import CustomizedInput from "@/components/shared/CustomizedInput";
import CloseIcon from "@/components/shared/icons/CloseIcon";
import { userApi } from "@/config/api-path";
import { useEnqueueSnackbar } from "@/hooks/shared/useEnqueueSnackbar";
import useUserProfileUpdate from "@/hooks/user/useUserProfileUpdate";
import { AppContext } from "@/providers/AppContext";
import { AutoCompleteOption } from "@/types/components/autocomplete";
import { UserProfile, UserUpdateInput } from "@/types/user";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { City, State } from "country-state-city";
import dayjs from "dayjs";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";

const states = State.getStatesOfCountry("VN").map((state) => ({
  label: state.name,
  value: state.isoCode,
}));

type Props = {
  user?: UserProfile;
  open: boolean;
  onOpen: (open: boolean) => void;
};

const ProfileMainEdit = ({ user, onOpen, open }: Props) => {
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
  const [input, setInput] = useState<UserUpdateInput>({
    address: "",
    name: "",
    mail: "",
    phone: "",
    birthday: "",
    country: "Việt Nam",
  });
  const [stateOption, setStateOption] = useState<AutoCompleteOption>({
    label: "",
    value: "",
  });

  const { setIsLoading } = useContext(AppContext);

  const [setEnqueue] = useEnqueueSnackbar();

  const { trigger } = useUserProfileUpdate();

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

  const handleChangeDOB = (value?: dayjs.Dayjs | null) => {
    if (value)
      setInput((pre) => ({
        ...pre,
        birthday: value.toISOString(),
      }));
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
        path: userApi.updateProfile,
        body: {
          ...input,
          city: address.state,
          district: address.city,
          commune: address.ward,
          detailAddress: input.address,
          country: "Viêt Name",
          email: input.mail,
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
        setEnqueue("Cập nhật thông tin thành công", "success");
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
    const _state = states.find((state) => state.label === user?.province);
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
      state: user?.province || "",
      ward: user?.commune || "",
      city: user?.district || "",
      home: user?.addressDetail?.split(", ")[0] || "",
      street: user?.addressDetail?.split(", ")[1] || "",
    });
    setInput({
      address: "",
      name: user?.name || "",
      phone: user?.phone || "",
      mail: user?.mail || "",
      birthday: user?.birthday || "",
    });
  }, [user]);

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
    <Dialog
      open={open}
      maxWidth="lg"
      PaperProps={{
        sx: {
          p: "16px 24px",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          p: 0,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          fontSize="20px"
          fontWeight={500}
        >
          Chỉnh sửa địa chỉ
        </Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ width: "650px", p: 0, minHeight: "300px" }}>
        <Box height="32px"></Box>
        <Stack gap="24px">
          <CustomizedInput
            label="Họ tên"
            placeholder="Nhập họ tên"
            fullWidth
            name="name"
            value={input.name}
            onChange={handleChangeInput}
            size="small"
          />
          <CustomizedDatePicker
            label="Ngày sinh"
            onChange={handleChangeDOB}
            value={dayjs(input.birthday)}
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
            label="Đường"
            placeholder="Nhập tên đường"
            fullWidth
            name="street"
            value={address.street}
            onChange={handleChangeAddressInput}
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
        </Stack>
      </DialogContent>
      <DialogActions sx={{ p: 0, mt: "32px" }}>
        <Button
          sx={{
            // bgcolor: (theme) => `${theme.palette.color?.bgPrimary}1A`,
            textTransform: "capitalize",
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
      </DialogActions>
    </Dialog>
  );
};

export default ProfileMainEdit;
