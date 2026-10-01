interface WorkRowProps {
  index: string;
  name: string;
  category: string;
  image: string;
  description: string;
  href?: string;
  dimmed?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
}

const WorkRow = ({
  index,
  name,
  category,
  image,
  description,
  href,
  dimmed,
  onEnter,
  onLeave,
}: WorkRowProps) => {
  const className = `work-row cursor-target${dimmed ? " is-dimmed" : ""}`;

  const inner = (
    <>
      <span className="work-index">{index}</span>
      <h3 className="work-name">
        {name}
        <span className="work-arrow" aria-hidden="true">
          →
        </span>
      </h3>
      <span className="work-category">{category}</span>
      {/* Thumbnail inline — cuma muncul di mobile (no-hover) */}
      <span className="work-thumb">
        <img src={image} alt={`${name} preview`} loading="lazy" />
      </span>
      <span className="sr-only">{description}</span>
    </>
  );

  if (href) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onFocus={onEnter}
        onBlur={onLeave}
      >
        {inner}
      </a>
    );
  }

  return (
    <article
      className={className}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      tabIndex={0}
    >
      {inner}
    </article>
  );
};

export default WorkRow;
