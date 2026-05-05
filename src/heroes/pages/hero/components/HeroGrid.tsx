import type { Hero } from "@/heroes/types/hero.interface";
import { HeroGridCard } from "./HeroGridCard";

interface HeroGridCardProps{
  heroes: Hero[]
}

export const HeroGrid = ({ heroes }: HeroGridCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {heroes.map((hero) => (
        <HeroGridCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
};
