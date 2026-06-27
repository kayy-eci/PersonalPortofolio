import { ArrowDown, Sparkles } from 'lucide-react';
import CardSwap, { Card } from './CardSwap';

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Animated blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />

      {/* Left content */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="dot" />
          Available for work
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Kayysan</span>
          <br />
          Creative Developer
        </h1>

        <p className="hero-subtitle">
          I build beautiful, performant web experiences with modern technologies.
          Turning ideas into elegant digital products.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            <Sparkles size={18} />
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>

      {/* Right side — CardSwap */}
      <div className="hero-cardswap">
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={true}
        >
          <Card customClass="card-gradient-1">
            <div className="card-inner">
              <span className="card-label">Smooth</span>
              <span className="card-big">K</span>
            </div>
          </Card>
          <Card customClass="card-gradient-2">
            <div className="card-inner">
              <span className="card-label">Creative</span>
              <span className="card-big">{'</>'}</span>
            </div>
          </Card>
          <Card customClass="card-gradient-3">
            <div className="card-inner">
              <span className="card-label">Reliable</span>
              <span className="card-big">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </span>
            </div>
          </Card>
        </CardSwap>
      </div>

      <div className="hero-scroll">
        <ArrowDown size={20} color="var(--text-secondary)" />
      </div>
    </section>
  );
};

export default Hero;
