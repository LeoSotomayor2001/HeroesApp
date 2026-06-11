import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "../hero/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { HeroGrid } from "../hero/components/HeroGrid";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { searchHeroesAction } from "@/heroes/actions/get-heroes.action";

export const SearchPage = () => {
  const [searchParams]= useSearchParams()
  const name= searchParams.get('name') ?? ''
  const strength= searchParams.get('strength') ?? ''
  const {data:heroes=[]}= useQuery({
    queryKey: ['search',{name,strength}],
    queryFn:()=> searchHeroesAction({name,strength}),
    staleTime: 1000*60*5
  })
  return (
    <>
      <CustomJumbotron
        title="Busqueda de heroes"
        description="Descubre, explora y administrar SuperHeroes y Villanos"
      />
      <CustomBreadcrumbs
        currentPage="Buscador de Heroes"
        breadcrumbs={[
          // { label: "Home1", to: "/" },
          // { label: "Home2", to: "/" },
          // { label: "Home3", to: "/" },
        ]}
      />
      {/* Stats Dashboard */}
      <HeroStats />
      {/* Filter and search */}
      <SearchControls />

      <HeroGrid heroes={heroes}/>
    </>
  );
};

export default SearchPage;
