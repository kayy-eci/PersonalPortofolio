import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { featuredCertificates } from "../data/certificates";

const AUTO_SPEED = 0.05; // deg per frame @60fps (~2 menit/lap, halus)
const DRAG_FACTOR = 0.28; // px -> deg
const INERTIA_DECAY = 0.94;
const GAP_RATIO = 0.16; // jarak antar kartu relatif ke lebar kartu

const CertificateRing = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const ring = ringRef.current;
    if (!section || !ring) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const count = featuredCertificates.length;
    const step = 360 / count;
    const items = Array.from(ring.children) as HTMLElement[];

    let rotation = 0;
    let velocity = 0;
    let radius = 0;
    let dragging = false;
    let lastX = 0;
    let raf = 0;
    let inView = true;

    // Radius dihitung dari lebar kartu aktual (responsive-safe)
    const layout = () => {
      const cardW = ring.offsetWidth || 250;
      const stepPx = cardW * (1 + GAP_RATIO);
      radius = (count * stepPx) / (2 * Math.PI);
      items.forEach((el, i) => {
        el.style.transform = `rotateY(${step * i}deg) translateZ(${radius}px)`;
      });
      render();
    };

    const render = () => {
      ring.style.transform = `translateZ(${-radius}px) rotateY(${rotation}deg)`;
    };

    const updateOpacities = () => {
      for (let i = 0; i < items.length; i++) {
        const w = (((step * i + rotation) % 360) + 360) % 360;
        const near = Math.max(0, Math.cos((w * Math.PI) / 180));
        items[i].style.opacity = (0.3 + near * 0.7).toFixed(3);
      }
    };

    // Infinite auto-rotate + inertia — satu loop rAF, skip saat off-screen
    const tick = () => {
      if (inView) {
        if (!dragging) {
          velocity *= INERTIA_DECAY;
          if (Math.abs(velocity) < 0.002) velocity = 0;
          rotation += velocity + (reduceMotion ? 0 : AUTO_SPEED);
          if (rotation > 360 || rotation < -360) rotation %= 360;
          render();
        }
        updateOpacities();
      }
      raf = requestAnimationFrame(tick);
    };

    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      velocity = 0;
      lastX = e.clientX;
      section.classList.add("is-grabbing");
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      velocity = dx * DRAG_FACTOR;
      rotation += dx * DRAG_FACTOR;
      render();
      updateOpacities();
    };

    const onPointerUp = () => {
      dragging = false;
      section.classList.remove("is-grabbing");
    };

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
    });
    observer.observe(section);

    const onResize = () => layout();

    section.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    window.addEventListener("resize", onResize);

    layout();
    updateOpacities();
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      section.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="cert-ring-section" ref={sectionRef}>
      <div className="cert-ring-inner">
        <div className="cert-ring-head">
          <h3 className="cert-ring-title">Certificates / Spotlight</h3>
          <span className="cert-ring-hint">Drag to spin</span>
        </div>

        <div className="cert-ring-stage">
          <div className="cert-ring" ref={ringRef}>
            {featuredCertificates.map((cert) => (
              <figure className="cert-ring-item" key={cert.title}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  draggable={false}
                />
                <figcaption className="cert-ring-caption">
                  {cert.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="cert-ring-cta">
          <Link to="/achievements" className="btn-ghost">
            See all certificates →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CertificateRing;
