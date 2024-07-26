import { DownloadSelect } from "@/components/download-select";
import ProductCardList from "@/components/product-card-list";
import SearchBar from "@/components/search-bar";
import { ModeToggle } from "@/components/shadcn/ui/mode-toggle";
import { Separator } from "@/components/shadcn/ui/separator";
import { getDictionary } from "@/lib/get-dictionaries";
import { i18n, Locale } from "@/lib/i18n";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);
  return (
    <main className="p-3 container">
      <div className="text-center mb-20">
        <div className="flex justify-between container">
          <h1 className="text-xl text-center">{dict.greeting}</h1>
          <ModeToggle />
        </div>
      </div>
      <div className="flex justify-between">
        <SearchBar />
        <DownloadSelect />
      </div>
      <Separator className="mb-4 mt-2" />
      <ProductCardList />
    </main>
  );
}
