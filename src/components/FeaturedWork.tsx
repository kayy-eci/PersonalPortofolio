import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface FeaturedWorkMetric {
  value: string;
  label: string;
}

export interface FeaturedWorkMedia {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt?: string;
}

interface FeaturedWorkProps {
  category: string;
  title: string;
  description: string;
  metrics: FeaturedWorkMetric[];
  media: FeaturedWorkMedia;
  cta: string;
  href?: string;
}

const FeaturedWork = ({
  category,
  title,
  description,
  metrics,
  media,
  cta,
  href,
}: FeaturedWorkProps) => {
  const cardRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".featured-media",
        { xPercent: 0, yPercent: 0, scale: 1 },
        {
          xPercent: -6,
          yPercent: 1.5,
          scale: 1.04,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, card);

    return () => ctx.revert();
  }, []);

  const renderMedia = () => {
    if (media.type === "video") {
      return (
        <video
          className="featured-media"
          src={media.src}
          poster={media.poster}
          autoPlay
          muted
          loop
          playsInline
        />
      );
    }
    return (
      <img
        className="featured-media"
        src={media.src}
        alt={media.alt ?? ""}
        loading="lazy"
      />
    );
  };

  return (
    <article className="featured-card cursor-target" ref={cardRef}>
      <div className="featured-info">
        <span className="featured-category">{category}</span>
        <h3 className="featured-title">{title}</h3>
        <p className="featured-desc">{description}</p>

        <div className="featured-metrics">
          {metrics.map((metric) => (
            <div className="featured-metric" key={metric.label}>
              <span className="featured-metric-value">{metric.value}</span>
              <span className="featured-metric-label">{metric.label}</span>
            </div>
          ))}
        </div>

        {href ? (
          <a
            className="featured-cta"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cta}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </a>
        ) : (
          <span className="featured-cta">
            {cta}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </span>
        )}
      </div>

      <div className="featured-showcase">
        <span className="featured-frame" aria-hidden="true" />
        <div className="featured-viewport">{renderMedia()}</div>
      </div>
    </article>
  );
};

export default FeaturedWork;
