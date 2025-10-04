import { HomeBentoGrid } from "@/components/sections/home/bento-grid";
import { HomeHero } from "@/components/sections/home/hero";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-[#F4F4F0]">
      <HomeHero />
      <HomeBentoGrid />
    </main>
  );
}
