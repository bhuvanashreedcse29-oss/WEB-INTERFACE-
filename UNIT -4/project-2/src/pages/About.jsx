import { Link } from "react-router-dom";
function About() {
  return (
    <section className="page-section">
      <div className="page-header">
        <p className="section-label">01 — ABOUT ME</p>
        <h1>
          A little bit <span>about me.</span>
        </h1>
        <p>
          I'm a Computer Science student who enjoys exploring technology,
          solving problems and creating things with code.
        </p>
      </div>
      <div className="about-grid">
        <div className="about-main glass-card">
          <h2>Who am I?</h2>
          <p>
            I'm currently pursuing my B.E. in Computer Science and Engineering.
            My journey in technology started with programming fundamentals and
            gradually moved towards web development, data science and
            application development.
          </p>
          <p>
            I enjoy learning by building projects. Instead of only studying
            concepts theoretically, I try to understand how those concepts
            can be used to solve practical problems.
          </p>
          <p>
            Right now, I'm especially interested in Python, JavaScript,
            React, HTML, CSS and data-related technologies.
          </p>
          <Link to="/contact" className="text-button">
            Let's connect →
          </Link>
        </div>
        <div className="about-cards">
          <div className="info-card">
            <div className="info-icon">🎓</div>
            <h3>Education</h3>
            <p>B.E. Computer Science & Engineering</p>
          </div>
          <div className="info-card">
            <div className="info-icon">💻</div>
            <h3>Focus</h3>
            <p>Web Development & Programming</p>
          </div>
          <div className="info-card">
            <div className="info-icon">📊</div>
            <h3>Exploring</h3>
            <p>Data Science & AI Technologies</p>
          </div>
          <div className="info-card">
            <div className="info-icon">🎨</div>
            <h3>Interests</h3>
            <p>Drawing, Music & Creative Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;