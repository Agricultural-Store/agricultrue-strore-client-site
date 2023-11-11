import { Box, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import CustomizedSelect from "@/components/shared/CustomizedSelect";
import { OptionType, SortOrderEnum } from "@/types/shared";
import CustomizedPagination from "@/components/shared/CustomizedPagination";
import { useRouter } from "next-intl/client";
import useProductList from "@/hooks/product/useProductList";
import { Product, ProductFilterParams } from "@/types/product";
import useMedia from "@/hooks/shared/useMedia";
import ProductFilter from "../ProductFilter";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import { AppContext } from "@/providers/AppContext";
import { CartContext } from "@/providers/CartContext";
import CustomizedLoading from "@/components/shared/CustomizedLoading";

const menuItems: OptionType[] = [
  {
    value: "popular",
    label: "Sản phẩm phổ biến",
  },
  {
    value: "ascPrice",
    label: "Giá từ thấp đến cao",
  },
  {
    value: "descPrice",
    label: "Giá từ cao đến thấp",
  },
  {
    value: "alphabet",
    label: "Theo thứ tự chữ cái (A-Z)",
  },
];

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const { setOpenCart } = useContext(AppContext);
  const { setProduct } = useContext(CartContext);

  const router = useRouter();

  const [options, setOptions] = useState<ProductFilterParams>({
    limit: 10,
    offset: 0,
    searchField: "productName",
    sortField: "productPrice",
    category: [],
    searchValue: "",
  });
  const { media } = useMedia(1000);

  const { data, isLoading, isValidating } = useProductList(options);

  const pageSize = data?.filter?.limit || 30;
  const currentPage = Math.floor(data?.filter?.offset ?? 0 / pageSize);

  const handleClick = (id?: number) => {
    router.push(`/product/${id}`);
  };

  const handleButtonClick = (product?: Product) => {
    if (product)
      setProduct?.({
        ...product,
        productCount: 1,
      });
    setOpenCart(true);
  };

  const handleChangePage = (page: number) => {
    setOptions((pre) => ({
      ...pre,
      offset: (page - 1) * pageSize,
    }));
  };

  const handleChange = (value?: string) => {
    let sortField = options.searchField;
    let sortBy: SortOrderEnum;
    switch (value) {
      case "popular": {
        sortField = "productPrice";
        sortBy = SortOrderEnum.DESC;
        break;
      }
      case "descPrice": {
        sortField = "productPrice";
        sortBy = SortOrderEnum.DESC;
        break;
      }
      case "ascPrice": {
        sortField = "productPrice";
        sortBy = SortOrderEnum.ASC;
        break;
      }
      default: {
        sortField = "productName";
        sortBy = SortOrderEnum.DESC;
      }
    }
    setOptions((pre) => ({
      ...pre,
      sortField: sortField,
      sortOrder: sortBy,
    }));
  };

  useEffect(() => {
    if (data?.data) {
      setProducts(data.data);
    }
  }, [data]);

  return (
    <Box sx={{ p: "64px 0px", display: media ? "block" : "flex" }}>
      <Box sx={{ mr: "48px", width: media ? "100%" : "300px" }}>
        <ProductFilter
          options={options}
          setOptions={setOptions}
        />
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
          <CustomizedSelect
            menuItems={menuItems}
            value={"popular"}
            onChange={handleChange}
          />
        </Box>
        <Grid
          container
          spacing={3}
        >
          {(isLoading || isValidating) && (
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
          )}
          {!isLoading &&
            !isValidating &&
            products.map((product) => (
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
                  onButtonClick={handleButtonClick}
                />
              </Grid>
            ))}
          {!isLoading && !isValidating && products.length == 0 && (
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
