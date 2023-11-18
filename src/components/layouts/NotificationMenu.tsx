import { IconButton, Menu, Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomizedInput from "../shared/CustomizedInput";
import MuiSearchIcon from "@mui/icons-material/Search";
import SearchItem from "./SearchItem";
import useProductList from "@/hooks/product/useProductList";
import CustomizedLoading from "../shared/CustomizedLoading";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import NotificationIcon from "../shared/icons/NotificationIcon";

const NotificationMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [keyword, setKeyword] = useState("");
  const open = Boolean(anchorEl);

  const { data, isLoading, isValidating } = useProductList({
    limit: 5,
    offset: 0,
    searchField: "productName",
    searchValue: keyword,
  });

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ height: "40px", width: "40px" }}
      >
        <NotificationIcon />
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        slotProps={{
          paper: {
            sx: {
              // bgcolor: "red",
              boxShadow: "-2px 0px 36px 0px rgba(0, 0, 0, 0.08)",
              "::-webkit-scrollbar": {
                display: "none",
              },
            },
          },
        }}
      >
        <Box
          width="300px"
          height="300px"
          py="8px"
          px="16px"
        >
          <CustomizedInput
            size="small"
            value={keyword}
            fullWidth
            placeholder="Nhập tên sản phẩm"
            onChange={(e) => setKeyword(e.target.value)}
            endAdornment={<MuiSearchIcon color="primary" />}
          />
          <Divider sx={{ my: "16px" }}></Divider>
          <Box>
            {(isLoading || isValidating) && (
              <Box
                display="flex"
                justifyContent="center"
              >
                <CustomizedLoading
                  color="green"
                  size="small"
                />
              </Box>
            )}

            {!isLoading &&
              !isValidating &&
              data?.data.map((product, index, arr) => (
                <React.Fragment key={product.id}>
                  <SearchItem
                    data={product}
                    setAnchorEl={setAnchorEl}
                  />
                  {arr.length !== index + 1 && (
                    <Divider
                      variant="middle"
                      sx={{ my: "8px" }}
                    ></Divider>
                  )}
                </React.Fragment>
              ))}
            {!isLoading && !isValidating && data?.data.length == 0 && (
              <Box
                textAlign="center"
                color="color.textNeutral500"
              >
                <FindInPageOutlinedIcon
                  color="inherit"
                  sx={{ fontSize: "48px" }}
                />
                <Typography fontSize="14px">Không tìm thấy kết quả nào</Typography>
              </Box>
            )}

            <Box height="16px"></Box>
          </Box>
        </Box>
      </Menu>
    </div>
  );
};

export default NotificationMenu;
