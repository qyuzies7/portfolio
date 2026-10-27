import { useEffect, useRef, useState } from "react";
import TextType from "../TextType";
import { projects } from "../projectsData";
import bintang from "../assets/bintang.png";
import bintangDark from "../assets/bintangdark.png";
import petir from "../assets/petir.png";
import petirDark from "../assets/petirdark.png";
import aku from "../assets/aku.png";
import me from "../assets/me.jpeg";
import SunIcon from "@iconify-react/ci/sun";
import MoonOutlineIcon from "@iconify-react/basil/moon-outline";
import HtmlIcon from "@iconify-react/catppuccin/html";
import CssFillIcon from "@iconify-react/akar-icons/css-fill";
import JavascriptIcon from "@iconify-react/devicon/javascript";
import DartIcon from "@iconify-react/devicon/dart";
import PhpIcon from "@iconify-react/devicon/php";
import JavaIcon from "@iconify-react/devicon/java";
import ReactIcon from "@iconify-react/devicon/react";
import ViteIcon from "@iconify-react/catppuccin/vite";
import FlutterIcon from "@iconify-react/devicon/flutter";
import LaravelIcon from "@iconify-react/devicon/laravel";
import FigmaIcon from "@iconify-react/devicon/figma";
import PostmanIcon from "@iconify-react/devicon/postman";
import AwsIcon from "@iconify-react/logos/aws";
import GitIcon from "@iconify-react/bxl/git";
import GithubFillIcon from "@iconify-react/akar-icons/github-fill";
import MongodbIcon from "@iconify-react/selfhst/mongodb";
import MysqlIcon from "@iconify-react/logos/mysql";
import OracleIcon from "@iconify-react/logos/oracle";
import LinkedinBoxFillIcon from "@iconify-react/akar-icons/linkedin-box-fill";

const stackRows = [
  [[HtmlIcon, "HTML"], [CssFillIcon, "CSS"], [JavascriptIcon, "JavaScript"], [DartIcon, "Dart"], [PhpIcon, "PHP"], [JavaIcon, "Java"]],
  [[ReactIcon, "React"], [ViteIcon, "Vite"], [FlutterIcon, "Flutter"], [LaravelIcon, "Laravel"], [FigmaIcon, "Figma"], [PostmanIcon, "Postman"]],
  [[AwsIcon, "AWS"], [GitIcon, "Git"], [GithubFillIcon, "GitHub"], [MongodbIcon, "MongoDB"], [MysqlIcon, "MySQL"], [OracleIcon, "Oracle"]],
];

const stackCategories = [
  ["LANGUAGES", ["JavaScript", "PHP", "Java", "Dart"]],
  ["FRAMEWORKS & LIBRARIES", ["React", "Tailwind CSS", "Laravel", "Vite", "Flutter"]],
  ["DATABASES & SERVICES", ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "AWS"]],
  ["TOOLS", ["Git", "GitHub", "Postman", "Figma"]],
];

function Home() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("portfolio-theme") === "dark");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredCardKey, setHoveredCardKey] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [viewPosition, setViewPosition] = useState({ x: 0, y: 0 });
  const projectTrackRef = useRef(null);
  const projectPositionRef = useRef(0);
  const projectHoverRef = useRef(false);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const normalSpeed = 0.65;
    const hoverSpeed = 0.14;
    let animationFrame;

    const moveProjects = () => {
      const track = projectTrackRef.current;
      const loopWidth = track ? track.scrollWidth / 2 : 0;

      if (track && loopWidth > 0) {
        projectPositionRef.current -= projectHoverRef.current ? hoverSpeed : normalSpeed;

        if (projectPositionRef.current <= -loopWidth) {
          projectPositionRef.current += loopWidth;
        }

        track.style.transform = `translate3d(${projectPositionRef.current}px, 0, 0)`;
      }

      animationFrame = window.requestAnimationFrame(moveProjects);
    };

    animationFrame = window.requestAnimationFrame(moveProjects);

    return () => window.cancelAnimationFrame(animationFrame);
  }, []);


  const handleNavClick = (id) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const go = (path) => {
    window.location.href = path;
  };

  const updateViewPosition = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    setViewPosition({
      x: event.clientX - bounds.left + 55,
      y: event.clientY - bounds.top,
    });
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className={darkMode ? "site dark" : "site"}>
      <div className="background-pattern">
        {Array.from({ length: 6 }, (_, index) => <span key={index} className={`pattern-star star-${index + 1}`}>✦</span>)}
      </div>

      <header className="header">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=azidamilla@gmail.com" className="contact-label" target="_blank" rel="noreferrer">Contact Me</a>
        <nav className={`navbar${mobileMenuOpen ? " mobile-menu-open" : ""}`}>
          <a
            href="#home"
            className={`${activeNav === "home" ? "active " : ""}nav-home`}
            onClick={(event) => {
              event.preventDefault();
              handleNavClick("home");
            }}
          >
            Home
          </a>
          <button className="hamburger-button" type="button" aria-label="Open menu" aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((prev) => !prev)}>
            <span />
            <span />
            <span />
          </button>
          <div className="mobile-nav-menu">
            <a href="/projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="/stack" onClick={() => setMobileMenuOpen(false)}>Stack</a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=azidamilla@gmail.com" target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)}>Contact Me</a>
          </div>
          <div className="desktop-nav-links">
            <a href="/" className={activeNav === "home" ? "active nav-home" : "nav-home"}>Home</a>
            <a href="/projects" className="nav-projects">Projects</a>
            <a href="/stack" className="nav-stack">Stack</a>
          </div>
        </nav>
        <button className="theme-toggle" onClick={() => setDarkMode((prev) => !prev)} aria-label="Toggle dark mode">
          <div className="theme-circle sun"><SunIcon /></div>
          <div className="theme-circle moon"><MoonOutlineIcon /></div>
        </button>
      </header>

      <section id="home" className="hero">
        <div className="greeting">Hi, I’m Azida</div>
        <img src={darkMode ? bintangDark : bintang} alt="" className="star-image" />
        <div className="hero-content">
          <TextType text={["SOFTWARE\nDEVELOPER"]} typingSpeed={55} pauseDuration={2500} showCursor={false} cursorCharacter="▎" deletingSpeed={75} />
        </div>
        <div className="scroll-indicator" aria-hidden="true"><span className="scroll-label">SCROLL</span><span className="scroll-line" /></div>
        <img src={darkMode ? petirDark : petir} alt="" className="lightning-image" />
      </section>

      <section id="about" className="content-section about-section">
        <span className="about-star about-star-top-left">✦</span><span className="about-star about-star-top-right">✦</span><span className="about-star about-star-bottom-left">✦</span><span className="about-star about-star-bottom-right">✦</span>
        <div>
          <h2 className="about-title">ABOUT</h2>
          <div className="about-body">
            <div className="about-text">
              <h3 className="about-copy">I'm a Software Developer with a strong interest<br></br>{" "}in web and mobile application development.<br></br>{" "}I enjoy exploring how technology can<br></br>{" "}solve everyday problems and turning project ideas<br></br>{" "}into practical digital solutions.</h3>
              <p className="about-description">My experience includes developing application features, integrating APIs, working with databases, and translating UI designs into functional interfaces. I'm always curious to learn, experiment with new technologies, and grow as a developer through every project I work on.</p>
            </div>
            <img className="about-photo" src={me} alt="Azida" />
          </div>
        </div>
      </section>

      <section id="experience" className="content-section experience-section">
        <span className="experience-star experience-star-top-left">✦</span><span className="experience-star experience-star-top-right">✦</span><span className="experience-star experience-star-bottom-left">✦</span><span className="experience-star experience-star-bottom-right">✦</span>
        <div className="experience-heading-row">
          <h2 className="experience-title">EXPERIENCE</h2>
        </div>
        <div className="experience-list">
          <article className="experience-item">
            <div className="experience-date">
              <span>JUL — NOV</span>
              <span>2025</span>
            </div>
            <div>
              <h3>Web Developer Intern</h3>
              <p className="experience-company">PT Kereta Api Indonesia (KAI) DAOP 6 Yogyakarta</p>
              <ul>
                <li>Developed a web-based visitor card application for visitor registration and visit request management.</li>
                <li>Built the backend using Laravel and integrated it with the frontend through REST APIs.</li>
                <li>Developed admin and user interfaces using React and Tailwind CSS, with PostgreSQL as the database.</li>
                <li>Tested application functionality with IT staff before deployment.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section id="project" className="content-section project-section">
        <span className="project-star project-star-top-left">✦</span><span className="project-star project-star-top-right">✦</span><span className="project-star project-star-bottom-left">✦</span><span className="project-star project-star-bottom-right">✦</span>
        <div className="project-heading-row">
          <h2 className="project-title">PROJECTS</h2>
          <a href="/projects" className="project-button"><span className="project-button-desktop">View All Project</span><span className="project-button-mobile">View All</span></a>
        </div>

        <div className="project-content" onMouseMove={updateViewPosition} onMouseLeave={() => { projectHoverRef.current = false; setHoveredProject(null); setHoveredCardKey(null); }}>
          <div className="project-track" ref={projectTrackRef}>
            {[...projects, ...projects].map((project, index) => (
              <article
                className={hoveredCardKey === `${project.slug}-${index}` ? "project-card project-card-active" : "project-card"}
                key={`${project.slug}-${index}`}
                onMouseEnter={() => { projectHoverRef.current = true; setHoveredProject(project.slug); setHoveredCardKey(`${project.slug}-${index}`); }}
                onClick={() => go(`/project/${project.slug}`)}
              >
                <div className="project-card-media">
                  <img src={project.image} alt={project.title} />
                  <span>{project.title}</span>
                </div>
              </article>
            ))}
          </div>
          {hoveredProject && (
            <button className="project-view-cursor" style={{ left: `${viewPosition.x}px`, top: `${viewPosition.y}px` }} onClick={() => go(`/project/${hoveredProject}`)}>View</button>
          )}
        </div>
      </section>

      <section id="stack" className="content-section stack-section">
        <span className="stack-star stack-star-top-left">✦</span><span className="stack-star stack-star-top-right">✦</span><span className="stack-star stack-star-bottom-left">✦</span><span className="stack-star stack-star-bottom-right">✦</span>
        <h2 className="stack-title">STACK &amp; TOOLS</h2>
        <div className="stack-categories">
          {stackCategories.map(([category, technologies]) => (
            <div className="stack-category" key={category}>
              <h3>{category}</h3>
              <div className="stack-chips">
                {technologies.map((technology) => <span className="stack-chip" key={technology}>{technology}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section flow-section flow-marquee-section">
        <div className="flow-marquee" aria-label="Get in Touch">
          <div className="flow-marquee-track">
            <span>GET IN TOUCH <b>✦</b></span>
            <span>GET IN TOUCH <b>✦</b></span>
            <span>GET IN TOUCH <b>✦</b></span>
            <span>GET IN TOUCH <b>✦</b></span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer-main">
          <div className="site-footer-photo-frame">
            <img src={aku} alt="Azida" className="site-footer-photo" />
          </div>
          <div className="site-footer-cta">
            <h2>LET'S WORK TOGETHER</h2>
            <p>Open to opportunities, collaborations, and interesting ideas. Let's connect!</p>
            <div className="site-footer-buttons">
              <a className="site-footer-button" href="https://mail.google.com/mail/?view=cm&fs=1&to=azidamilla@gmail.com" target="_blank" rel="noreferrer">Gmail</a>
              <a className="site-footer-button" href="https://www.linkedin.com/in/azidakautsar/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="site-footer-button" href="https://github.com/qyuzies7" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;
