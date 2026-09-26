function SkillCard({ icon, title, skills = [] }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        {icon}
      </div>
      <h3>{title}</h3>
      <div className="skill-tags">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </div>
  );
}
export default SkillCard;