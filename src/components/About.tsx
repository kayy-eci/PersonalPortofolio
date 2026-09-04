import TargetCursor from "./TargetCursor";
import CountUp from "./CountUp";

const capabilities = [
  { name: "Frontend Engineering", note: "React · TypeScript" },
  { name: "Backend & APIs", note: "Node · Express · SQL" },
  { name: "UI Motion & Interaction", note: "GSAP · Motion" },
];

const stats = [
  { value: 3, label: "Years experience" },
  { value: 26, label: "Projects built" },
  { value: 20, label: "Happy clients" },
];

const About = () => {
  return (
    <section className="section" id="about">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
        cursorColor="#9a9a9a"
        cursorColorOnTarget="#e1ff5f"
      />
      <div className="about-grid">
        <aside className="about-aside">
          <span className="meta-label">About me</span>
          <img
            className="about-portrait"
            src="/kayysan.jpeg"
            alt="Portrait of Kayysan"
          />
        </aside>

        <div className="about-body">
          <p className="about-lead">
            I'm a full-stack developer with a deep passion for building
            beautiful, functional web applications.
          </p>
          <p>
            With experience across modern JavaScript frameworks and a keen eye
            for design, I bring ideas to life through clean code and intuitive
            interfaces. I care about the details users feel but never notice:
            load times, motion curves, keyboard paths.
          </p>

          <ul className="about-list">
            {capabilities.map((item) => (
              <li key={item.name} className="cursor-target">
                <span className="name">{item.name}</span>
                <span className="note">{item.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="about-stats">
        {stats.map((stat) => (
          <div key={stat.label} className="stat cursor-target">
            <div className="stat-number">
              <CountUp
                to={stat.value}
                separator=","
                duration={5}
                className="count-up-text"
              />
              <span>+</span>
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
