import React from "react";
import { Skeleton } from "./shadcn/ui/skeleton";

type Props = {
  number_products: number;
};

export default function ProductCardListSkeleton({ number_products }: Props) {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-4 px-4 overflow-hidden sm:py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {Array.from({ length: number_products }).map((_, index) => (
              <article key={index} className="group text-sm space-y-4">
                <Skeleton className="w-full aspect-square" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
