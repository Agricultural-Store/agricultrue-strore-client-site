import {
  Dialog,
  DialogContent,
  Box,
  IconButton,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import CloseIcon from "../icons/CloseIcon";

const CustomizedDeleteDialog = () => {
  return (
    <Dialog
      open
      componentsProps={{
        backdrop: {
          sx: {
            backdropFilter: "blur(4px)",
            backgroundColor: "rgba(20, 20, 22, 0.64)",
          },
        },
      }}
      PaperProps={{
        sx: {
          overflow: "visible",
          position: "relative",
        },
      }}
    >
      <DialogContent sx={{ p: 0, overflowY: "auto", borderRadius: "8px" }}>
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
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Box>
        <Stack
          width="450px"
          height="342px"
          display="flex"
          alignItems="center"
          p="24px"
          justifyContent="space-between"
        >
          <Stack
            display="flex"
            alignItems="center"
          >
            <Box
              component="img"
              src="/images/delete-icon.svg"
              m="0 auto"
              mb="24px"
            ></Box>
            <Typography
              fontSize="20px"
              fontWeight={500}
              lineHeight="30px"
              mb="8px"
            >
              Xoá sản phẩm
            </Typography>
            <Typography
              fontSize="16px"
              textAlign="center"
              sx={{ opacity: 0.64 }}
            >
              Sau khi xoá, sản phẩm sẽ không được hoàn tác và thực hiện việc mua bán.
            </Typography>
          </Stack>
          <Button
            variant="contained"
            color="error"
            fullWidth
          >
            Xóa
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default CustomizedDeleteDialog;
