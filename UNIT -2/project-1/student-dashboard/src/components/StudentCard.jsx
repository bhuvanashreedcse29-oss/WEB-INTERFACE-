function StudentCard({
  name,
  registerNo,
  department,
  year,
  cgpa,
  attendance,
  photo,
}) {
  // Inline style objects (Task 7)
  const nameStyle = { color: 'blue' };
  const cgpaStyle = { color: 'green' };
  const attendanceStyle = { color: 'orange' };

  const isAttendanceEligible = attendance >= 75;
  const isPlacementEligible = cgpa >= 8;

  return (
    <section className="student-card">
      <img className="student-photo" src={photo} alt={`${name}'s photo`} />

      <div className="student-info">
        <h2 style={nameStyle} className="student-name">
          {name}
        </h2>

        <ul className="info-list">
          <li>
            <span className="label">Register No :</span> {registerNo}
          </li>
          <li>
            <span className="label">Department :</span> {department}
          </li>
          <li>
            <span className="label">Year :</span> {year}
          </li>
          <li>
            <span className="label">CGPA :</span>{' '}
            <span style={cgpaStyle}>{cgpa}</span>
          </li>
          <li>
            <span className="label">Attendance :</span>{' '}
            <span style={attendanceStyle}>{attendance}%</span>
          </li>
        </ul>

        {/* Task 6: Conditional rendering, using Fragments to group without extra DOM nodes */}
        <div className="status-block">
          <p className="status-line">
            <span className="label">Attendance Status :</span>{' '}
            {isAttendanceEligible ? (
              <>
                <span className="badge badge-eligible">
                  Eligible for Semester Exam
                </span>
              </>
            ) : (
              <>
                <span className="badge badge-not-eligible">Not Eligible</span>
              </>
            )}
          </p>

          <p className="status-line">
            <span className="label">Placement Status :</span>{' '}
            {isPlacementEligible ? (
              <>
                <span className="badge badge-eligible">Eligible</span>
              </>
            ) : (
              <>
                <span className="badge badge-not-eligible">
                  Need Improvement
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

export default StudentCard;
