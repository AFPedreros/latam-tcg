import { ArrowRight, Sparkles } from "lucide-react";

import { FloatingCard } from "@/components/floating-card";
import { Button } from "@/components/ui/button";

export const HomeHero = () => {
  return (
    <section
      id="hero-section"
      className="relative flex h-[calc(100vh-5rem)] items-center justify-center px-8 lg:px-[8vw]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-visible">
        <FloatingCard
          src="/images/charizard-pokemon-card.png"
          alt="Charizard Card"
          className="-rotate-30 invisible absolute z-[1] w-[8rem] overflow-hidden rounded-md sm:top-[20rem] sm:right-[-3rem] sm:w-[8rem] md:visible md:top-[58rem] md:right-[14rem] md:w-[10rem] lg:top-[32rem] lg:w-[12rem]"
          delay={0.2}
          parallaxIntensity={25}
        />

        <FloatingCard
          src="/images/umbreon-pokemon-card.png"
          alt="Umbreon Card"
          className="absolute top-[28rem] left-[-12vw] z-[1] w-[3rem] rotate-40 sm:left-[-7vw] md:top-[8rem] md:left-[6vw] md:w-[8rem]"
          delay={0.4}
          parallaxIntensity={35}
        />

        <FloatingCard
          src="/images/latios-latias-pokemon-card.png"
          alt="Latios & Latias Card"
          className="invisible absolute top-[-7rem] right-[-3vw] z-[1] w-[9rem] rotate-25 sm:visible md:top-[4rem] md:right-[6vw] md:w-[8rem]"
          delay={0.1}
          parallaxIntensity={30}
        />

        <FloatingCard
          src="/images/lucario-pokemon-card.png"
          alt="Lucario Card"
          className="-rotate-20 absolute top-[53rem] right-[-14vw] z-[1] w-[9rem] sm:top-[42rem] sm:right-[-5rem] md:top-[16rem] md:right-[-1rem] md:w-[11rem] lg:top-[20rem] lg:right-[-2rem] lg:w-[12rem]"
          delay={0.3}
          parallaxIntensity={28}
        />

        <FloatingCard
          src="/images/pikachu-pokemon-card.png"
          alt="Pikachu Card"
          className="-rotate-10 absolute top-[63rem] left-[-2rem] z-[1] w-[10rem] sm:top-[50rem] sm:left-[3rem] sm:w-[10rem] md:top-[26rem] md:left-[-2rem] md:w-[14rem] lg:left-[-0.5rem] lg:w-[14rem]"
          delay={0.5}
          parallaxIntensity={32}
        />
      </div>

      <div className="z-10 flex max-w-screen-lg flex-col items-center gap-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary bg-primary/10 px-4 py-2 font-medium text-primary text-sm backdrop-blur-sm">
          <Sparkles className="h-4 w-4" />
          <span>Pagos seguros · Envíos dentro de Colombia</span>
        </div>

        <h1 className="text-balance text-6xl leading-none md:text-7xl lg:text-8xl">
          Ve de 0 a tu primera venta
        </h1>

        <p className="max-w-md text-xl lg:max-w-3xl lg:text-2xl">
          Comparte lo que sabes, vende cartas auténticas y cobra rápido. Empieza
          con una carta: prueba, aprende y escala.
        </p>

        <div className="mx-auto mt-2 flex w-full max-w-[384px] flex-col items-center justify-center gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4">
          <Button className="group" size="lg">
            Comenzar a vender
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg">
            Explorar cartas
          </Button>
        </div>
      </div>
    </section>
  );
};
