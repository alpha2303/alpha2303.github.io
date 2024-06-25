import { useState } from "react";
import "./Navbar.css";
import MenuIcon from "../../icons/MenuIcon";
import CloseIcon from "../../icons/CloseIcon";

export default function NavBar() {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <>
      <div className="nav-toggler" onClick={() => setToggleNav(!toggleNav)}>
        {toggleNav ? <CloseIcon isDark={false} /> : <MenuIcon isDark={false} />}
      </div>
      <nav className={`nav-sidebar ${toggleNav ? "active" : null}`}>
        <div className={`nav-panel`}>
          <ul className="nav-item-list">
            <li className="nav-item">
              <a href="#about">About</a>
            </li>
            <li className="nav-item">
              <a href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

{
  /* <div>
      
      
    </div> */
}
