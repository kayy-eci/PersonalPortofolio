import { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Template from "./components/template";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => (
  <>
    <Hero />
    <div className="section-divider" />
    <About />
    <Skills />
    <div className="section-divider" />
    <Achievements showAll={false} />
    <div className="section-divider" />
    <Contact />
    <Footer />
  </>
);

const AboutPage = () => (
  <>
    <About />
    <Skills />
    <Footer />
  </>
);

const AchievementsPage = () => (
  <>
    <Achievements showAll />
    <Footer />
  </>
);

const ContactPage = () => (
  <>
    <Contact />
    <Footer />
  </>
);

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const App = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>(".section, .skills-section, .footer")
        .forEach((section) => {
          gsap.fromTo(
            section,
            { autoAlpha: 0, y: 64 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: { trigger: section, start: "top 85%", once: true },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>(".about-stats, .achievements-grid")
        .forEach((group) => {
          gsap.fromTo(
            group.children,
            { autoAlpha: 0, y: 48 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.09,
              ease: "power3.out",
              scrollTrigger: { trigger: group, start: "top 82%", once: true },
            },
          );
        });

      const heroScrub = {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      } as const;

      if (document.querySelector(".hero-content")) {
        gsap.to(".hero-content", {
          yPercent: -22,
          autoAlpha: 0,
          ease: "none",
          scrollTrigger: { ...heroScrub, end: "70% top" },
        });
      }

      if (document.querySelector(".hero-cardswap")) {
        gsap.to(".hero-cardswap", {
          y: -120,
          ease: "none",
          scrollTrigger: { ...heroScrub },
        });
      }

      gsap.utils.toArray<HTMLElement>(".hero-blob").forEach((blob, i) => {
        gsap.to(blob, {
          y: [-140, -260, -200][i % 3],
          ease: "none",
          scrollTrigger: { ...heroScrub },
        });
      });
    });

    window.addEventListener("load", ScrollTrigger.refresh);
    return () => {
      window.removeEventListener("load", ScrollTrigger.refresh);
      ctx.revert();
    };
  }, [location.pathname]);

  return (
    <Template>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Template>
  );
};

export default App;
