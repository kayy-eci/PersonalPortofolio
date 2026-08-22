import { animatePageIn, animatePageOut } from "../utils/animations";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Template({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      animatePageOut(() => {
        animatePageIn();
      });
    });

    return () => window.cancelAnimationFrame(raf);
  }, [location.pathname]);

  return (
    <div className="min-h-screen overflow-x-hidden overflow-y-auto">
      <div
        id="banner-1"
        className="min-h-screen bg-[#6551fc] z-60 fixed top-0 left-0 w-1/4 pointer-events-none"
      />
      <div
        id="banner-2"
        className="min-h-screen bg-[#6551fc] z-60 fixed top-0 left-1/4 w-1/4 pointer-events-none"
      />
      <div
        id="banner-3"
        className="min-h-screen bg-[#6551fc] z-60 fixed top-0 left-2/4 w-1/4 pointer-events-none"
      />
      <div
        id="banner-4"
        className="min-h-screen bg-[#6551fc] z-60 fixed top-0 left-3/4 w-1/4 pointer-events-none"
      />
      <div className="relative z-10 min-h-screen">{children}</div>
    </div>
  );
}
