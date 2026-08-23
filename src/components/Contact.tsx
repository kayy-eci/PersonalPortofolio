const socialLinks = [
  { name: "GitHub", url: "https://github.com/kayy-eci" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/abdurahman-kayysan/" },
  { name: "Instagram", url: "https://www.instagram.com/kaii.dev/" },
];

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <span className="meta-label">Contact</span>
      <h2 className="contact-title">
        Let's build something
        <br />
        worth shipping.
      </h2>

      <a className="contact-mail" href="mailto:AbdurahmanKayysan@gmail.com">
        AbdurahmanKayysan@gmail.com
        <span className="arrow" aria-hidden="true">
          ↗
        </span>
      </a>

      <div className="contact-socials">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link cursor-target"
          >
            {social.name}
            <span className="arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
