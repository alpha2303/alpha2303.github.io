import { useState } from "react";
import { createPortal } from "react-dom";
import "./navbarStyles.css";
import MenuIcon from "../../icons/MenuIcon";
import CloseIcon from "../../icons/CloseIcon";
import DarkModeToggle from "./darkMode/DarkModeToggle";

export default function NavBar() {
  const [toggleNav, setToggleNav] = useState(false);

  const closeSidebar = () => setToggleNav(false);

  return (
    <>
      {createPortal(
        <button
          type="button"
          className="nav-toggler"
          onClick={() => setToggleNav(!toggleNav)}
          aria-label="Toggle menu"
          aria-expanded={toggleNav}
          aria-controls="nav-sidebar"
        >
          {toggleNav ? <CloseIcon isDark={false} /> : <MenuIcon isDark={false} />}
        </button>,
        document.body
      )}
      <nav id="nav-sidebar" className={`nav-sidebar ${toggleNav ? "active" : ""}`}>
        <div className="nav-panel">
          <ul className="nav-item-list">
            <li className="nav-item">
              <a href="#about" onClick={closeSidebar}>About</a>
            </li>
            <li className="nav-item">
              <a href="#experience" onClick={closeSidebar}>Experience</a>
            </li>
            <li className="nav-item">
              <a href="#projects" onClick={closeSidebar}>Projects</a>
            </li>
            <li className="nav-item">
              <a href="#education" onClick={closeSidebar}>Education</a>
            </li>
            <li className="nav-item">
              <a href="/rpkr">Blog</a>
            </li>
          </ul>
          <div className="nav-panel__theme">
            <DarkModeToggle />
          </div>
        </div>
      </nav>
    </>
  );
}
