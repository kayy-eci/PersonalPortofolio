import StaggeredMenu from "./StaggeredMenu";
import TargetCursor from "./TargetCursor";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  {
    label: "Perks",
    ariaLabel: "View achievements",
    link: "/achievements",
  },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "GitHub", link: "https://github.com/kayy-eci" },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/abdurahman-kayysan-a79b08346/",
  },
  { label: "Instagram", link: "https://www.instagram.com/kaii.dev/" },
];

const Navbar = () => {
  return (
    <>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
        cursorColor="#94a3b8"
        cursorColorOnTarget="#bcb2c5"
      />
      <StaggeredMenu
        position="left"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={true}
        menuButtonColor="#000"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={true}
        colors={["#B497CF", "#5227FF"]}
        logoUrl="Kayysan"
        accentColor="#5227FF"
        isFixed={true}
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
      />
    </>
  );
};

export default Navbar;
