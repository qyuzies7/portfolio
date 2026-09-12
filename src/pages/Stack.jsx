import { useEffect, useState } from "react";
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
import SiteFooter from "../components/SiteFooter";

const stackRows = [
  [[HtmlIcon, "HTML"], [CssFillIcon, "CSS"], [JavascriptIcon, "JavaScript"], [DartIcon, "Dart"], [PhpIcon, "PHP"], [JavaIcon, "Java"]],
  [[ReactIcon, "React"], [ViteIcon, "Vite"], [FlutterIcon, "Flutter"], [LaravelIcon, "Laravel"], [FigmaIcon, "Figma"], [PostmanIcon, "Postman"]],
  [[AwsIcon, "AWS"], [GitIcon, "Git"], [GithubFillIcon, "GitHub"], [MongodbIcon, "MongoDB"], [MysqlIcon, "MySQL"], [OracleIcon, "Oracle"]],
];

function Stack() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("portfolio-theme") === "dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <main className={darkMode ? "site dark stack-page-site" : "site stack-page-site"}>
      <div className="background-pattern">
        {Array.from({ length: 6 }, (_, index) => <span key={index} className={`pattern-star star-${index + 1}`}>✦</span>)}
      </div>
      <header className="header">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=azidamilla@gmail.com" className="contact-label" target="_blank" rel="noreferrer">Contact Me</a>
        <nav className={`navbar${mobileMenuOpen ? " mobile-menu-open" : ""}`}>
          <a href="/stack" className="active nav-stack">Stack</a>
          <button className="hamburger-button" type="button" aria-label="Open menu" aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((prev) => !prev)}>
            <span />
            <span />
            <span />
          </button>
          <div className="mobile-nav-menu">
            <a href="/" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="/projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="/stack" className="active" onClick={() => setMobileMenuOpen(false)}>Stack</a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=azidamilla@gmail.com" target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)}>Contact Me</a>
          </div>
          <div className="desktop-nav-links">
            <a href="/" className="nav-home">Home</a>
            <a href="/projects" className="nav-projects">Projects</a>
            <a href="/stack" className="active nav-stack">Stack</a>
          </div>
        </nav>
        <button className="theme-toggle" onClick={() => setDarkMode((prev) => !prev)} aria-label="Toggle dark mode">
          <div className="theme-circle sun"><SunIcon /></div>
          <div className="theme-circle moon"><MoonOutlineIcon /></div>
        </button>
      </header>

      <section className="stack-page">
        <div className="stack-page-heading"><h1>STACK &amp; TOOLS</h1></div>
        <div className="stack-page-docks">
          {stackRows.map((row, rowIndex) => (
            <div className="stack-dock" key={`stack-page-row-${rowIndex}`}>
              {row.map(([Icon, label]) => (
                <div className="stack-dock-item" key={label} title={label}>
                  <Icon className="stack-dock-icon" aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

export default Stack;
