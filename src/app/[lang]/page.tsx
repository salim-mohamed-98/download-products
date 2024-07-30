import { DownloadSelect } from "@/components/download-select";
import { ProductPagination } from "@/components/product-pagination";
import ProductCardList from "@/components/product-card-list";
import SearchBar from "@/components/search-bar";
import { Separator } from "@/components/shadcn/ui/separator";
import { i18n, Locale } from "@/lib/i18n";
import { getTotalCountProduct } from "@/db/postgres/data";
import { getDictionary } from "@/lib/get-dictionaries";

const MAX_ITEMS_PER_PAGE = 10;

export default async function Home({
  params,
  searchParams,
}: {
  params: { lang: Locale };
  searchParams?: { page: string; query?: string; items_per_page?: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const items_per_page = Math.min(
    Number(searchParams?.items_per_page) || MAX_ITEMS_PER_PAGE,
    MAX_ITEMS_PER_PAGE
  );
  const total_pages = Math.ceil(
    (await getTotalCountProduct()) / MAX_ITEMS_PER_PAGE
  );

  const language_dict = await getDictionary(params.lang);
  const search_bar_placheholder = language_dict.search_bar_placholer;

  return (
    <main>
      <div className="sticky mb-4 shadow-md pt-6 top-0 z-50 bg-white dark:bg-black">
        <div className="container flex justify-between">
          <SearchBar placeholder={search_bar_placheholder} />
          <DownloadSelect />
        </div>
        <Separator className="mt-5 bg-gray-300 shadow-md dark:bg-gray-600" />
      </div>
      <ProductCardList
        items_per_page={items_per_page}
        current_page={currentPage}
      />
      <ProductPagination total_pages={total_pages} />
    </main>
  );
}
