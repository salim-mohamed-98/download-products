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

export function DownloadSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] dark:border-gray-400">
        <SelectValue placeholder="Download as" />
      </SelectTrigger>
      <SelectContent className="dark:border-gray-400">
        <SelectGroup>
          <SelectItem value="json">Json file</SelectItem>
          <SelectItem value="csv">Csv file</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
