import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-socials">
          {[
            { label: 'GitHub', href: '#' },
            { label: 'LinkedIn', href: '#' },
            { label: 'Twitter', href: '#' },
            { label: 'Dribbble', href: '#' },
          ].map((s) => (
            <a key={s.label} href={s.href} className="footer-social" aria-label={s.label}>
              {s.label[0]}
            </a>
          ))}
        </div>
        <p className="footer-text">
          © {new Date().getFullYear()} Kayysan. Built with{' '}
          <Heart size={13} style={{ display: 'inline', verticalAlign: 'middle', color: '#ec4899' }} />{' '}
          and React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
