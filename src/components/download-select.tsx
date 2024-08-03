"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import { Button } from "./shadcn/ui/button";
import { useState } from "react";

type PropType = {
  dictionary: {
    button_label: string;
    header: string;
    sub_header: string;
    placeholder: string;
    file_types: {
      csv: string;
      json: string;
      xml: string;
    };
  };
};

export function DownloadSelect({ dictionary }: PropType) {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );

  const clickHandler = () => {
    if (selectedValue) {
      const a = document.createElement("a");
      a.href = `/downloadable_files/products.${selectedValue}`;
      a.download = `products_list.${selectedValue}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className="flex items-center flex-wrap sm:flex-nowrap gap-3">
      <Select
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      >
        <SelectTrigger className="sm:w-[180px] dark:border-gray-400 w-full">
          <SelectValue placeholder={dictionary.placeholder} />
        </SelectTrigger>
        <SelectContent className="dark:border-gray-400">
          <SelectGroup>
            <SelectItem value="json">{dictionary.file_types.json}</SelectItem>
            <SelectItem value="csv">{dictionary.file_types.csv}</SelectItem>
            <SelectItem value="xml">{dictionary.file_types.xml}</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button
        className="w-full sm:w-auto"
        disabled={!selectedValue}
        onClick={clickHandler}
      >
        {dictionary.button_label}
      </Button>
    </div>
  );
}
