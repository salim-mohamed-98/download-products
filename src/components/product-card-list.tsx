import React from "react";
import ProductCard from "./product-card";
import { selectAllProduct } from "@/db/postgres/data";

type Props = {};

export default async function ProductCardList({}: Props) {
  const products = await selectAllProduct();
  return (
    <ul className="container space-y-4 mb-5">
      {products.map((product) => (
        <li key={product.sku}>
          <ProductCard
            product={{
              title: product.title?.en!,
              sku: product.sku,
              ean: product.ean!,
            }}
          />
        </li>
      ))}
    </ul>
  );
}
