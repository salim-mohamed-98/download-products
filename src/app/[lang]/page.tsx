import { DownloadSelect } from "@/components/download-select";
import LanguageBtn from "@/components/lanugage-btn";
import Languages from "@/components/lanugages";
import ProductCardList from "@/components/product-card-list";
import SearchBar from "@/components/search-bar";
import { Button } from "@/components/shadcn/ui/button";
import { ModeToggle } from "@/components/shadcn/ui/mode-toggle";
import { Separator } from "@/components/shadcn/ui/separator";
import { getDictionary } from "@/lib/get-dictionaries";
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
    </main>
  );
}
