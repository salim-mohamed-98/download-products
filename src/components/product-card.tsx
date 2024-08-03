import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/shadcn/ui/card";
import Image from "next/image";
import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import { Locale } from "@/lib/i18n";
import { ProductImageCarousel } from "./product-image-carousel";

type Props = {
  product: {
    title: string;
    sku: string;
    ean: string;
    desc: string;
    images: string[];
  };
};

export default function ProductCard({ product }: Props) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-4 py-5">
        <b className="text-pretty truncate line-clamp-2">{product.title}</b>
      </CardHeader>
      <CardContent className="p-2 w-full">
        {/* <pre>{JSON.stringify(product.images, null, 4)}</pre> */}
        <ProductImageCarousel images={product.images} />
        <div>
          <p>SKU: {product.sku}</p>
          <p>EAN: {product.ean}</p>
        </div>
      </CardContent>
    </Card>
  );
}
