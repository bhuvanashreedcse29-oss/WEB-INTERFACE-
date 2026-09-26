function Experience() {
  const journey = [
    {
      year: "01",
      title: "Started Programming",
      description:
        "Began learning programming fundamentals and understanding how software is created."
    },
    {
      year: "02",
      title: "Java Fundamentals",
      description:
        "Learned core Java concepts including classes, objects, arrays, collections and basic problem solving."
    },
    {
      year: "03",
      title: "Explored Python",
      description:
        "Started using Python for programming, data handling and data science experiments."
    },
    {
      year: "04",
      title: "Web Development",
      description:
        "Learned HTML and CSS and started creating interactive web interfaces with JavaScript."
    },
    {
      year: "05",
      title: "Started React",
      description:
        "Learned components, props, state, hooks, events and React Router while building small applications."
    },
    {
      year: "06",
      title: "Building Projects",
      description:
        "Started combining different technologies to create academic projects and practical applications."
    }
  ];
  return (
    <section className="page-section">
      <div className="page-header">
        <p className="section-label">04 — MY JOURNEY</p>
        <h1>
          Learning through <span>experience.</span>
        </h1>
        <p>
          This isn't a traditional work-experience section. It's a timeline
          of my learning journey in technology.
        </p>
      </div>
      <div className="timeline">
        {journey.map((item, index) => (
          <div
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
            key={item.year}
          >
            <div className="timeline-dot">
              {item.year}
            </div>
            <div className="timeline-card">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Experience;