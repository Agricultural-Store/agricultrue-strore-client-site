"use client";
import React from "react";
import NewsListDesktop from "./desktop/NewsList";
import useMedia from "@/hooks/shared/useMedia";
import NewsListMobile from "./mobile/NewsList";

const News = () => {
  const { media } = useMedia();
  if (media) return <NewsListMobile />;

  return <NewsListDesktop />;
};

export default News;
