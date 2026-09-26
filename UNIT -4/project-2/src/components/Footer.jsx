import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            &lt;/&gt; Bhuvana<span>.</span>
          </div>
          <p>
            Learning, building and growing one project at a time.
          </p>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Bhuvana Shree. All rights reserved.</p>
        <p>Built with React ⚛️</p>
      </div>
    </footer>
  );
}
export default Footer;