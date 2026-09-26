function SubjectList({ subjects, semester, year }) {
  return (
    <section className="subject-list">
      <h2 className="section-title">Subjects</h2>

      <ul className="subjects">
        {subjects.map((subject, index) => (
          <li key={index} className="subject-chip">
            {subject}
          </li>
        ))}
      </ul>

      {/* Task 5: JSX Expressions */}
      <div className="semester-info">
        <p>Current Semester : {semester}</p>
        <p>Current Year : {year}</p>
        <p>Total Subjects : {subjects.length}</p>
      </div>
    </section>
  );
}

export default SubjectList;
