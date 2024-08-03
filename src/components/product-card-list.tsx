import React from "react";
import ProductCard from "./product-card";
import { getFilteredItems } from "@/db/postgres/data";
import { ProductImageCarousel } from "./product-image-carousel";
import Image from "next/image";

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
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-4 px-4 overflow-hidden sm:py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <article key={product.sku} className="group text-sm">
              <ProductImageCarousel images={product.images} />
              <h3 className="mt-4 mb-2 font-medium text-gray-900 text-pretty line-clamp-2 trancate hover:line-clamp-none">
                {product.title?.en}
              </h3>
              <p>
                SKU: <span className="text-gray-500 italic">{product.sku}</span>
              </p>
              <p>
                EAN:{" "}
                <span className="mt-2 font-medium text-gray-900">
                  {product.ean}
                </span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

/*
  return (
    <ul className="container flex justify-center flex-wrap gap-7 mb-10">
      {products.map((product) => (
        <li key={product.sku}>
          <ProductCard
            product={{
              title: product.title?.en!,
              sku: product.sku,
              ean: product.ean!,
              desc: product.description?.en!,
              images: product.images,
            }}
          />
        </li>
      ))}
    </ul>
  );
}
*/
