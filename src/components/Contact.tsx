import { Mail, MapPin, Send } from 'lucide-react';


const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/kayy-eci",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/USERNAME/",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/kaii.dev/"
  },
];

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="section-label">Get In Touch</div>
      <h2 className="section-title">Let's work together</h2>
      <p className="section-subtitle">
        Have a project in mind? Let's build something amazing.
      </p>

      <div className="contact-wrapper">
        {/* Info side */}
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>
            Feel free to reach out through any of the channels below.
            I'm always open to discussing new projects and creative ideas.
          </p>

          <div className="contact-links">
            {[
              {
                icon: <Mail size={20} />,
                label: 'Email',
                value: 'hello@kayysan.dev',
                href: 'mailto:hello@kayysan.dev',
              },
              {
                icon: <MapPin size={20} />,
                label: 'Location',
                value: 'Available Worldwide',
                href: '#',
              },
            ].map((item) => (
              <a key={item.label} href={item.href} className="contact-link">
                <div className="contact-link-icon">{item.icon}</div>
                <div className="contact-link-text">
                  <div className="label">{item.label}</div>
                  <div className="value">{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Social quick links */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem' }}>
            {socialLinks.map((Social) => (
              <a
                key={Social.name}
                href={Social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'border-color 0.3s, color 0.3s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent)';
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-heading)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-color)';
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
                }}
              >
                {Social.name}
              </a>
            ))}
          </div>
          
        </div>

        {/* Form side */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label>Name</label>
              <input className="form-input" type="text" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input className="form-input" type="email" placeholder="john@example.com" />
            </div>
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input className="form-input" type="text" placeholder="Project Inquiry" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea className="form-textarea" placeholder="Tell me about your project..." />
          </div>
          <button type="submit" className="form-submit">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <Send size={16} />
              Send Message
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
