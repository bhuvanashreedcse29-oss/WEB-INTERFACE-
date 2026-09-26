import SkillCard from "../components/SkillCard";
function Skills() {
  return (
    <section className="page-section">
      <div className="page-header">
        <p className="section-label">03 — SKILLS</p>
        <h1>
          Technologies I <span>work with.</span>
        </h1>
        <p>
          The technologies and tools I'm currently learning and using
          in academic projects.
        </p>
      </div>
      <div className="skills-grid">
        <SkillCard
          icon="⌨"
          title="Programming"
          skills={[
            "Python",
            "Java",
            "JavaScript"
          ]}
        />
        <SkillCard
          icon="◈"
          title="Web Development"
          skills={[
            "HTML",
            "CSS",
            "React",
            "React Router"
          ]}
        />
        <SkillCard
          icon="▣"
          title="Database"
          skills={[
            "MySQL",
            "PostgreSQL",
            "SQL"
          ]}
        />
        <SkillCard
          icon="◉"
          title="Data Science"
          skills={[
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn"
          ]}
        />
      </div>
      <div className="learning-box">
        <div className="learning-icon">✦</div>
        <div>
          <h2>Always learning</h2>
          <p>
            Technology keeps changing, so I'm continuously exploring
            new concepts and improving my programming skills through projects.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Skills;