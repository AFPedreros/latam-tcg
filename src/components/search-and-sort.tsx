"use client";

import { Check, ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type Props = {
  search: string;
  sortBy: string;
  onSearchChange: (value: string) => void;
  onSortChange: (value: string) => void;
};

const SORT_OPTIONS = [
  { value: "name", label: "Nombre (A-Z)" },
  { value: "-name", label: "Nombre (Z-A)" },
  { value: "number", label: "Número de Serie" },
  {
    value: "cardmarket.prices.averageSellPrice",
    label: "Precio (Menor a Mayor)",
  },
  {
    value: "-cardmarket.prices.averageSellPrice",
    label: "Precio (Mayor a Menor)",
  },
  { value: "-set.releaseDate", label: "Más Recientes" },
  { value: "set.releaseDate", label: "Más Antiguos" },
];

export function SearchAndSort({
  search,
  sortBy,
  onSearchChange,
  onSortChange,
}: Props) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <div className="relative flex-1 rounded-md bg-foreground text-background">
        <Search className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4" />
        <Input
          placeholder="Buscar cartas..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="border-input/35 pl-9"
        />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="border border-input/35 bg-foreground px-6 font-medium text-background hover:bg-background hover:text-foreground"
          >
            Ordenar por{" "}
            {sortBy
              ? `: ${SORT_OPTIONS.find((o) => o.value === sortBy)?.label}`
              : ""}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-56 bg-foreground text-background"
        >
          {SORT_OPTIONS.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => onSortChange(option.value)}
              className="flex cursor-pointer items-center justify-between"
            >
              {option.label}
              {sortBy === option.value && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
