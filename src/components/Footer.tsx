const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Kayysan</span>
        <a href="#home">Back to top</a>
        <span>Designed &amp; built with React</span>
      </div>
    </footer>
  );
};

export default Footer;
