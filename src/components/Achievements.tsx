import { useState } from "react";
import { Link } from "react-router-dom";
import { certificates as achievements } from "../data/certificates";

interface AchievementsProps {
  showAll?: boolean;
}


const Achievements = ({ showAll = false }: AchievementsProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const visibleAchievements = showAll ? achievements : achievements.slice(0, 6);
  const hasMore = achievements.length > 6 && !showAll;

  return (
    <section className="section" id="achievements">
      <div className="page-head">
        <span className="meta-label">Recognition</span>
        <h2>Certificates.</h2>
        <p className="page-sub">
          Courses and certifications I've completed to sharpen my skills.
        </p>
      </div>

      <div className="achievements-grid">
        {visibleAchievements.map((achievement) => (
          <article
            key={achievement.title}
            className="achievement-card cursor-target"
          >
            <div
              className="achievement-thumb"
              onClick={() => setSelectedImage(achievement.image)}
            >
              <img
                src={achievement.image}
                alt={achievement.title}
                loading="lazy"
              />
            </div>
            <p className="achievement-meta">
              {achievement.issuer} · {achievement.date}
            </p>
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-desc">{achievement.description}</p>
            <div className="achievement-tags">
              {achievement.tags.map((tag) => (
                <span key={tag} className="achievement-tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {hasMore && (
        <div className="achievement-actions">
          <Link to="/achievements" className="btn-ghost">
            View all certificates
          </Link>
        </div>
      )}

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={selectedImage}
            alt="Certificate"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Achievements;
