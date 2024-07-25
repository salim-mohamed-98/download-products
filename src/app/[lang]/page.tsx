import { Button } from "@/components/shadcn/ui/button";
import { ModeToggle } from "@/components/shadcn/ui/mode-toggle";
import { getDictionary } from "@/lib/get-dictionaries";
import { i18n, Locale } from "@/lib/i18n";
import Image from "next/image";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);
  return (
    <main className="p-3">
      <h1 className="text-xl text-center">{dict.greeting}</h1>
      <Button className="dark:bg-red-400">Click me!</Button>
      <ModeToggle />
    </main>
  );
}
