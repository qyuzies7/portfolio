import { useEffect, useState } from "react";
import { projects } from "../projectsData";
import SunIcon from "@iconify-react/ci/sun";
import MoonOutlineIcon from "@iconify-react/basil/moon-outline";
import RoundNavigateNextIcon from "@iconify-react/ic/round-navigate-next";
import SiteFooter from "../components/SiteFooter";
import ProjectDetail from "./Projects/ProjectDetail";

function Projects() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("portfolio-theme") === "dark");
  const [selectedProject, setSelectedProject] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <main className={darkMode ? "site dark projects-site" : "site projects-site"}>
      <div className="background-pattern">
        {Array.from({ length: 6 }, (_, index) => (
          <span key={index} className={`pattern-star star-${index + 1}`}>✦</span>
        ))}
      </div>

      <header className="header">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=azidamilla@gmail.com" className="contact-label" target="_blank" rel="noreferrer">Contact Me</a>
        <nav className={`navbar${mobileMenuOpen ? " mobile-menu-open" : ""}`}>
          <a href="/projects" className="active nav-projects">Projects</a>
          <button className="hamburger-button" type="button" aria-label="Open menu" aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((prev) => !prev)}>
            <span />
            <span />
            <span />
          </button>
          <div className="mobile-nav-menu">
            <a href="/" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="/projects" className="active" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="/stack" onClick={() => setMobileMenuOpen(false)}>Stack</a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=azidamilla@gmail.com" target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)}>Contact Me</a>
          </div>
          <div className="desktop-nav-links">
            <a href="/" className="nav-home">Home</a>
            <a href="/projects" className="active nav-projects">Projects</a>
            <a href="/stack" className="nav-stack">Stack</a>
          </div>
        </nav>
        <button className="theme-toggle" onClick={() => setDarkMode((prev) => !prev)} aria-label="Toggle dark mode">
          <div className="theme-circle sun"><SunIcon /></div>
          <div className="theme-circle moon"><MoonOutlineIcon /></div>
        </button>
      </header>

      <section className="projects-page">
        <div className="projects-page-heading"><h1>PROJECTS</h1></div>

        <div className="projects-grid">
          {projects.map((project) => (
            <a
              className="projects-grid-card"
              href={`/project/${project.slug}`}
              onClick={(event) => {
                event.preventDefault();
                setSelectedProject(project.slug);
              }}
              key={project.slug}
            >
              <div className="projects-grid-media">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="projects-grid-meta">
                <h2>{project.title}</h2>
                <span>•</span>
                <p>{project.category}</p>
                <span className="projects-arrow"><RoundNavigateNextIcon aria-hidden="true" /></span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <SiteFooter />

      {selectedProject && (
        <ProjectDetail
          projectKey={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </main>
  );
}

export default Projects;
