import { DownloadSelect } from "@/components/download-select";
import { ProductPagination } from "@/components/product-pagination";
import ProductCardList from "@/components/product-card-list";
import SearchBar from "@/components/search-bar";
import { Separator } from "@/components/shadcn/ui/separator";
import { i18n, Locale } from "@/lib/i18n";
import { getTotalCountProduct } from "@/db/postgres/data";
import { getDictionary } from "@/lib/get-dictionaries";
import { Suspense } from "react";
import { MobilePopoverTools } from "@/components/mobile-pop-over-tools";

const MAX_ITEMS_PER_PAGE = 10;

export default async function Home({
  params,
  searchParams,
}: {
  params: { lang: Locale };
  searchParams?: { page: string; query?: string; items_per_page?: string };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const items_per_page = Math.min(
    Number(searchParams?.items_per_page) || MAX_ITEMS_PER_PAGE,
    MAX_ITEMS_PER_PAGE
  );
  const total_pages = Math.ceil(
    (await getTotalCountProduct(query)) / MAX_ITEMS_PER_PAGE
  );
  const language_dict = await getDictionary(params.lang);
  const search_bar_placheholder = language_dict.search_bar_placholer;

  return (
    <main>
      <div className="sticky shadow-md  top-0 z-50 bg-white dark:bg-black">
        <div className="md:container px-3 flex justify-between items-end gap-2 flex-row">
          <div className="grow">
            <span className="text-red-400 text-sm">
              (search functionality in progress)
            </span>
            <SearchBar placeholder={search_bar_placheholder} />
          </div>
          <div className="sm:hidden">
            <MobilePopoverTools />
          </div>
          <div className="hidden sm:block">
            <DownloadSelect />
          </div>
        </div>
        <Separator className="mt-5 mb-5 bg-gray-300 shadow-md dark:bg-gray-600" />
      </div>
      <ProductPagination total_pages={total_pages} />

      <Suspense key={query + currentPage} fallback={"loading..."}>
        <ProductCardList
          query={query}
          current_page={currentPage}
          items_per_page={items_per_page}
        />
      </Suspense>
      <ProductPagination total_pages={total_pages} />
    </main>
  );
}
