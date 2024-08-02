import React from "react";
import ProductCard from "./product-card";
import { getFilteredItems } from "@/db/postgres/data";

type Props = {
  items_per_page: number;
  current_page: number;
  query: string;
};

export default async function ProductCardList({
  items_per_page,
  current_page,
  query,
}: Props) {
  const products = await getFilteredItems(current_page, items_per_page, query);
  return (
    <ul className="px-3 space-y-4 mb-5">
      {products.map((product) => (
        <li key={product.sku}>
          <ProductCard
            product={{
              title: product.title?.en!,
              sku: product.sku,
              ean: product.ean!,
              desc: product.description?.en!,
            }}
          />
        </li>
      ))}
    </ul>
  );
}
