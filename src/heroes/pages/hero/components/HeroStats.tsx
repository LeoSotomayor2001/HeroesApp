import { Heart, Trophy, Users, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { HeroStatCard } from "./HeroStatCard";
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary";
import { use } from "react";
import { FavoriteHeroContext } from "@/heroes/context/FavoriteHeroContext";
export const HeroStats = () => {
  const { favoriteCount } = use(FavoriteHeroContext);
  const { data: summary } = useHeroSummary();
  const totalHeroes = summary?.totalHeroes ?? 0;
  const favoritePercentage =
    totalHeroes > 0 ? ((100 * favoriteCount) / totalHeroes).toFixed(2) : "0.00";

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <HeroStatCard
        title="Total de personajes"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-2xl font-bold">{summary?.totalHeroes}</div>
        <div className="flex gap-1 mt-2">
          <Badge variant="secondary" className="text-xs">
            {summary?.heroCount} Heroes
          </Badge>
          <Badge variant="destructive" className="text-xs">
            {summary?.villainCount} Villains
          </Badge>
        </div>
      </HeroStatCard>

      <HeroStatCard
        title="Favoritos"
        icon={<Heart className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-2xl font-bold text-red-600">{favoriteCount}</div>
        <p className="text-xs text-muted-foreground">
          {favoritePercentage}% del total
        </p>
      </HeroStatCard>

      <HeroStatCard
        title="Mas Fuerte"
        icon={<Zap className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">{summary?.strongestHero.alias}</div>
        <p className="text-xs text-muted-foreground">
          Fuerza: {summary?.strongestHero.strength}/10
        </p>
      </HeroStatCard>

      <HeroStatCard
        title="Mas Inteligente"
        icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">{summary?.smartestHero.alias}</div>
        <p className="text-xs text-muted-foreground">
          Inteligencia: {summary?.smartestHero.intelligence}/10
        </p>
      </HeroStatCard>
    </div>
  );
};
