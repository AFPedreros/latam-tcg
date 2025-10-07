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
