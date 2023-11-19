import React from "react";
import ProfileOrderProductItem from "./ProfileOrderProductItem";
import { Product } from "@/types/product";

type Props = {
  products?: Product[];
};

const ProfileOrderProductList = ({ products }: Props) => {
  return (
    <>
      {products?.map((product) => (
        <ProfileOrderProductItem
          key={product.id}
          product={product}
        />
      ))}
    </>
  );
};

export default ProfileOrderProductList;
