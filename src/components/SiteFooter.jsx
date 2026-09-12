import aku from "../assets/aku.png";
import GithubFillIcon from "@iconify-react/akar-icons/github-fill";
import LinkedinBoxFillIcon from "@iconify-react/akar-icons/linkedin-box-fill";

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="site-footer-photo-frame">
          <img src={aku} alt="Azida" className="site-footer-photo" />
        </div>
        <div className="site-footer-cta">
          <h2>LET'S WORK TOGETHER</h2>
          <p>Have an idea in mind?<br />Let's turn it into something great.</p>
          <a
            className="site-footer-button"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=azidamilla@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            LET'S TALK
          </a>
          <nav className="site-footer-links" aria-label="Social media links">
            <a href="https://www.linkedin.com/in/azidakautsar/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <LinkedinBoxFillIcon />
            </a>
            <a href="https://github.com/qyuzies7" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
              <GithubFillIcon />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
