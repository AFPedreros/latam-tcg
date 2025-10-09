import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const PokemonCard = () => {
  return (
    <Card className="w-full max-w-[320px] cursor-pointer rounded-md border-none bg-bg-transparent py-0 text-background">
      <CardContent className="p-0">
        <div className="relative aspect-[320/447] w-full border-b">
          <Image
            src="/images/serperior.webp"
            alt="Serperior"
            fill
            className="h-auto w-full object-cover"
          />

          <div className="absolute bottom-0 left-0 rounded-t-sm border border-border/35 bg-foreground px-1 py-1.5 text-xs">
            164/086
          </div>

          <div className="absolute right-0 bottom-0 rounded-t-sm border border-border/35 bg-foreground px-1 py-1.5 text-xs">
            <Image
              src="/images/black-bolt.webp"
              alt="Black  Bolt"
              height={14}
              width={25}
              className="object-cover"
            />
          </div>
        </div>
        <div className="space-y-2 border-border/35 border-x border-b bg-foreground p-3">
          <h4 className="font-semibold text-sm">Serperior</h4>
          <p className="text-xs">Pokémon ex (SV), Full Art Pokémon</p>
        </div>
        <div className="space-y-2 rounded-b-md border-border/35 border-x border-b bg-foreground p-3">
          <p className="text-sm">
            A partir de: <Badge className="font-semibold">$9.500</Badge>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
