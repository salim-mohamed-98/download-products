"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/shadcn/ui/pagination";
import { generatePagination } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";

export function ProductPagination({ total_pages }: { total_pages: number }) {
  const search_params = useSearchParams();
  const pathname = usePathname();
  const current_page_number = Number(search_params.get("page")) || 1;

  function createUrl(pageNumber: number | string) {
    const params = new URLSearchParams(search_params);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  }

  const allPages = generatePagination(current_page_number, total_pages);
  return (
    <Pagination className="mb-5">
      <PaginationContent>
        {/* prev */}
        {current_page_number >= 2 && (
          <PaginationItem key={current_page_number - 1}>
            <PaginationPrevious
              isActive={true}
              href={createUrl(current_page_number - 1)}
            />
          </PaginationItem>
        )}
        {/* numbers */}
        {allPages.map((page) => (
          <PaginationItem key={page}>
            {page === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href={createUrl(page)}
                isActive={page === current_page_number}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        {/* next */}
        {current_page_number < total_pages && (
          <PaginationItem key={current_page_number + 1}>
            <PaginationNext
              isActive={true}
              href={createUrl(current_page_number + 1)}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
