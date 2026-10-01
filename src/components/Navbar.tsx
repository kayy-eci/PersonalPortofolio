import StaggeredMenu from "./StaggeredMenu";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "Work", ariaLabel: "See selected work", link: "/#work" },
  { label: "About", ariaLabel: "Learn about me", link: "/about" },
  {
    label: "Awards",
    ariaLabel: "View certificates and awards",
    link: "/achievements",
  },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "GitHub", link: "https://github.com/kayy-eci" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/abdurahman-kayysan/" },
  { label: "Instagram", link: "https://www.instagram.com/kaii.dev/" },
];

const Navbar = () => (
  <StaggeredMenu
    isFixed
    position="right"
    items={menuItems}
    socialItems={socialItems}
    displaySocials
    displayItemNumbering
    logoText="Kayysan"
    menuButtonColor="#e9e9ef"
    openMenuButtonColor="#e1ff5f"
    changeMenuColorOnOpen
    colors={["#1c1c1c", "#e1ff5f"]}
    accentColor="#e1ff5f"
  />
);

export default Navbar;
