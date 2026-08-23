import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import RotatingText from "./RotatingText";

const Hero = () => {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .fromTo(
          ".hero-line",
          { yPercent: 110 },
          { yPercent: 0, duration: 1.1, stagger: 0.12 },
          0.15,
        )
        .fromTo(
          ".hero-status, .hero-sub, .hero-cta",
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12 },
          0.55,
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={rootRef}>
      <div className="hero-inner">
        <div className="hero-status">
          <span className="dot" />
          Available for work
        </div>

        <h1 className="hero-title">
          <span className="hero-mask">
            <span className="hero-line">Hi, I'm Kayysan.</span>
          </span>
          <span className="hero-mask">
            <span className="hero-line">
              I build{" "}
              <em>
                <RotatingText
                  texts={["Frontend", "Backend", "Fullstack", "Mobile"]}
                  className="inline-flex"
                  mainClassName="overflow-hidden align-bottom"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.02}
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2400}
                  splitBy="characters"
                  auto
                  loop
                />
              </em>{" "}
              products.
            </span>
          </span>
        </h1>

        <p className="hero-sub">
          Full-stack developer crafting fast, expressive web experiences with
          modern tooling. Turning ideas into products that feel as good as they
          work.
        </p>

        <div className="hero-cta">
          <Link to="/contact" className="btn-primary">
            Get in touch
          </Link>
          <a href="#work" className="btn-ghost">
            See my work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
