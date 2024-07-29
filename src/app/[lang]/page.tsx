import { DownloadSelect } from "@/components/download-select";
import { ProductPagination } from "@/components/product-pagination";
import ProductCardList from "@/components/product-card-list";
import SearchBar from "@/components/search-bar";
import { Separator } from "@/components/shadcn/ui/separator";
import { i18n, Locale } from "@/lib/i18n";

export default async function Home({ params }: { params: { lang: Locale } }) {
  return (
    <main>
      <div className="sticky mb-4 shadow-md pt-6 top-0 z-50 bg-white dark:bg-black">
        <div className="container flex justify-between">
          <SearchBar />
          <DownloadSelect />
        </div>
        <Separator className="mt-5 bg-gray-300 shadow-md dark:bg-gray-600" />
      </div>
      <ProductCardList />
      <ProductPagination total_pages={20} />
    </main>
  );
}
