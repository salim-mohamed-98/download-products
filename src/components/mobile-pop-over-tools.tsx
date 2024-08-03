import { Button } from "@/components/shadcn/ui/button";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/ui/popover";
import { EllipsisVertical } from "lucide-react";
import { DownloadSelect } from "./download-select";

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

export function MobilePopoverTools({ dictionary }: PropType) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" variant="outline">
          <EllipsisVertical className="h-6 w-6" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-screen " sideOffset={30}>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">{dictionary.header}</h4>
            <p className="text-sm text-muted-foreground">
              {dictionary.sub_header}
            </p>
          </div>
          <div>
            <DownloadSelect dictionary={dictionary} />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
