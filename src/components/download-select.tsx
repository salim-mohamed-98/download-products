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
  return (
    <div className="flex items-center gap-3">
      <span>Download as: </span>
      <Select
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      >
        <SelectTrigger className="w-[180px] dark:border-gray-400">
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
        disabled={!selectedValue}
        onClick={() => {
          if (selectedValue) {
            const a = document.createElement("a");
            a.href = `/downloadable_files/products.${selectedValue}`;
            a.download = `products_list.${selectedValue}`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }
        }}
      >
        Download
      </Button>
    </div>
  );
}
