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

export function MobilePopoverTools() {
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
            <h4 className="font-medium leading-none">Downloding products</h4>
            <p className="text-sm text-muted-foreground">
              Pick a file type you want to download.
            </p>
          </div>
          <div>
            <DownloadSelect />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
