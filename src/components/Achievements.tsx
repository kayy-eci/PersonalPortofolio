import { useState } from 'react';
import { Award, X } from 'lucide-react';

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
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding Indonesia',
    date: '2025',
    image: '/certificates/dicoding-js.jpg',
    tags: ['JavaScript', 'Fundamentals'],
    description: 'Completed the JavaScript basics course covering variables, data types, functions, objects, and modules.',
  },
  {
    title: 'Pengenalan ke Logika Pemrograman',
    issuer: 'Dicoding Indonesia',
    date: '2026',
    image: '/certificates/dicoding-logic.png',
    tags: ['Logic', 'Problem Solving'],
    description: 'Programming Logic 101 — foundational logic and problem-solving skills for software development.',
  },
  {
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding Indonesia',
    date: '2025',
    image: '/certificates/dicoding-web.jpg',
    tags: ['HTML', 'CSS', 'Web'],
    description: 'Fundamentals of web programming including HTML, CSS, semantic markup, and responsive design.',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'July 2025',
    image: '/certificates/freecodecamp.png',
    tags: ['CSS', 'Responsive', 'Accessibility'],
    description: 'Developer certification covering responsive design principles, accessibility, and CSS layout techniques.',
  },
  {
    title: 'Belajar Dasar Git dengan GitHub',
    issuer: 'Dicoding Indonesia',
    date: '2026',
    image: '/certificates/git-github.png',
    tags: ['Git', 'GitHub', 'Version Control'],
    description: 'Version control fundamentals with Git and GitHub including branching, merging, and collaboration workflows.',
  },
  {
    title: 'IT HERO Level 6 — Python Start',
    issuer: 'Algorithms International',
    date: 'March 2025',
    image: '/certificates/python.jpg',
    tags: ['Python', 'OOP', 'Game Dev'],
    description: 'Python programming covering basics, control structures, functions, modules, OOP, and PyGame development.',
  },
];

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="section" id="projects">
      <div className="section-label">Achievements</div>
      <h2 className="section-title">Certificates & Certifications</h2>
      <p className="section-subtitle">
        Courses and certifications I've completed to sharpen my skills.
      </p>

      <div className="achievements-grid">
        {achievements.map((a) => (
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
                  <span key={t} className="achievement-tag">{t}</span>
                ))}
              </div>
              <h3 className="achievement-title">{a.title}</h3>
              <p className="achievement-issuer">{a.issuer} · {a.date}</p>
              <p className="achievement-desc">{a.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
            <X size={24} />
          </button>
          <img src={selectedImage} alt="Certificate" className="lightbox-img" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
};

export default Achievements;
