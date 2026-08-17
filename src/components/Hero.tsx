import { ArrowDown, Sparkles, Download } from "lucide-react";
import RotatingText from "./RotatingText";
import CardSwap, { Card } from "./CardSwap";

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
          Hi, I'm <span className="text-[#6551fc]">Kayysan</span>
          <br />
          <RotatingText
            texts={["FrontEnd", "BackEnd", "Fullstack", "Mobile"]}
            className="hero-title"
            mainClassName="px-2 sm:px-2 md:px-3 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2500}
            splitBy="characters"
            auto
            loop
          />
          Developer
        </h1>

        <p className="hero-subtitle">
          I build beautiful, performant web experiences with modern
          technologies. Turning ideas into elegant digital products.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            <Sparkles size={18} />
            Get In Touch
          </a>
          <a className="btn-secondary">
            <Download size={18}/>
            Downlaod CV
          </a>
        </div>
      </div>
      <div className="hero-cardswap">
        <CardSwap
          width={650}
          height={340}
          cardDistance={80}
          verticalDistance={90}
          delay={5000}
          pauseOnHover={true}
        >
          <Card customClass="card-gradient-1">
            <img src="/project/NaturaDrops.png" />
          </Card>
          <Card customClass="card-gradient-4">
            <img src="/project/ChessGame.png" />
          </Card>
          <Card customClass="card-gradient-5">
            <img src="/project/Rebites.png" />
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
