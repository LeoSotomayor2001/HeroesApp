import { Link, useLocation } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,

  NavigationMenuList,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

export const CustomMenu = () => {
  const { pathname } = useLocation();
  const isActive = (path: string) => {
    return pathname === path;
  };
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-2">
        {/* Home */}
        <NavigationMenuItem>
            <Link to="/"   className={cn(isActive("/") && "bg-slate-200 ", "p-2 rounded-md")}
          >Inicio</Link>

        </NavigationMenuItem>
        {/* Search */}
        <NavigationMenuItem>
          
            <Link
              to="/search"
              className={cn(
                isActive("/search") && "bg-slate-200 ",
                "p-2 rounded-md",
              )}
            >
              Buscar
            </Link>
          
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
