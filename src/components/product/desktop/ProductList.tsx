import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import CustomizedSelect from "@/components/shared/CustomizedSelect";
import { OptionType } from "@/types/shared";
import CustomizedPagination from "@/components/shared/CustomizedPagination";
import { useRouter } from "next-intl/client";
import useProductList from "@/hooks/product/useProductList";
import useQueryParams from "@/hooks/shared/useQueryParams";
import { Product, ProductFilterParams } from "@/types/product";
import useMedia from "@/hooks/shared/useMedia";
import ProductFilter from "../ProductFilter";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
const menuItems: OptionType[] = [
  {
    value: 1,
    label: "Sản phẩm phổ biến",
  },
  {
    value: 2,
    label: "Giá từ thấp đến cao",
  },
  {
    value: 3,
    label: "Giá từ cao đến thấp",
  },
  {
    value: 3,
    label: "Theo thứ tự chữ cái (A-Z)",
  },
];

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const router = useRouter();

  const [options, setOptions] = useQueryParams<ProductFilterParams>({
    limit: 10,
    offset: 0,
    searchField: "productName",
  });
  const { media } = useMedia(1000);

  const { data } = useProductList(options);

  const pageSize = data?.filter?.limit || 30;
  const currentPage = Math.floor(data?.filter?.offset ?? 0 / pageSize);

  const handleClick = (id?: number) => {
    router.push(`/product/${id}`);
  };

  const handleChangePage = (page: number) => {
    setOptions({
      offset: (page - 1) * pageSize,
    });
  };

  useEffect(() => {
    if (data?.data) {
      setProducts(data.data);
    }
  }, [data]);

  return (
    <Box sx={{ p: "64px 0px", display: media ? "block" : "flex" }}>
      <Box sx={{ mr: "48px", width: media ? "100%" : "300px" }}>
        <ProductFilter />
      </Box>
      <Box
        sx={{
          width: media ? "100%" : "calc(100% - 300px)",
          mt: media ? "24px" : undefined,
        }}
      >
        <Box
          sx={{
            mb: "48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "28px", fontWeight: "bold" }}>Gạo Dẻo</Typography>
          <CustomizedSelect menuItems={menuItems} />
        </Box>
        <Grid
          container
          spacing={3}
        >
          {products.map((product) => (
            <Grid
              item
              key={product.id}
              xs={12}
              sm={6}
              md={4}
            >
              <ProductItem
                product={product}
                onClick={handleClick}
              />
            </Grid>
          ))}
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
        </Grid>
        <CustomizedPagination
          sx={{ mt: "48px" }}
          itemCount={data?.total}
          rowPerPage={pageSize}
          onPageChange={handleChangePage}
          page={currentPage}
        />
      </Box>
    </Box>
  );
};

export default ProductList;
