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

type Props = {
  product: {
    title: string;
    sku: string;
    ean: string;
    desc: string;
  };
};

export default function ProductCard({ product }: Props) {
  return (
    <Card>
      <CardHeader>
        <b>{product.title}</b>
      </CardHeader>
      <CardContent className="flex gap-4">
        <div className="h-auto w-40">
          <AspectRatio ratio={1 / 1} className="bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
        <div>
          <p>SKU: {product.sku}</p>
          <p>EAN: {product.ean}</p>
          <p className="mt-3 text-ellipsis text-gray-500 font-medium">
            {product.desc}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
