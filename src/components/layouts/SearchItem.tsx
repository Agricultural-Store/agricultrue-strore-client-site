import { Product } from "@/types/product";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next-intl/client";
import React from "react";

type Props = {
  data?: Product;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
};

const SearchItem = ({ data, setAnchorEl }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    setAnchorEl(null);
    router.push(`/product/${data?.id}`);
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      gap="16px"
      my="8px"
      py="8px"
      px="6px"
      onClick={handleClick}
      sx={{
        cursor: "pointer",
        transition: ".25s",
        borderRadius: "5px",
        ":hover": {
          bgcolor: (theme) => theme.palette.primary.main + "1A",
        },
      }}
    >
      <Box
        component="img"
        src={data?.productImage || ""}
        sx={{ width: "40px", height: "40px", borderRadius: "5px" }}
      ></Box>
      <Box>
        <Typography>{data?.productName}</Typography>
        <Typography
          fontSize="12px"
          sx={{ opacity: 0.68 }}
        >
          {(data?.productPrice || 0).toLocaleString()}đ
        </Typography>
      </Box>
    </Box>
  );
};

export default SearchItem;
