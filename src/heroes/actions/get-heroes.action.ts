import { heroApi } from "../api/heroe.api";
import type { Hero } from "../types/hero.interface";

interface Options {
  name?: string;
  team?: string;
  category?: string;
  universe?: string;
  status?: string;
  strength?: string;
}
const VITE_API_URL = import.meta.env.VITE_API_URL;

export const searchHeroesAction = async (options: Options = {}) => {
  const { category, name, status, strength, team, universe } = options;

  if (!category && !name && !status && !strength && !team && !universe)
    return [];

  const { data } = await heroApi.get<Hero[]>("/search", {
    params: {
      category,
      name,
      status,
      strength,
      team,
      universe,
    },
  });

  return data.map(hero => ({
    ...hero,
    image: `${VITE_API_URL}/images/${hero.image}`
  }))

};
