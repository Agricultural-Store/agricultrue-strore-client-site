import CloseIcon from "@/components/shared/icons/CloseIcon";
import useImageImport from "@/hooks/shared/useImageImport";
import useUserProfileImageUpdate from "@/hooks/user/useUserProfileImageUpdate";
import { AppContext } from "@/providers/AppContext";
import {
  Dialog,
  DialogContent,
  Box,
  IconButton,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import React, { ChangeEvent, useContext, useState } from "react";

type Props = {
  open: boolean;
  onOpen: (open: boolean) => void;
  images?: string[];
};

const ProfileMainImageDialog = ({ open, onOpen, images }: Props) => {
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");

  const { setIsLoading } = useContext(AppContext);

  const { trigger } = useImageImport();
  const { trigger: imageTrigger } = useUserProfileImageUpdate();
  const handleClose = () => {
    onOpen(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setUrl(objectUrl);
      const formData = new FormData();
      formData.append("file", file as unknown as string);
      trigger({
        body: formData,
      }).then((res) => {
        console.log(res);
        if (res.statusCode === 200) {
          setImage?.(res.data.filename || "");
        }
      });
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);
    imageTrigger(
      {
        body: {
          image,
        },
      },
      {
        onError: () => {
          setIsLoading(false);
        },
      },
    ).then((res) => {
      if (res.statusCode === 200) handleClose();
      setIsLoading(false);
    });
  };

  return (
    <Dialog
      open={open}
      maxWidth="lg"
      onClose={handleClose}
      PaperProps={{
        sx: {
          overflow: "visible",
          position: "relative",
        },
      }}
    >
      <DialogContent sx={{ p: "24px", overflowY: "auto", borderRadius: "8px" }}>
        <Box
          sx={{
            position: "absolute",
            bgcolor: "color.bgWhite",
            borderRadius: "50%",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            top: 0,
            right: 0,
            transform: "translate(50%, -50%)",
          }}
        >
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          width="500px"
          height="500px"
        >
          <Box height="67px">
            <Typography
              variant="h3"
              lineHeight="30px"
              textAlign="center"
            >
              Đổi ảnh nền
            </Typography>
            <Typography
              lineHeight="30px"
              textAlign="center"
            >
              Thay đổi ảnh nền phần cá nhân.
            </Typography>
          </Box>
          <Grid
            container
            spacing="16px"
            py="24px"
          >
            {images?.map((v, index) => (
              <Grid
                item
                xs={4}
                key={index}
                display="flex"
                justifyContent="center"
              >
                <Box
                  borderRadius="4px"
                  // bgcolor="color.bgPrimary"
                  component="img"
                  src={v}
                  width="100%"
                  height="156px"
                ></Box>
              </Grid>
            ))}
            <Grid
              item
              xs={4}
              display="flex"
              justifyContent="center"
            >
              <input
                type="file"
                id="image-update-bg"
                accept="image/*"
                style={{ visibility: "hidden", display: "none" }}
                onChange={handleChange}
              />
              <label
                htmlFor="image-update-bg"
                style={{
                  borderRadius: "4px",
                  width: "100%",
                  height: "156px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  border: "1px dashed #B1B5C3",
                  cursor: "pointer",
                }}
              >
                {url ? (
                  <Box
                    component="img"
                    width="100%"
                    height="100%"
                    overflow="hidden"
                    sx={{ objectFit: "cover" }}
                    src={url}
                  ></Box>
                ) : (
                  <>
                    <Box
                      component="img"
                      src="/images/add_photo_alternate.svg"
                    ></Box>
                    <Typography
                      fontSize="12px"
                      lineHeight="20px"
                      mt="4px"
                    >
                      Tải ảnh lên ...
                    </Typography>
                  </>
                )}
              </label>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            fullWidth
            sx={{ height: "42px" }}
            onClick={handleSubmit}
          >
            Lưu thay đổi
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileMainImageDialog;
