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
    <main className="container">
      <div className="flex justify-between">
        <SearchBar />
        <DownloadSelect />
      </div>
      <Separator className="mb-4 mt-2" />
      <ProductCardList />
    </main>
  );
}
