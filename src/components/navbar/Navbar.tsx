import "./navbarStyles.css";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

export default function NavBar() {
  return (
    <>
      <nav className="nav-sidebar">
        <div className="nav-panel">
          <ul className="nav-item-list">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.href}>
                <div className="nav-item-container">
                  <a href={link.href}>{link.label}</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
