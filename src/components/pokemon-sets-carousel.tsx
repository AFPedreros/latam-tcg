"use client";

import Image from "next/image";
import React from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { PokemonSet } from "@/types";
import { Button } from "./ui/button";

type PokemonSetsCarouselProps = {
  sets: PokemonSet[];
};

export const PokemonSetsCarousel = ({ sets }: PokemonSetsCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (sets.length === 0) {
    return (
      <div className="mx-auto w-full max-w-7xl py-12 text-center">
        <p className="text-muted-foreground">No sets found</p>
      </div>
    );
  }

  return (
    <section className="relative mx-auto w-full min-w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <div className="mb-6 flex w-full items-center justify-between">
          <h2 className="text-lg">Últimas expansiones publicadas</h2>
          <div className="z-10 flex items-center gap-2">
            <CarouselPrevious className="static translate-x-0 translate-y-0 border-none bg-transparent text-background hover:bg-transparent hover:text-background" />
            {current} / {count}
            <CarouselNext className="static translate-x-0 translate-y-0 border-none bg-transparent text-background hover:bg-transparent hover:text-background" />
          </div>
        </div>
        <CarouselContent className="-ml-4">
          {sets.map((set) => (
            <CarouselItem
              key={set.id}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="group grid grid-cols-5 gap-0 overflow-hidden border-border/35 bg-foreground p-0 transition-colors hover:border-primary/50">
                <div className="relative col-span-3 flex h-90 items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 p-8">
                  {set.images.logo ? (
                    <Image
                      src={set.images.logo}
                      alt={set.name}
                      width={300}
                      height={200}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="font-bold text-6xl text-muted-foreground">
                      {set.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="col-span-2 flex flex-col px-6 py-4">
                  <div className="flex-1 space-y-2">
                    <h3 className="mb-2 text-balance font-bold text-background text-xl">
                      {set.name}
                    </h3>
                    <small className="text-border/50 text-sm">
                      Serie: <strong>{set.series}</strong>
                      <br />
                      Lanzamiento:{" "}
                      <strong>
                        {new Date(set.releaseDate).toLocaleDateString("es-ES", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </strong>
                      <br />
                      Número de cartas: <strong>{set.total}</strong>
                    </small>
                  </div>

                  <Button className="mt-auto w-full" variant="outline">
                    Ver expansión
                  </Button>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
