import {
  SiGo,
  SiJavascript,
  SiHtml5,
  SiPython,
  SiTypescript,
  SiNetlify,
  SiVercel,
  SiBootstrap,
  SiExpress,
  SiNextdotjs,
  SiNodedotjs,
  SiNodemon,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiReacthookform,
  SiVite,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiFigma,
  SiDocker,
} from "react-icons/si";

const skills = [
  { name: "Go", icon: SiGo },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML5", icon: SiHtml5 },
  { name: "Python", icon: SiPython },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Netlify", icon: SiNetlify },

  { name: "Vercel", icon: SiVercel },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Express.js", icon: SiExpress },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Nodemon", icon: SiNodemon },
  { name: "React", icon: SiReact },

  { name: "React Query", icon: SiReactquery },
  { name: "React Router", icon: SiReactrouter },
  { name: "React Hook Form", icon: SiReacthookform },
  { name: "Vite", icon: SiVite },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "PostgreSQL", icon: SiPostgresql },

  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "Figma", icon: SiFigma },
  { name: "Docker", icon: SiDocker },
];

const Skills = () => {
  const doubled = [...skills, ...skills];

  return (
    <section className="skills-section" id="skills">
      <div
        style={{ textAlign: "center", marginBottom: "3rem", padding: "0 2rem" }}
      >
        <div className="section-label" style={{ justifyContent: "center" }}>
          Tech Stack
        </div>
        <h2 className="section-title" style={{ textAlign: "center" }}>
          Skills & Tools
        </h2>
        <p
          className="section-subtitle"
          style={{ margin: "0.5rem auto 0", textAlign: "center" }}
        >
          Technologies I work with daily to bring ideas to life.
        </p>
      </div>

      <div className="skills-marquee">
        {doubled.map((s, i) => (
          <div key={i} className="skill-chip">
            <s.icon size={24} style={{ flexShrink: 0 }} />
            {s.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
