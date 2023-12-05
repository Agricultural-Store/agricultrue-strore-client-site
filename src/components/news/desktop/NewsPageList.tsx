"use client";
import { NewsContext } from "@/providers/NewsContext";
import React, { useContext } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import { useRouter } from "next-intl/client";
import NewsPageItem from "../NewsPageItem";

const NewsPageList = () => {
  const { news } = useContext(NewsContext);
  const router = useRouter();

  const handleClick = (id?: number) => {
    router.push(`/news/${id}`);
  };

  return (
    <>
      <Box
        sx={{
          height: {
            md: "600px",
            xs: "400px",
          },
          position: "relative",
        }}
      >
        <Box
          component="img"
          src="/images/promotion-banner.png"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box
        width={{
          lg: "85%",
          sm: "100%",
        }}
        sx={{
          m: "0 auto",
          paddingX: {
            sm: "0px !important",
            lg: "0px !important",
          },
        }}
      >
        <Box sx={{ p: "64px 48px" }}>
          <Typography
            sx={{ textAlign: "center", fontSize: "28px", mb: "48px", fontWeight: 600 }}
          >
            Bài viết
          </Typography>
          <Divider sx={{ my: "8px" }}></Divider>
          <Grid
            container
            spacing={4}
            rowSpacing={6}
            flexWrap="wrap"
            mt="20px"
          >
            {/* {(isLoading || isValidating) && (
          <Grid
            item
            xs={12}
            textAlign="center"
            display="flex"
            justifyContent="center"
          >
            <CustomizedLoading
              color="green"
              size="small"
            />
          </Grid>
        )} */}

            {news?.length === 0 && (
              <Grid
                item
                xs={12}
                textAlign="center"
                color="color.textNeutral500"
              >
                <FindInPageOutlinedIcon
                  color="inherit"
                  sx={{ fontSize: "60px" }}
                />
                <Typography>Không tìm thấy kết quả nào</Typography>
              </Grid>
            )}

            {news?.map((_news) => (
              <NewsPageItem
                news={_news}
                onClick={handleClick}
                key={_news.id}
              />
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default NewsPageList;
