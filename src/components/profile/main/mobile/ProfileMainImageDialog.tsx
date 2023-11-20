import CloseIcon from "@/components/shared/icons/CloseIcon";
import {
  Dialog,
  DialogContent,
  Box,
  IconButton,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import React from "react";

type Props = {
  open: boolean;
  onOpen: (open: boolean) => void;
  images?: string[];
};

const ProfileMainImageDialog = ({ open, onOpen, images }: Props) => {
  const handleClose = () => {
    onOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="lg"
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
        <Box>
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
              fontSize="14px"
            >
              Thay đổi ảnh nền phần cá nhân.
            </Typography>
          </Box>
          <Grid
            container
            spacing="8px"
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
                  src={v}
                  component="img"
                  width="95px"
                  height="95px"
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
              />
              <label
                htmlFor="image-update-bg"
                style={{
                  borderRadius: "4px",
                  width: "95px",
                  height: "95px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  border: "1px dashed #B1B5C3",
                  cursor: "pointer",
                }}
              >
                <Box
                  component="img"
                  src="/images/add_photo_alternate.svg"
                ></Box>
                <Typography
                  fontSize="10px"
                  lineHeight="20px"
                  mt="4px"
                >
                  Tải ảnh lên ...
                </Typography>
              </label>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            fullWidth
            sx={{ height: "42px" }}
          >
            Lưu thay đổi
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileMainImageDialog;
