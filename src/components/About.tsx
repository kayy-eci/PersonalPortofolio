import { Code, Palette, Zap } from "lucide-react";
import TargetCursor from "./TargetCursor";
import CountUp from "./CountUp";
import TiltedCard from "./TiltedCard";

const About = () => {
  return (
    <section className="section" id="about">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
        cursorColor="#94a3b8"
        cursorColorOnTarget="#bcb2c5"
      />
      <div className="section-label">About Me</div>
      <div className="about-grid">
        <TiltedCard
          imageSrc="./public/kayysan.jpeg"
          altText="Kayysan - Software Engineering"
          captionText="Kayysan - Software Engineering"
          containerHeight="500px"
          containerWidth="550px"
          imageHeight="350px"
          imageWidth="350px"
          rotateAmplitude={12}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip
        />

        <div>
          <h2 className="section-title">Passionate about making website</h2>
          <div className="about-text">
            <p>
              I'm a full-stack developer with a deep passion for building
              beautiful, functional web applications. With experience in modern
              JavaScript frameworks and a keen eye for design, I bring ideas to
              life through clean code and intuitive interfaces.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            {[
              {
                icon: <Code size={20} />,
                title: "Clean Code",
                desc: "Writing maintainable, scalable code that stands the test of time.",
              },
              {
                icon: <Palette size={20} />,
                title: "Design-Driven",
                desc: "Creating interfaces that are both beautiful and user-friendly.",
              },
              {
                icon: <Zap size={20} />,
                title: "Performance",
                desc: "Optimizing every millisecond for the best user experience.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  padding: "1rem",
                  borderRadius: "0.75rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-color)",
                }}
                className="cursor-target"
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "0.6rem",
                    background: "rgba(124,58,237,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      color: "var(--text-heading)",
                      marginBottom: 4,
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-stats">
        {[
          {
            number: (
              <CountUp
                to={3}
                separator=","
                duration={5}
                className="count-up-text"
              />
            ),
            label: "Years Experience",
          },
          {
            number: (
              <CountUp
                to={22}
                separator=","
                duration={5}
                className="count-up-text"
              />
            ),
            label: "Projects Built",
          },
          {
            number: (
              <CountUp
                to={20}
                separator=","
                duration={5}
                className="count-up-text"
              />
            ),
            label: "Happy Clients",
          },
        ].map((s) => (
          <div key={s.label} className="stat cursor-target">
            <div className="stat-number">{s.number}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
