import StaggeredMenu from './StaggeredMenu';
import { Link, NavLink } from "react-router-dom";

const links = [
  { label: "Work", to: "/#work" },
  { label: "About", to: "/about" },
  { label: "Awards", to: "/achievements" },
  { label: "Contact", to: "/contact" },
];


const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

<div style={{ height: '100vh', background: '#1a1a1a' }}>
  <StaggeredMenu
    position="right"
    items={menuItems}
    socialItems={socialItems}
    displaySocials
    displayItemNumbering={true}
    menuButtonColor="#94a3b8"
    openMenuButtonColor="#fff"
    changeMenuColorOnOpen={true}
    colors={['#B497CF', '#5227FF']}
    logoUrl="/path-to-your-logo.svg"
    accentColor="#84CC16"
    onMenuOpen={() => console.log('Menu opened')}
    onMenuClose={() => console.log('Menu closed')}
  />
</div>


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
