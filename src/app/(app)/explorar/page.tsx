import { PokemonSetsCarousel } from "@/components/pokemon-sets-carousel";

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
  const sets = await getPokemonSets();

  return (
    <main className="relative min-h-[calc(100vh-5rem)] w-full overflow-hidden bg-[#242423] text-background">
      <div className="grid gap-16 px-4 py-16 lg:px-16 lg:py-16">
        <PokemonSetsCarousel sets={sets} />
      </div>
    </main>
  );
}
