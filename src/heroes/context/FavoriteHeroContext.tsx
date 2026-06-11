import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import type { Hero } from "../types/hero.interface";

interface FavoriteHeroContext {
  //state
  favorites: Hero[];
  favoriteCount: number;

  //method
  isFavorite: (hero: Hero) => boolean;
  toggleFavorites: (hero: Hero) => void;
}

const getFavoritesFromLocalStorage = (): Hero[] => {
  const favorites = localStorage.getItem("favorites");

  return favorites ? JSON.parse(favorites) : [];
};

// eslint-disable-next-line react-refresh/only-export-components
export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>(
    getFavoritesFromLocalStorage(),
  );
  const toggleFavorites = (hero: Hero) => {
    const heroExist = favorites.find((h) => h.id === hero.id);

    if (heroExist) {
      const newFavorite = favorites.filter((h) => h.id !== hero.id);
      setFavorites(newFavorite);
      return;
    }
    setFavorites([...favorites, hero]);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoriteHeroContext
      value={{
        favorites: favorites,
        favoriteCount: favorites.length,
        isFavorite: (hero: Hero) => favorites.some((h) => h.id === hero.id),
        toggleFavorites: toggleFavorites,
      }}
    >
      {children}
    </FavoriteHeroContext>
  );
};
