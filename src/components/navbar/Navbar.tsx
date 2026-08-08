import "./navbarStyles.css";
import AboutIcon from "../../icons/AboutIcon";
import ExperienceIcon from "../../icons/ExperienceIcon";
import ProjectsIcon from "../../icons/ProjectsIcon";
import EducationIcon from "../../icons/EducationIcon";
import useActiveSection from "../../hooks/useActiveSection";
import DarkModeToggle from "./darkMode/DarkModeToggle";

const SECTION_IDS = ["about", "experience", "projects", "education"];

const NAV_ITEMS = [
  { id: "about", label: "About", href: "#about", Icon: AboutIcon },
  { id: "experience", label: "Experience", href: "#experience", Icon: ExperienceIcon },
  { id: "projects", label: "Projects", href: "#projects", Icon: ProjectsIcon },
  { id: "education", label: "Education", href: "#education", Icon: EducationIcon },
];

export default function NavBar() {
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <nav className="nav-rail" aria-label="Primary">
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
      <DarkModeToggle />
    </nav>
  );
}
