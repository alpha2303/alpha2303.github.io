import { useEffect, useState } from "react";
import "./navbarStyles.css";
import AboutIcon from "../../icons/AboutIcon";
import ExperienceIcon from "../../icons/ExperienceIcon";
import ProjectsIcon from "../../icons/ProjectsIcon";
import EducationIcon from "../../icons/EducationIcon";
import ChevronIcon from "../../icons/ChevronIcon";
import useActiveSection from "../../hooks/useActiveSection";

const NAV_COLLAPSED_KEY = "navCollapsed";

const SECTION_IDS = ["about", "experience", "projects", "education"];

const NAV_ITEMS = [
  { id: "about", label: "About", href: "#about", Icon: AboutIcon },
  { id: "experience", label: "Experience", href: "#experience", Icon: ExperienceIcon },
  { id: "projects", label: "Projects", href: "#projects", Icon: ProjectsIcon },
  { id: "education", label: "Education", href: "#education", Icon: EducationIcon },
];

function getInitialCollapsed(): boolean {
  if (typeof localStorage === "undefined") return false;
  return localStorage.getItem(NAV_COLLAPSED_KEY) === "true";
}

export default function NavBar() {
  const activeId = useActiveSection(SECTION_IDS);
  const [collapsed, setCollapsed] = useState<boolean>(() => getInitialCollapsed());

  useEffect(() => {
    document.documentElement.setAttribute("data-nav", collapsed ? "collapsed" : "expanded");
    localStorage.setItem(NAV_COLLAPSED_KEY, String(collapsed));
  }, [collapsed]);

  return (
    <nav className="nav-rail" aria-label="Primary">
      <button
        type="button"
        className="nav-collapse-toggle"
        onClick={() => setCollapsed((prev) => !prev)}
        aria-label={collapsed ? "Expand navigation" : "Collapse navigation"}
        aria-expanded={!collapsed}
      >
        <span className="nav-collapse-toggle__icon">
          <ChevronIcon />
        </span>
      </button>
      <ul className="nav-item-list">
        {NAV_ITEMS.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id} className="nav-item">
              <a
                href={item.href}
                className={isActive ? "active" : ""}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="nav-item-icon">
                  <item.Icon />
                </span>
                <span className="nav-item-label">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
