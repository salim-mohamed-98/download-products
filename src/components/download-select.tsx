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

export function DownloadSelect() {
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
          <SelectValue placeholder="Pick file type" />
        </SelectTrigger>
        <SelectContent className="dark:border-gray-400">
          <SelectGroup>
            <SelectItem value="json">Json file</SelectItem>
            <SelectItem value="csv">Csv file</SelectItem>
            <SelectItem value="xml">Xml file</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button
        className="w-full sm:w-auto"
        disabled={!selectedValue}
        onClick={clickHandler}
      >
        Download
      </Button>
    </div>
  );
}
