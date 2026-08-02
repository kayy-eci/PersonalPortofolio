import gsap from "gsap";

const getBanners = () => {
  const bannerIds = ["banner-1", "banner-2", "banner-3", "banner-4"];
  return bannerIds
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => Boolean(el));
};

export const animatePageIn = () => {
  const banners = getBanners();

  if (!banners.length) return;

  const tl = gsap.timeline();

  tl.set(banners, {
    yPercent: 0,
    opacity: 1,
  }).to(banners, {
    yPercent: 100,
    stagger: 0.08,
    duration: 0.5,
    ease: "power3.inOut",
  });
};

export const animatePageOut = (onComplete?: () => void) => {
  const banners = getBanners();

  if (!banners.length) return;

  const tl = gsap.timeline();

  tl.set(banners, {
    yPercent: -100,
    opacity: 1,
  }).to(banners, {
    yPercent: 0,
    stagger: 0.08,
    duration: 0.5,
    ease: "power3.inOut",
    onComplete,
  });
};
