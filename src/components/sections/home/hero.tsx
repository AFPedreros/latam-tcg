import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HomeHero = () => {
  return (
    <section className="relative flex h-[calc(100vh-5rem)] items-center justify-center px-8 lg:px-[8vw]">
      <div className="z-10 flex max-w-screen-lg flex-col items-center gap-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary bg-primary/10 px-4 py-2 font-medium text-primary text-sm backdrop-blur-sm">
          <Sparkles className="h-4 w-4" />
          <span>La comunidad de intercambio en Colombia</span>
        </div>

        <h1 className="text-6xl leading-none md:text-7xl lg:text-8xl">
          Intercambia cartas de Pokémon con coleccionistas
        </h1>

        <p className="max-w-md text-xl lg:max-w-3xl lg:text-2xl">
          Conecta con entrenadores en toda Colombia. Compra y vende cartas
          auténticas de forma segura y confiable.
        </p>

        <div className="mx-auto mt-2 flex w-full max-w-[384px] flex-col items-center justify-center gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4">
          <Button className="group" size="lg">
            Comienza a vender
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg">
            Explorar colecciones
          </Button>
        </div>
      </div>
    </section>
  );
};
