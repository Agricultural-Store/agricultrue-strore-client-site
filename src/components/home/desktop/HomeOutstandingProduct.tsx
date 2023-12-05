import ProductItem from "@/components/product/ProductItem";
import NextIcon from "@/components/shared/icons/NextIcon";
import useProductList from "@/hooks/product/useProductList";
import { AppContext } from "@/providers/AppContext";
import { CartContext } from "@/providers/CartContext";
import { Product } from "@/types/product";
import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Variants, motion } from "framer-motion";
import { useRouter } from "next-intl/client";
import React, { useContext, useEffect, useState } from "react";

const opacityVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
      delay: 0.25,
    },
  },
};

const HomeOutstandingProduct = () => {
  const [slides, setSlides] = useState(4);

  const { setOpenCart } = useContext(AppContext);
  const { setProduct } = useContext(CartContext);

  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesXs = useMediaQuery(theme.breakpoints.up("xs"));
  const matchesLg = useMediaQuery(theme.breakpoints.up("lg"));
  const router = useRouter();

  const { data } = useProductList({
    limit: 4,
    offset: 0,
  });

  const handleClick = () => {
    router.push("/product");
  };

  const handleProductClick = (id?: number) => {
    router.push(`/product/${id}`);
  };

  const handleButtonClick = (product?: Product) => {
    if (product)
      setProduct?.({
        ...product,
        productCount: 1,
        isCombo: false,
      });
    setOpenCart(true);
  };

  useEffect(() => {
    [matchesXs, matchesSm, matchesMd, matchesLg].forEach((value, index) => {
      if (value) {
        setSlides(index + 1);
      }
    });
  }, [matchesLg, matchesMd, matchesSm, matchesXs]);

  console.log(data);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        mt: "64px",
        px: "48px",
      }}
    >
      <Typography
        sx={{
          fontSize: {
            lg: "28px",
            sm: "24px",
          },
          lineHeight: "42px",
          fontWeight: 600,
        }}
      >
        Sản phẩm nổi bật
      </Typography>
      <Typography
        sx={{
          width: "70%",
          m: "0 auto",
          textAlign: "center",
          my: "16px",
          fontSize: {
            lg: "16px",
            sm: "14px",
          },
        }}
      >
        Đồng Bằng Sông Cửu Long, với đất đai màu mỡ và nguồn nước từ hệ thống sông ngòi
        chảy qua, đã tạo ra những giống gạo nổi tiếng không chỉ trong nước mà còn trên thị
        trường quốc tế.
      </Typography>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        style={{ width: "100%" }}
      >
        <motion.div variants={opacityVariants}>
          <Grid
            container
            py="48px"
            spacing="24px"
            justifyContent="space-evenly"
          >
            {data?.data.splice(0, slides).map((product, index) => (
              <Grid
                item
                key={index}
                xs={12}
                sm={5}
                md={4}
                lg={3}
              >
                <ProductItem
                  product={product}
                  onButtonClick={handleButtonClick}
                  onClick={handleProductClick}
                />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="text"
              onClick={handleClick}
              sx={{ display: "flex", alignItems: "center", textTransform: "capitalize" }}
            >
              <Box
                sx={{
                  fontSize: {
                    lg: "16px",
                    xs: "14px",
                  },
                  paddingRight: "8px",
                  textTransform: "capitalize",
                }}
              >
                Xem tất cả
              </Box>
              <NextIcon />
            </Button>
          </Box>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default HomeOutstandingProduct;
