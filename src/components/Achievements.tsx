import { useState } from "react";
import { Link } from "react-router-dom";
import { Award, X } from "lucide-react";

interface Achievement {
  title: string;
  issuer: string;
  date: string;
  image: string;
  tags: string[];
  description: string;
}

const achievements: Achievement[] = [
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    date: "2025",
    image: "/certificates/dicoding-js.jpg",
    tags: ["JavaScript", "Fundamentals"],
    description:
      "Completed the JavaScript basics course covering variables, data types, functions, objects, and modules.",
  },
  {
    title: "Pengenalan ke Logika Pemrograman",
    issuer: "Dicoding Indonesia",
    date: "2026",
    image: "/certificates/dicoding-logic.png",
    tags: ["Logic", "Problem Solving"],
    description:
      "Programming Logic 101 — foundational logic and problem-solving skills for software development.",
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "2025",
    image: "/certificates/dicoding-web.jpg",
    tags: ["HTML", "CSS", "Web"],
    description:
      "Fundamentals of web programming including HTML, CSS, semantic markup, and responsive design.",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "July 2025",
    image: "/certificates/freecodecamp.png",
    tags: ["CSS", "Responsive", "Accessibility"],
    description:
      "Developer certification covering responsive design principles, accessibility, and CSS layout techniques.",
  },
  {
    title: "Belajar Dasar Git dengan GitHub",
    issuer: "Dicoding Indonesia",
    date: "2026",
    image: "/certificates/git-github.png",
    tags: ["Git", "GitHub", "Version Control"],
    description:
      "Version control fundamentals with Git and GitHub including branching, merging, and collaboration workflows.",
  },
  {
    title: "IT HERO Level 6 — Python Start",
    issuer: "Algorithms International",
    date: "March 2025",
    image: "/certificates/python.jpg",
    tags: ["Python", "OOP", "Game Dev"],
    description:
      "Python programming covering basics, control structures, functions, modules, OOP, and PyGame development.",
  },
  {
    title: "Google Cloud Digital Leader",
    issuer: "Google Cloud",
    date: "2026",
    image: "/certificates/googlecloud.png",
    tags: ["Cloud", "Google Cloud", "Fundamentals"],
    description:
      "A foundational Google Cloud certification covering core cloud concepts, digital transformation, and modern cloud solutions.",
  },
  {
    title: "AI Fundamentals",
    issuer: "Certificate",
    date: "2025",
    image: "/certificates/AiFundamental.png",
    tags: ["AI", "Fundamentals"],
    description:
      "A certificate showcasing foundational knowledge in artificial intelligence concepts and workflows.",
  },
  {
    title: "Claude Basics",
    issuer: "Certificate",
    date: "2025",
    image: "/certificates/BasicClaude.png",
    tags: ["AI", "Claude"],
    description:
      "A learning milestone covering the basics of working with Claude-based AI tools.",
  },
  {
    title: "LLM Basics",
    issuer: "Certificate",
    date: "2025",
    image: "/certificates/BasicLLM.png",
    tags: ["AI", "LLM"],
    description:
      "A certificate highlighting foundational understanding of large language models and their use cases.",
  },
  {
    title: "DCC Certificate",
    issuer: "Certificate",
    date: "2025",
    image: "/certificates/DCC.jpg",
    tags: ["Certificate", "Development"],
    description:
      "A certificate from a development-focused learning program included in my growing portfolio.",
  },
  {
    title: "Prompt Engineering",
    issuer: "Certificate",
    date: "2025",
    image: "/certificates/PromptEngineering.jpg",
    tags: ["AI", "Prompting"],
    description:
      "A certificate reflecting practice in crafting effective prompts for AI-assisted workflows.",
  },
  {
    title: "Certificate of Completion",
    issuer: "Certificate",
    date: "2025",
    image: "/certificates/sertifkat.jpeg",
    tags: ["Completion", "Achievement"],
    description:
      "A completion certificate recognizing progress in a learning journey and continued development.",
  },
  {
    title: "TypeScript Essentials",
    issuer: "Certificate",
    date: "2025",
    image: "/certificates/TypeScript.jpg",
    tags: ["TypeScript", "Programming"],
    description:
      "A certificate covering core TypeScript concepts for building safer and more scalable applications.",
  },
  {
    title: "Level Test Certificate",
    issuer: "Certificate",
    date: "2025",
    image: "/certificates/UjiLevel.jpeg",
    tags: ["Assessment", "Skill Test"],
    description:
      "A certificate from a skill-level assessment that helped measure my technical progress.",
  },
  {
    title: "Vibe Coding",
    issuer: "Certificate",
    date: "2025",
    image: "/certificates/VibeCoding.jpg",
    tags: ["AI", "Development"],
    description:
      "A certificate related to a modern coding approach that blends creativity, speed, and AI assistance.",
  },
  {
    title: "Write with AI",
    issuer: "Certificate",
    date: "2025",
    image: "/certificates/WriteWithAI.png",
    tags: ["AI", "Writing"],
    description:
      "A certificate highlighting skills in using AI to improve writing quality and productivity.",
  },
];

interface AchievementsProps {
  showAll?: boolean;
}

const Achievements = ({ showAll = false }: AchievementsProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const visibleAchievements = showAll ? achievements : achievements.slice(0, 6);
  const hasMore = achievements.length > 6 && !showAll;

  return (
    <section className="section" id="achievements">
      <div className="section-label">Achievements</div>
      <h2 className="section-title">Certificates & Certifications</h2>
      <p className="section-subtitle">
        Courses and certifications I've completed to sharpen my skills.
      </p>

      <div className="achievements-grid">
        {visibleAchievements.map((a) => (
          <div key={a.title} className="achievement-card">
            <div
              className="achievement-thumb"
              onClick={() => setSelectedImage(a.image)}
            >
              <img src={a.image} alt={a.title} loading="lazy" />
              <div className="achievement-overlay">
                <Award size={24} />
                <span>View Certificate</span>
              </div>
            </div>
            <div className="achievement-body">
              <div className="achievement-tags">
                {a.tags.map((t) => (
                  <span key={t} className="achievement-tag">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="achievement-title">{a.title}</h3>
              <p className="achievement-issuer">
                {a.issuer} · {a.date}
              </p>
              <p className="achievement-desc">{a.description}</p>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="achievement-actions">
          <Link to="/achievements" className="btn-secondary">
            See all certificates
          </Link>
        </div>
      )}

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
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
