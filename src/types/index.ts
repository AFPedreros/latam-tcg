export type NavbarItem = {
  name: string;
  href: string;
};

export type PokemonSet = {
  id: string;
  name: string;
  series: string;
  releaseDate: string;
  total: number;
  images: {
    logo: string;
    symbol: string;
  };
};

export type FilterState = {
  search: string;
  category: string;
  sets: string[];
  rarities: string[];
  sortBy: string;
};
