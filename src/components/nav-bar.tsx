import React from "react";
import Languages from "./langauges";
import { ModeToggle } from "./shadcn/ui/mode-toggle";
import { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/get-dictionaries";
import { Button } from "@/components/shadcn/ui/button";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcn/ui/sheet";
import { Menu } from "lucide-react";

type Props = {
  locale: Locale;
};

export default async function NavBar({ locale }: Props) {
  const dict = await getDictionary(locale);
  return (
    <div className="m-3 flex justify-end md:block">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="rounded-full" size="icon" variant="outline">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full">
            <SheetDescription>main menu</SheetDescription>
            <SheetTitle>Navigation Menu</SheetTitle>
            <div className="my-8 space-y-5">
              <h1 className="text-xl text-center">{dict.greeting}</h1>
              <div className="flex items-center justify-between gap-4">
                <Languages />
                {/* <ModeToggle /> */}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:block container mt-4 mb-10">
        <div className="flex justify-between items-center container">
          <h1 className="text-xl text-center">{dict.greeting}</h1>
          <div className="flex items-center justify-between gap-4">
            <Languages />
            {/* <ModeToggle /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
