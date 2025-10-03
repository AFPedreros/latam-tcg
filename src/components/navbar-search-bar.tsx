"use client";
import { Check, ChevronDown, Search } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";

const categories = [
  "Todas",
  "Pokemon japonés",
  "Pokemon inglés",
  "Pokemon español",
];

export const NavbarSearchBar = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("Todas");
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = () => {
    // biome-ignore lint/suspicious/noConsole: <TODO: Implement search functionality>
    console.log(`Searching for ${searchQuery} in category ${selectedCategory}`);
  };

  return (
    <div className="flex w-full items-center gap-0 rounded-lg border border-input bg-background">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="rounded-r-none border-input border-r px-6 font-medium hover:bg-muted"
          >
            {selectedCategory}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          {categories.map((category) => (
            <DropdownMenuItem
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="flex cursor-pointer items-center justify-between"
            >
              {category}
              {selectedCategory === category && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Input
        type="text"
        placeholder='Try "special illustration cards"'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className="flex-1 rounded-none border-0 bg-transparent px-6 text-base focus-visible:ring-0 focus-visible:ring-offset-0"
      />

      {/* Search Button */}
      <Button onClick={handleSearch} size="icon" className="rounded-l-none">
        <Search className="h-5 w-5" />
        <span className="sr-only">Buscar</span>
      </Button>
    </div>
  );
};
