const skills = [
  { name: 'React', color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Next.js', color: '#fff' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Tailwind CSS', color: '#06B6D4' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Git', color: '#F05032' },
  { name: 'Figma', color: '#F24E1E' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'GraphQL', color: '#E10098' },
  { name: 'Redis', color: '#DC382D' },
  { name: 'Vite', color: '#646CFF' },
  { name: 'GSAP', color: '#88CE02' },
];

const Skills = () => {
  const doubled = [...skills, ...skills]; // duplicate for seamless loop

  return (
    <section className="skills-section" id="skills">
      <div style={{ textAlign: 'center', marginBottom: '3rem', padding: '0 2rem' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>Tech Stack</div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Skills & Tools</h2>
        <p className="section-subtitle" style={{ margin: '0.5rem auto 0', textAlign: 'center' }}>
          Technologies I work with daily to bring ideas to life.
        </p>
      </div>

      <div className="skills-marquee">
        {doubled.map((s, i) => (
          <div key={i} className="skill-chip">
            <span
              className="skill-icon"
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: s.color,
                flexShrink: 0,
              }}
            />
            {s.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
