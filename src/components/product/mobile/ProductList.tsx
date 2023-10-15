import SearchBox from "@/components/shared/SearchBox";
import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import CustomizedSelect from "@/components/shared/CustomizedSelect";
import { OptionType } from "@/types/shared";
import CustomizedPagination from "@/components/shared/CustomizedPagination";
import CustomizedCheckbox from "@/components/shared/CustomizedCheckbox";
import { useRouter } from "next-intl/client";
import { Product, ProductFilterParams } from "@/types/product";
import useProductList from "@/hooks/product/useProductList";
import useQueryParams from "@/hooks/shared/useQueryParams";

const menuItems: OptionType[] = [
  {
    value: 1,
    label: "Sản phẩm phổ biến",
  },
  {
    value: 2,
    label: "Giá từ thấp đến cao",
  },
];

const ProductList = () => {
  const [categories] = useState([
    {
      categoryName: "Gạo Tấm",
      id: 1,
    },
    {
      categoryName: "Gạo Lứt",
      id: 2,
    },
    {
      categoryName: "Gạo Dẻo",
      id: 3,
    },
    {
      categoryName: "Gạo Khô",
      id: 4,
    },
    {
      categoryName: "Gạo Nấu Cơm",
      id: 5,
    },
    {
      categoryName: "Gạo Nấu Xôi, Chè",
      id: 6,
    },
    {
      categoryName: "Gạo Làm Bánh",
      id: 7,
    },
  ]);

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
      <Box sx={{}}>
        <Box>
          <Typography sx={{ fontSize: "18px", fontWeight: 600, mb: "24px" }}>
            Tìm kiếm
          </Typography>
          <SearchBox
            placeholder="Điền yêu cầu của bạn"
            fullWidth
          />
        </Box>
        <Divider sx={{ my: "24px" }} />
        <Box>
          <Typography
            mb="24px"
            fontSize="18px"
            fontWeight={600}
          >
            Loại sản phẩm
          </Typography>
          <Box
            width="100%"
            sx={{
              overflowX: "auto",
              overflowY: "hidden",
              height: "50px",
              "::-webkit-scrollbar": {
                height: "0px",
              },
            }}
          >
            <Box
              display="flex"
              justifyContent="start"
              width="300%"
              sx={{ gap: "10px" }}
            >
              {categories.map((category) => (
                <Box
                  mb="8px"
                  key={category.id}
                >
                  <CustomizedCheckbox
                    label={category.categoryName}
                    value={category.id}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{}}>
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
