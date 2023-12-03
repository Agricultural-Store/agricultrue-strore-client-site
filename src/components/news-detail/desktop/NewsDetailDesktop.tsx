import useNewsDetail from "@/hooks/news/useNewsDetail";
import { Box, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";

const NewsDetailDesktop = () => {
  const params = useParams();
  const id = params.id as string;

  const { data } = useNewsDetail(+id);

  return (
    <Box px="48px">
      <Typography
        fontSize="20px"
        fontWeight={500}
      >
        {data?.data.newsCategory}
      </Typography>
      <Typography
        fontSize="28px"
        fontWeight={500}
      >
        {data?.data.newsTitle}
      </Typography>
      <Typography
        fontSize="20px"
        mt="18px"
        color="#141416"
        sx={{ opacity: 0.86 }}
      >
        {new Date(data?.data.publisherDate || "").toLocaleString()}
      </Typography>
      <Box height="48px"></Box>
      <Box
        component="div"
        dangerouslySetInnerHTML={{ __html: data?.data.newsContent || "" }}
      ></Box>
    </Box>
  );
};

export default NewsDetailDesktop;
