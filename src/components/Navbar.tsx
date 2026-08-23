import { Link, NavLink } from "react-router-dom";

const links = [
  { label: "Work", to: "/#work" },
  { label: "About", to: "/about" },
  { label: "Awards", to: "/achievements" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          Kayysan
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map((link) =>
            link.to.startsWith("/#") ? (
              <Link key={link.label} to={link.to} className="nav-link">
                {link.label}
              </Link>
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>
        <div className="nav-status">
          <span className="dot" />
          <span>Open to work</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
