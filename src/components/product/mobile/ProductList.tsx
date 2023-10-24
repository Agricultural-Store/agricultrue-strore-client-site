import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import CustomizedSelect from "@/components/shared/CustomizedSelect";
import { OptionType } from "@/types/shared";
import CustomizedPagination from "@/components/shared/CustomizedPagination";
import { useRouter } from "next-intl/client";
import { Product, ProductFilterParams } from "@/types/product";
import useProductList from "@/hooks/product/useProductList";
import useQueryParams from "@/hooks/shared/useQueryParams";
import ProductFilter from "../ProductFilter";

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
    label: "Giá từ theo thứ tự chữ cái (A-Z)",
  },
];

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const router = useRouter();

  const [options, setOptions] = useQueryParams<ProductFilterParams>({
    limit: 10,
    offset: 0,
  });

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
    <Box sx={{ p: "48px 16px" }}>
      <Box>
        <ProductFilter />
      </Box>
      <Box>
        <Box
          sx={{
            mb: "48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "34px",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>Gạo Dẻo</Typography>
          <CustomizedSelect
            menuItems={menuItems}
            width="120px"
          />
        </Box>
        <Grid
          container
          spacing={3}
        >
          {products?.map((product) => (
            <Grid
              item
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <ProductItem
                product={product}
                onClick={handleClick}
              />
            </Grid>
          ))}
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
