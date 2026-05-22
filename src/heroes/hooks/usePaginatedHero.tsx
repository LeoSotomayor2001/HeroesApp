import { useQuery } from "@tanstack/react-query";
import { getHeroByPageAction } from "../actions/get-hero-by-page.action";

interface Props {
  page: string | number;
  limit: string | number;
  category: string;
}

export const usePaginatedHero = ({ page, limit, category }: Props) => {
  return useQuery({
    queryKey: ["heroes", { page: page, limit: limit, category }],
    queryFn: () => getHeroByPageAction(+page, +limit,category),
    staleTime: 1000 * 60 * 5,
  });
};
