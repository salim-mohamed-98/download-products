import { Button } from "@/components/shadcn/ui/button";
import { ModeToggle } from "@/components/shadcn/ui/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-3">
      <Button className="dark:bg-red-400">Click me!</Button>
      <ModeToggle />
    </main>
  );
}
