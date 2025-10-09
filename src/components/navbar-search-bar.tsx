"use client";
import { Check, ChevronDown, Search } from "lucide-react";
import React from "react";
import { navbarCategories, navbarPlaceholderTexts } from "@/config/site";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import { TextLoop } from "./ui/text-loop";

export const NavbarSearchBar = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("Todas");
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = () => {
    // biome-ignore lint/suspicious/noConsole: <TODO: Implement search functionality>
    console.log(`Searching for ${searchQuery} in category ${selectedCategory}`);
  };

  return (
    <div className="hidden w-full items-center gap-0 rounded-lg border border-input/35 bg-foreground text-background lg:flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="rounded-r-none border-input/35 border-r px-6 font-medium hover:bg-background hover:text-foreground"
          >
            {selectedCategory}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-56 bg-foreground text-background"
        >
          {navbarCategories.map((category) => (
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

      <div className="relative flex-1">
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="w-full rounded-none border-0 bg-transparent px-6 text-base focus-visible:ring-0 focus-visible:ring-offset-0"
        />

        {!searchQuery && (
          <div className="pointer-events-none absolute inset-0 flex items-center px-6 text-muted-foreground">
            <TextLoop interval={3} className="text-sm">
              {navbarPlaceholderTexts.map((text) => (
                <span key={text}>{text}</span>
              ))}
            </TextLoop>
          </div>
        )}
      </div>

      <Button
        onClick={handleSearch}
        size="icon"
        variant="ghost"
        className="rounded-l-none border-input/35 border-l"
      >
        <Search className="h-5 w-5" />
        <span className="sr-only">Buscar</span>
      </Button>
    </div>
  );
};
