import React from "react";
import ProductCard from "./product-card";

type Props = {};

export default function ProductCardList({}: Props) {
  return (
    <div className="container space-y-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
