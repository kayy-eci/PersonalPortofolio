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
  SiReact,
  SiReactquery,
  SiReactrouter,
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
  { name: "React", icon: SiReact },

  { name: "React Query", icon: SiReactquery },
  { name: "React Router", icon: SiReactrouter },
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
      <div className="skills-head">
        <span className="meta-label">Stack</span>
        <h2>Tools I work with.</h2>
      </div>

      <div className="skills-marquee">
        {doubled.map((skill, i) => (
          <div key={i} className="skill-chip">
            <skill.icon size={18} />
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
