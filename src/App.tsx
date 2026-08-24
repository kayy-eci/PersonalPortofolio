import { useLayoutEffect, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Template from "./components/template";
import TargetCursor from "./components/TargetCursor";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => (
  <>
    <Hero />
    <div className="section-divider" />
    <Work />
    <Skills />
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

  useEffect(() => {
    if (!location.hash) return;
    const target = document.querySelector(location.hash);
    if (target) {
      window.setTimeout(
        () => target.scrollIntoView({ behavior: "smooth" }),
        100,
      );
    }
  }, [location]);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>(".section:not(.work), .skills-section, .footer")
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

      gsap.fromTo(
        ".featured-head",
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".featured-head",
            start: "top 85%",
            once: true,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>(".featured-card").forEach((card) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 56 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
          },
        );
      });

      gsap.utils
        .toArray<HTMLElement>(".about-stats, .achievements-grid")
        .forEach((group) => {
          gsap.fromTo(
            group.children,
            { autoAlpha: 0, y: 56 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.85,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: { trigger: group, start: "top 82%", once: true },
            },
          );
        });

      if (document.querySelector(".hero-inner")) {
        gsap.to(".hero-inner", {
          yPercent: -14,
          autoAlpha: 0.25,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "70% top",
            scrub: true,
          },
        });
      }
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [location.pathname]);

  return (
    <Template>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
        cursorColor="#9a9a9a"
        cursorColorOnTarget="#e1ff5f"
      />
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
