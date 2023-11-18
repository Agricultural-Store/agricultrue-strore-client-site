import CustomizedCheckbox from "@/components/shared/CustomizedCheckbox";
import SearchBox from "@/components/shared/SearchBox";
import useMedia from "@/hooks/shared/useMedia";
import { ProductFilterParams } from "@/types/product";
import { Box, Typography, Divider } from "@mui/material";
import React, { ChangeEvent, Dispatch, useState } from "react";

type Props = {
  setOptions: Dispatch<React.SetStateAction<ProductFilterParams>>;
  options: ProductFilterParams;
};

const ProductFilter = ({ setOptions, options }: Props) => {
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

  const { media } = useMedia(1000);
  const { media: mediaMobile } = useMedia();

  const handleChangeSearchValue = (value: string) => {
    setOptions((pre) => ({
      ...pre,
      searchValue: value,
    }));
  };

  const handleChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
    let list = options.category || [];

    const { value, checked } = e.target;

    if (typeof list === "number") {
      list = [list];
    }

    if (!Array.isArray(options.category) && options.category) {
      list = (options.category as string).toString().split(",");
    }

    if (checked) {
      const checkedList = [...list, value];
      setOptions((pre) => ({
        ...pre,
        category: checkedList,
      }));
    } else {
      let checkedList: string[] = list;
      const index = checkedList.indexOf(value);

      if (index > -1) {
        checkedList = [...list.slice(0, index), ...list.slice(index + 1)];
      }

      setOptions((pre) => ({
        ...pre,
        category: checkedList,
      }));
    }
  };

  if (mediaMobile) {
    return (
      <>
        <Box>
          <Typography sx={{ fontSize: "18px", fontWeight: 600, mb: "24px" }}>
            Tìm kiếm
          </Typography>
          <SearchBox
            placeholder="Điền yêu cầu của bạn"
            fullWidth
            onChange={handleChangeSearchValue}
            value={options.searchValue || ""}
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
                    // defaultChecked={
                    onChange={handleChangeCategory}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </>
    );
  }

  return (
    <>
      <Box>
        <Typography sx={{ fontSize: "20px", fontWeight: 600, mb: "24px" }}>
          Tìm kiếm
        </Typography>
        <SearchBox
          placeholder="Điền yêu cầu của bạn"
          onChange={handleChangeSearchValue}
          defaultValue={options.searchValue || ""}
        />
      </Box>
      {!media && <Divider sx={{ my: "24px" }} />}
      <Box>
        <Typography
          mb="24px"
          fontSize="20px"
          fontWeight={600}
          mt={media ? "24px" : undefined}
        >
          Loại sản phẩm
        </Typography>
        <Box
          sx={[
            media && {
              width: "100%",
              overflowX: "scroll",
              "::-webkit-scrollbar": {
                height: "3px",
                display: "none",
              },
            },
          ]}
        >
          <Box
            display={media ? "flex" : "block"}
            gap="30px"
            width="200%"
            alignItems="center"
          >
            {categories.map((category) => (
              <Box
                mb="8px"
                key={category.id}
              >
                <CustomizedCheckbox
                  label={category.categoryName}
                  value={category.id}
                  checked={
                    options.category
                      ? (options.category as unknown as string)
                          .toString()
                          .split(",")
                          .includes(category.id.toString())
                      : false
                  }
                  onChange={handleChangeCategory}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductFilter;
