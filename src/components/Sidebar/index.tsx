import { NavLink } from "react-router-dom";

// Containers and Components ----------------------------------------
import { ScrollArea } from "@/components/ui/scroll-area";
// ------------------------------------------------------------------

// Styles -----------------------------------------------------------
import "./Sidebar.scss";
// ------------------------------------------------------------------

type SidebarProps = {
  label: string;
  path: string;
  element: () => React.ReactNode;
};

function Sidebar({ componentPaths }: { componentPaths: SidebarProps[] }) {
  return (
    <div className="learning-stuff-sidebar">
      <ScrollArea className="h-lvh w-full">
        {componentPaths.map((componentPath) => {
          return (
            <NavLink
              key={componentPath.path}
              to={componentPath.path}
              className="learning-stuff-menu-item"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "none",
                };
              }}
            >
              {componentPath.label}
            </NavLink>
          );
        })}
      </ScrollArea>
    </div>
  );
}

export default Sidebar;
