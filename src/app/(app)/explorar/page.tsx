import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { PokemonCard } from "@/components/pokemon-card.tsx";
import { PokemonFilters } from "@/components/pokemon-filters";
import { PokemonSetsCarousel } from "@/components/pokemon-sets-carousel";
import { SearchAndSort } from "@/components/search-and-sort";
import { getQueryClient, trpc } from "@/trpc/server";

async function getPokemonSets() {
  try {
    const response = await fetch(
      "https://api.pokemontcg.io/v2/sets?orderBy=-releaseDate&pageSize=9",
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Pokémon sets");
    }

    const data = await response.json();
    return data.data;
  } catch (_error) {
    return [];
  }
}

export default async function Explore() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.categories.getBySlug.queryOptions({ slug: "categorias" })
  );

  const sets = await getPokemonSets();

  return (
    <main className="relative min-h-[calc(100vh-5rem)] w-full bg-[#242423] text-background">
      <div className="grid gap-16 px-4 py-16 lg:px-16 lg:py-16">
        <PokemonSetsCarousel sets={sets} />

        <section className="flex flex-col gap-4">
          <div className="grid grid-cols-1 items-start gap-x-16 gap-y-8 md:grid-cols-[1fr_3fr]">
            <h2 className="text-lg">En el mercado</h2>

            <SearchAndSort />
          </div>

          <div className="grid grid-cols-1 items-start gap-x-16 gap-y-8 md:grid-cols-[1fr_3fr]">
            <HydrationBoundary state={dehydrate(queryClient)}>
              <Suspense fallback={<div>Cargando filtros...</div>}>
                <PokemonFilters />
              </Suspense>
            </HydrationBoundary>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] gap-4 lg:grid-cols-[repeat(auto-fill,minmax(16rem,1fr))]">
              <PokemonCard />
              <PokemonCard />
              <PokemonCard />
              <PokemonCard />
              <PokemonCard />
              <PokemonCard />
              <PokemonCard />
              <PokemonCard />
              <PokemonCard />
              <PokemonCard />
              <PokemonCard />
              <PokemonCard />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
