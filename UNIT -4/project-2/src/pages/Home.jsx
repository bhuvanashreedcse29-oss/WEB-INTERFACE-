import { Link } from "react-router-dom";
function Home() {
  return (
    <section className="home-page">
      <div className="hero-glow glow-one"></div>
      <div className="hero-glow glow-two"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="status-dot"></span>
            CSE Student • Learning & Building
          </div>
          <p className="hero-small">
            HELLO, I'M
          </p>
          <h1>
            Bhuvana
            <br />
            <span>Shree.</span>
          </h1>
          <h2>
            Computer Science Student & <span>Developer</span>
          </h2>
          <p className="hero-description">
            I enjoy learning new technologies, creating web applications,
            exploring Python and building projects that turn ideas into
            something useful.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="primary-button">
              Explore My Work →
            </Link>
            <Link to="/contact" className="secondary-button">
              Let's Connect
            </Link>
          </div>
          <div className="hero-stats">
            <div>
              <strong>6+</strong>
              <span>Projects</span>
            </div>
            <div>
              <strong>5+</strong>
              <span>Technologies</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>Curiosity</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-window">
            <div className="window-header">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="code-content">
              <p>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">developer</span> = {"{"}
              </p>
              <p className="indent">
                name: <span className="code-green">"Bhuvana"</span>,
              </p>
              <p className="indent">
                role: <span className="code-green">"CSE Student"</span>,
              </p>
              <p className="indent">
                passion: <span className="code-green">"Building"</span>,
              </p>
              <p className="indent">
                learning: <span className="code-green">true</span>
              </p>
              <p>{"};"}</p>
              <p className="code-comment">
                // Always learning something new ✨
              </p>
            </div>
          </div>
          <div className="floating-card floating-one">
            <span>⚛</span>
            React
          </div>
          <div className="floating-card floating-two">
            <span>🐍</span>
            Python
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span></span>
        Scroll to explore
      </div>
    </section>
  );
}
export default Home;