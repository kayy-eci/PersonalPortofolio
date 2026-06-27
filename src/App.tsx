import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  useLayoutEffect(() => {
    // Fade-in each section on scroll
    const sections = document.querySelectorAll<HTMLElement>(
      '.section, .skills-section, .footer'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    sections.forEach((s) => {
      gsap.set(s, { opacity: 0, y: 50 });
      observer.observe(s);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Achievements />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
