import Link from "next/link";
import type { NavbarItem } from "@/types";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

type NavbarSidebarProps = {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const NavbarSidebar = ({
  items,
  open,
  onOpenChange,
}: NavbarSidebarProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="transform-none p-0">
        <SheetHeader className="border-b p-4">
          <div className="flex items-center">
            <SheetTitle className="font-bold text-lg">Menu</SheetTitle>
          </div>
        </SheetHeader>

        <ScrollArea className="flex h-full flex-col overflow-y-auto pb-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex w-full items-center p-4 text-left font-medium hover:bg-primary hover:text-white"
              onClick={() => onOpenChange(false)}
            >
              {item.name}
            </Link>
          ))}

          <div className="flex flex-col gap-2 border-t p-4">
            <Button className="w-full" variant="default">
              Login
            </Button>
            <Button className="w-full" variant="outline">
              Start selling
            </Button>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
