"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Scroller } from "@/components/ui/scroller";
import { Separator } from "@/components/ui/separator";

interface FilterState {
  search: string;
  category: string;
  sets: string[];
  rarities: string[];
  sortBy: string;
}

const CATEGORIES = [
  { value: "all", label: "Todos" },
  { value: "single", label: "Cartas Individuales" },
  { value: "packs", label: "Sobres" },
  { value: "bundles", label: "Paquetes" },
  { value: "boxes", label: "Cajas" },
  { value: "decks", label: "Mazos" },
  { value: "accessories", label: "Accesorios" },
  { value: "oversized", label: "Oversized" },
  { value: "dividers", label: "Divisores" },
  { value: "tins", label: "Latas" },
  { value: "sleeves", label: "Fundas" },
];

export function PokemonFilters() {
  const [filters, setFilters] = React.useState<FilterState>({
    search: "",
    category: "all",
    sets: [],
    rarities: [],
    sortBy: "name",
  });

  const clearFilters = () => {
    setFilters({
      search: "",
      category: "all",
      sets: [],
      rarities: [],
      sortBy: "name",
    });
  };

  const activeFilterCount =
    (filters.category !== "all" ? 1 : 0) +
    filters.sets.length +
    filters.rarities.length;

  return (
    <div className="overflow-y-auto rounded-md border border-border/35 bg-foreground text-background lg:sticky lg:top-4 lg:max-h-[calc(100vh-2rem)]">
      <div className="flex items-center justify-between p-4">
        <h2>Filtros</h2>
        {activeFilterCount > 0 && (
          <Button
            variant="link"
            size="sm"
            onClick={clearFilters}
            className="px-0"
          >
            Limpiar Filtros
          </Button>
        )}
      </div>

      <Separator className="bg-border/35" />

      <Accordion type="single" className="px-4" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Categoría</AccordionTrigger>
          <AccordionContent>
            <Scroller className="flex h-56 w-full flex-col gap-2.5 p-4">
              {CATEGORIES.map((category) => (
                <div
                  key={category.value}
                  className="flex items-center space-x-2"
                >
                  <Checkbox
                    id={`category-${category.value}`}
                    checked={filters.category === category.value}
                    // onCheckedChange={() => handleCategoryChange(category.value)}
                  />
                  <label
                    htmlFor={`category-${category.value}`}
                    className="cursor-pointer text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category.label}
                  </label>
                </div>
              ))}
            </Scroller>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Separator className="bg-border/35" />

      <Accordion type="single" className="px-4" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Expansiones</AccordionTrigger>
          <AccordionContent />
        </AccordionItem>
      </Accordion>

      <Separator className="bg-border/35" />

      <Accordion type="single" className="px-4" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Rareza</AccordionTrigger>
          <AccordionContent />
        </AccordionItem>
      </Accordion>
    </div>
  );
}
