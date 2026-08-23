import StaggeredMenu from "./StaggeredMenu";
import TargetCursor from "./TargetCursor";
import { useTheme } from "../hooks/useTheme";

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
  const { theme } = useTheme();

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
        menuButtonColor={theme === "dark" ? "#fff" : "#000"}
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={true}
        colors={["#B497CF", "#5227FF"]}
        accentColor="#5227FF"
        isFixed
      />
    </>
  );
};

export default Navbar;
