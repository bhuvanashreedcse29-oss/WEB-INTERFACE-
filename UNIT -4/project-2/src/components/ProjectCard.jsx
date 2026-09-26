import { useState } from "react";
function ProjectCard({ number, title, description, technologies, details }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <article className="project-card">
      <div className="project-number">
        {number}
      </div>
      <div className="project-content">
        <div className="project-icon">
          {"</>"}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-list">
          {technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <button
          className="project-button"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Details ↑" : "View Details →"}
        </button>
        {showDetails && (
          <div className="project-details">
            <p>{details}</p>
          </div>
        )}
      </div>
    </article>
  );
}
export default ProjectCard;