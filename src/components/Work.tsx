import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import WorkRow from "./FeaturedWork";

interface Project {
  name: string;
  category: string;
  description: string;
  image: string;
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    name: "NATURA",
    category: "E-COMMERCE",
    description:
      "A calm, product-first storefront for natural skincare — catalog built around imagery, quiet typography, and an editorial checkout flow.",
    image: "/project/NaturaDrops.png",
    liveUrl: "",
    repoUrl: "",
  },
  {
    name: "CHESS",
    category: "GAME LOGIC",
    description:
      "A fully playable chess app with complete move validation, check and checkmate detection, responsive from desktop to mobile.",
    image: "/project/ChessGame.png",
    liveUrl: "",
    repoUrl: "",
  },
  {
    name: "REBITES",
    category: "FOOD ORDERING",
    description:
      "A mobile-first food ordering experience — browse, customize, and check out in as few taps as possible.",
    image: "/project/Rebites.png",
    liveUrl: "",
    repoUrl: "",
  },
];

const Work = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const preview = previewRef.current;
    if (!section || !preview) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    gsap.set(preview, { autoAlpha: 0, scale: 0.85, rotate: 0 });

    const xTo = gsap.quickTo(preview, "x", {
      duration: 0.55,
      ease: "power3",
    });
    const yTo = gsap.quickTo(preview, "y", {
      duration: 0.55,
      ease: "power3",
    });
    const rTo = gsap.quickTo(preview, "rotation", {
      duration: 0.6,
      ease: "power3",
    });
    let lastX = 0;

    const handleMove = (e: MouseEvent) => {
      // Offset biar preview nggak nutupin cursor: sedikit ke kanan-atas
      xTo(e.clientX + 28);
      yTo(e.clientY - 140);
      const vx = e.clientX - lastX;
      lastX = e.clientX;
      rTo(gsap.utils.clamp(-10, 10, vx * 0.35));
    };

    const handleLeaveSection = () => setActiveIndex(null);

    section.addEventListener("mousemove", handleMove);
    section.addEventListener("mouseleave", handleLeaveSection);
    return () => {
      section.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseleave", handleLeaveSection);
    };
  }, []);

  useLayoutEffect(() => {
    const preview = previewRef.current;
    if (!preview) return;
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(preview, { autoAlpha: activeIndex !== null ? 1 : 0 });
      return;
    }
    gsap.to(preview, {
      autoAlpha: activeIndex !== null ? 1 : 0,
      scale: activeIndex !== null ? 1 : 0.85,
      duration: 0.35,
      ease: "power3.out",
      overwrite: "auto",
    });
  }, [activeIndex]);

  return (
    <section className="work" id="work" ref={sectionRef}>
      <div className="featured-head-wrap">
        <div className="featured-head">
          <h2 className="featured-heading">
            <span className="featured-heading-solid">SELECTED</span>{" "}
            <span className="featured-heading-outline">WORK</span>
          </h2>
          <span className="work-count">
            {String(projects.length).padStart(2, "0")} projects
          </span>
        </div>
      </div>

      <div className="work-list-wrap">
        <div className="work-list-head" aria-hidden="true">
          <span>INDEX</span>
          <span>PROJECT</span>
          <span className="work-list-head-cat">CATEGORY</span>
        </div>

        <div className="work-list">
          {projects.map((project, i) => (
            <WorkRow
              key={project.name}
              index={String(i + 1).padStart(2, "0")}
              name={project.name}
              category={project.category}
              image={project.image}
              description={project.description}
              href={project.liveUrl || project.repoUrl || undefined}
              dimmed={activeIndex !== null && activeIndex !== i}
              onEnter={() => setActiveIndex(i)}
              onLeave={() => setActiveIndex(null)}
            />
          ))}
        </div>
      </div>

      {/* Floating preview — desktop only, ngikutin cursor */}
      <div
        className="work-floating-preview"
        ref={previewRef}
        aria-hidden="true"
      >
        {projects.map((project, i) => (
          <img
            key={project.name}
            src={project.image}
            alt=""
            loading={i === 0 ? "eager" : "lazy"}
            className={
              activeIndex === i
                ? "work-floating-img is-active"
                : "work-floating-img"
            }
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
