"use client";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CustomizedPagination from "@/components/shared/CustomizedPagination";
import { useRouter } from "next-intl/client";
import ProductItem from "@/components/product/ProductItem";
import CustomizedInput from "@/components/shared/CustomizedInput";
import SearchGrayIcon from "@/components/shared/icons/SearchGrayIcon";
import useMedia from "@/hooks/shared/useMedia";
import useUserFavoriteList from "@/hooks/user/useUserFavoriteList";
import useQueryParams from "@/hooks/shared/useQueryParams";
import { ListOptions } from "@/types/shared";

const ProfileFavorite = () => {
  const { media } = useMedia();
  const router = useRouter();
  const [option, setOptions] = useQueryParams<ListOptions>({
    limit: 10,
    offset: 0,
  });

  const { data } = useUserFavoriteList(option);

  const pageSize = data?.filters?.limit || 10;
  const currentPage = Math.floor(data?.filters?.offset ?? 0 / pageSize);

  const handleClick = (id?: number) => {
    console.log(id);
    router.push(`/product/${id}`);
  };

  const handleChangePage = (page: number) => {
    setOptions({
      offset: page * pageSize,
    });
  };

  return (
    <Box
      width={media ? "100%" : "calc(100%)"}
      pr={media ? "0" : "24px"}
      pl={media ? "0" : "48px"}
    >
      <Box
        bgcolor="color.bgWhite"
        p={media ? "16px" : "24px"}
      >
        <Box
          sx={{
            mb: media ? "32px" : "48px",
            display: "flex",
            justifyContent: media ? "center" : "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: media ? "18px" : "28px",
              fontWeight: "bold",
            }}
          >
            Gạo Dẻo
          </Typography>
          {!media && (
            <Box>
              <CustomizedInput
                size="small"
                sx={{ width: "203px" }}
                endAdornment={<SearchGrayIcon />}
                placeholder="Tìm kiếm"
              />
            </Box>
          )}
        </Box>
        <Grid
          container
          spacing={3}
        >
          {data?.data.map((product) => (
            <Grid
              item
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              lg={4}
            >
              <ProductItem
                product={product}
                onClick={handleClick}
                isFavorite={true}
              />
            </Grid>
          ))}
        </Grid>
        <CustomizedPagination
          sx={{ mt: "48px" }}
          itemCount={data?.data.length}
          rowPerPage={pageSize}
          page={currentPage}
          onPageChange={handleChangePage}
        />
      </Box>
    </Box>
  );
};

export default ProfileFavorite;
