import { useState } from "react";
import "./Navbar.css";
import MenuIcon from "./MenuIcon";
import CloseIcon from "./CloseIcon";

export default function NavBar() {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <>
      <div className="nav-toggler" onClick={() => setToggleNav(!toggleNav)}>
        <span>{toggleNav ? <CloseIcon /> : <MenuIcon />}</span>
      </div>
      <nav className={`nav-sidebar ${toggleNav ? "active" : null}`}>
        <div className={`nav-panel`}>
          <ul className="nav-item-list">
            <li className="nav-item">
              <a href="#About">About</a>
            </li>
            <li className="nav-item">
              <a href="#Experience">Experience</a>
            </li>
            <li className="nav-item">
              <a href="#Contact">Contact</a>
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
