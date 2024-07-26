import React from "react";
import Languages from "./lanugages";
import { ModeToggle } from "./shadcn/ui/mode-toggle";
import { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionaries";

type Props = {
  locale: Locale;
};

export default async function NavBar({ locale }: Props) {
  const dict = await getDictionary(locale);
  return (
    <div className="container mt-4 mb-10">
      <div className="flex justify-between items-center container">
        <h1 className="text-xl text-center">{dict.greeting}</h1>
        <div className="flex items-center justify-between gap-4">
          <Languages />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
