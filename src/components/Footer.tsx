import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          © {new Date().getFullYear()} Kayysan. Built with{" "}
          <Heart
            size={13}
            style={{
              display: "inline",
              verticalAlign: "middle",
              color: "#ec4899",
            }}
          />{" "}
          and React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
