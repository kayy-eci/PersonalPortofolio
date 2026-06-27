import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-label">About Me</div>
      <div className="about-grid">
        {/* Image */}
        <div className="about-image-wrapper">
          <div className="about-image">
            {/* Avatar placeholder with icon */}
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <div
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  background: 'var(--gradient-1)',
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  fontWeight: 900,
                  color: '#fff',
                }}
              >
                K
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Kayysan
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', opacity: 0.7 }}>
                Full-Stack Developer
              </p>
            </div>
          </div>
          <div className="about-image-glow" />
        </div>

        {/* Content */}
        <div>
          <h2 className="section-title">Passionate about crafting digital experiences</h2>
          <div className="about-text">
            <p>
              I'm a full-stack developer with a deep passion for building beautiful,
              functional web applications. With experience in modern JavaScript frameworks
              and a keen eye for design, I bring ideas to life through clean code and
              intuitive interfaces.
            </p>
            <p>
              My approach combines technical excellence with creative thinking. I believe
              great software isn't just about code — it's about understanding users and
              delivering experiences that feel effortless.
            </p>
          </div>

          {/* Feature cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
            {[
              { icon: <Code size={20} />, title: 'Clean Code', desc: 'Writing maintainable, scalable code that stands the test of time.' },
              { icon: <Palette size={20} />, title: 'Design-Driven', desc: 'Creating interfaces that are both beautiful and user-friendly.' },
              { icon: <Zap size={20} />, title: 'Performance', desc: 'Optimizing every millisecond for the best user experience.' },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '0.6rem',
                    background: 'rgba(168,85,247,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-light)',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-heading)', marginBottom: 4 }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="about-stats">
        {[
          { number: '3+', label: 'Years Experience' },
          { number: '20+', label: 'Projects Built' },
          { number: '10+', label: 'Happy Clients' },
        ].map((s) => (
          <div key={s.label} className="stat">
            <div className="stat-number">{s.number}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
