import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "../hero/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const SearchPage = () => {
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
    </>
  );
};

export default SearchPage;
