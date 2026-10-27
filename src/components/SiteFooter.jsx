import aku from "../assets/aku.png";

function SiteFooter() {
  return (
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
  );
}

export default SiteFooter;
