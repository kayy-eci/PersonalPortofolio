import { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Template from "./components/template";
import "./App.css";

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

const App = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      ".section, .skills-section, .footer",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    sections.forEach((s) => {
      gsap.set(s, { opacity: 0, y: 50 });
      observer.observe(s);
    });

    return () => observer.disconnect();
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
