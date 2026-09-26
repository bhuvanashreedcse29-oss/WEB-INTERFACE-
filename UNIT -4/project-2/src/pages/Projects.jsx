import ProjectCard from "../components/ProjectCard";
function Projects() {
  const projects = [
    {
      number: "01",
      title: "Student Notes App",
      description:
        "A web application for creating, editing, deleting and searching student notes.",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      details:
        "This project focuses on reusable React components, state management, search functionality and a clean user interface."
    },
    {
      number: "02",
      title: "Attendance Tracker",
      description:
        "An interactive attendance management application using React state.",
      technologies: ["React", "useState", "JavaScript", "CSS"],
      details:
        "The application contains a default list of students and allows attendance to be updated dynamically using React useState."
    },
    {
      number: "03",
      title: "Titanic Data Analysis",
      description:
        "An exploratory data analysis project that studies the Titanic dataset.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      details:
        "The project uses data cleaning, grouping, visualization and exploratory analysis to understand passenger survival patterns."
    },
    {
      number: "04",
      title: "Railway Block Planning",
      description:
        "A project concept for intelligent railway maintenance block planning.",
      technologies: ["React", "Java", "PostgreSQL", "REST API"],
      details:
        "The system concept focuses on maintenance requests, asset availability, conflicts, block recommendations and delay analysis."
    }
  ];
  return (
    <section className="page-section">
      <div className="page-header">
        <p className="section-label">02 — PROJECTS</p>
        <h1>
          Things I've <span>built.</span>
        </h1>
        <p>
          A collection of academic projects and experiments created while
          learning different technologies.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.number}
            number={project.number}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            details={project.details}
          />
        ))}
      </div>
    </section>
  );
}
export default Projects;