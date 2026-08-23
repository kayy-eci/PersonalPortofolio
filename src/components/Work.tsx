interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  year?: string;
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    title: "NaturaDrops",
    description:
      "E-commerce concept for a natural skincare brand with a product-first catalog and a calm, editorial checkout flow.",
    image: "/project/NaturaDrops.png",
    tags: ["React", "Tailwind CSS", "E-commerce"],
    year: "",
    liveUrl: "",
    repoUrl: "",
  },
  {
    title: "ChessGame",
    description:
      "Interactive chess application with full move validation, turn handling, and a board that stays playable on any screen size.",
    image: "/project/ChessGame.png",
    tags: ["TypeScript", "Game Logic", "UI"],
    year: "",
    liveUrl: "",
    repoUrl: "",
  },
  {
    title: "Rebites",
    description:
      "Food ordering experience focused on speed: browse, customize, and order in as few taps as possible.",
    image: "/project/Rebites.png",
    tags: ["React", "UX", "Mobile-first"],
    year: "",
    liveUrl: "",
    repoUrl: "",
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

      <div className="stack-cards">
        {projects.map((project, i) => (
          <article className="stack-card cursor-target" key={project.title}>
            <div className="stack-media">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading={i === 0 ? undefined : "lazy"}
              />
            </div>

            <div className="stack-info">
              <div className="work-title-row">
                <span className="work-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{project.title}</h3>
                {project.year ? (
                  <span className="stack-year">{project.year}</span>
                ) : null}
              </div>

              <p className="work-desc">{project.description}</p>

              <ul className="work-tags">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>

              {(project.liveUrl || project.repoUrl) && (
                <div className="card-links">
                  {project.liveUrl && (
                    <a
                      className="card-link"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit site{" "}
                      <span className="arrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      className="card-link"
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub{" "}
                      <span className="arrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Work;
