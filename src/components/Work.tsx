import FeaturedWork from "./FeaturedWork";

interface Project {
  category: string;
  title: string;
  description: string;
  metrics: { value: string; label: string }[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    category: "E-COMMERCE, REACT, TAILWIND CSS, UI DESIGN",
    title: "A Calm, Product-First Storefront for Natural Skincare",
    description:
      "An e-commerce concept that lets the product do the talking — a catalog built around imagery, quiet typography, and an editorial checkout flow designed to feel as clean as the formulas it sells.",
    metrics: [
      { value: "3 wks", label: "CONCEPT TO SHIP" },
      { value: "100%", label: "RESPONSIVE COVERAGE" },
    ],
    image: "/project/NaturaDrops.png",
    liveUrl: "",
    repoUrl: "",
  },
  {
    category: "TYPESCRIPT, GAME LOGIC, INTERACTIVE UI",
    title: "A Chess Board That Plays by Every Rule, on Every Screen",
    description:
      "A fully playable chess application with complete move validation, check and checkmate detection, and turn handling — a board that stays sharp and responsive from desktop down to mobile.",
    metrics: [
      { value: "Full", label: "MOVE-SET COVERAGE" },
      { value: "0", label: "EXTERNAL GAME LIBS" },
    ],
    image: "/project/ChessGame.png",
    liveUrl: "",
    repoUrl: "",
  },
  {
    category: "REACT, UX DESIGN, MOBILE-FIRST",
    title: "Food Ordering Built for Speed, from Craving to Checkout",
    description:
      "A mobile-first ordering experience focused on momentum — browse the menu, customize the order, and check out in as few taps as possible without losing the appetite for detail.",
    metrics: [
      { value: "3 taps", label: "MINIMUM ORDER PATH" },
      { value: "60fps", label: "INTERACTION TARGET" },
    ],
    image: "/project/Rebites.png",
    liveUrl: "",
    repoUrl: "",
  },
];

const Work = () => {
  return (
    <section className="work" id="work">
      <div className="featured-head-wrap">
        <div className="featured-head">
          <h2 className="featured-heading">
            <span className="featured-heading-solid">FEATURED</span>{" "}
            <span className="featured-heading-outline">WORK</span>
          </h2>
          <span className="work-count">03 projects</span>
        </div>
      </div>

      <div className="featured-list">
        {projects.map((project) => (
          <FeaturedWork
            key={project.title}
            category={project.category}
            title={project.title}
            description={project.description}
            metrics={project.metrics}
            media={{
              type: "image",
              src: project.image,
              alt: `${project.title} preview`,
            }}
            cta="VIEW CASE STUDY"
            href={project.liveUrl || project.repoUrl || undefined}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
