import * as React from "react";

import { Card, CardContent } from "@/components/shadcn/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/ui/carousel";
import Image from "next/image";

export function ProductImageCarousel({ images }: { images: string[] }) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((imageSrc, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 relative">
                  <Image
                    src={imageSrc}
                    alt=""
                    fill
                    className="absolute object-contain object-center"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex gap-3 justify-center mt-2 mb-4">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
