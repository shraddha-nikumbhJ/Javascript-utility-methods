import { useNavigate } from "react-router-dom";
import "../styles/main.scss";

export const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Product Listing",
      description:
        "Responsive virtualized product listing with lazy loading and optimized rendering.",
      buttonText: "View Products",
      path: "/products"
    },
    {
      title: "Product Dashboard",
      description:
        "Search, pagination, accessibility and RTK Query powered product dashboard.",
      buttonText: "Open Dashboard",
      path: "/dashboard"
    }
  ];

  const technologies = [
    "React 19",
    "TypeScript",
    "Vite",
    "Redux Toolkit",
    "RTK Query",
    "SCSS",
    "Jest",
    "React Testing Library",
    "GitHub Actions",
    "Vercel",
    "Accessibility",
    "Virtualization"
  ];

  return (
    <main className="homepage">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Modern React Product Platform</h1>

          <p>
            A scalable frontend application built using modern React ecosystem
            tools including Vite, Redux Toolkit, RTK Query, Virtualization,
            CI/CD for code deployment and automated frontend testing.
          </p>
        </div>
      </section>

      <section className="features-section">
        <h2>Project Features</h2>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <button onClick={() => navigate(feature.path)}>
                {feature.buttonText}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="tech-section">
        <h2>Technology Stack</h2>

        <div className="tech-grid">
          {technologies.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="performance-section">
        <div className="performance-card">
          <h2>Performance Optimized</h2>

          <p>
            Includes lazy loading, code splitting, virtualization, responsive
            layouts, accessibility improvements and optimized bundle handling.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>Built using Modern React Frontend Architecture</p>
      </footer>
    </main>
  );
};
