import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/shadcn/ui/card";
import Image from "next/image";
import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";

type Props = {};

export default function ProductCard({}: Props) {
  return (
    <Card>
      <CardHeader>Product name</CardHeader>
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
          <p>SKU</p>
          <p>EAN</p>
          <p>Description (en, nl, fr, de)</p>
          <p>Price std</p>
          <p>Price adv</p>
        </div>
      </CardContent>
    </Card>
  );
}
