"use client";
import React from "react";
import { Button } from "./shadcn/ui/button";
import { i18n, Locale } from "@/lib/i18n";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {
  locale: Locale;
  language: string;
};

export default function LanguageBtn({ locale, language }: Props) {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selected = pathname.startsWith(`/${locale}`);

  return (
    <Button
      onClick={() => {
        const locale_to_replace = i18n.locales.find((l) =>
          pathname.startsWith(`/${l}`)
        );
        const new_url = pathname.replace(locale_to_replace!, locale);
        push(`${new_url}?${searchParams}`);
      }}
      disabled={selected}
      size="icon"
      variant="outline"
      className={cn(
        "rounded-full disabled:opacity-100 dark:bg-white",
        selected
          ? "opacity-100 bg-sky-400 dark:bg-sky-400 hover:bg-sky-400"
          : "opacity-75"
      )}
    >
      <img src={`/images/${locale}-xs.png`} className="h-8 w-8" />
      <span className="sr-only">
        {selected
          ? `This page is in ${language} language`
          : `Translate to ${language} language`}
      </span>
    </Button>
  );
}
