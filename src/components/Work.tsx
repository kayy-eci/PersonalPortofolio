const projects = [
  {
    title: "NaturaDrops",
    description:
      "E-commerce concept for a natural skincare brand with a product-first catalog and a calm, editorial checkout flow.",
    image: "/project/NaturaDrops.png",
    tags: ["React", "Tailwind CSS", "E-commerce"],
  },
  {
    title: "ChessGame",
    description:
      "Interactive chess application with full move validation, turn handling, and a board that stays playable on any screen size.",
    image: "/project/ChessGame.png",
    tags: ["TypeScript", "Game Logic", "UI"],
  },
  {
    title: "Rebites",
    description:
      "Food ordering experience focused on speed: browse, customize, and order in as few taps as possible.",
    image: "/project/Rebites.png",
    tags: ["React", "UX", "Mobile-first"],
  },
];

const Work = () => {
  return (
    <section className="section work" id="work">
      <div className="work-head">
        <div>
          <span className="meta-label">Selected work</span>
          <h2>Things I've built.</h2>
        </div>
        <span className="work-count">03 projects</span>
      </div>

      <div className="work-list">
        {projects.map((project, i) => (
          <article className="work-item" key={project.title}>
            <div className="work-media">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
              />
            </div>
            <div className="work-info">
              <div>
                <div className="work-title-row">
                  <span className="work-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{project.title}</h3>
                  <span className="work-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <p className="work-desc">{project.description}</p>
              </div>
              <div className="work-side">
                <ul className="work-tags">
                  {project.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Work;
