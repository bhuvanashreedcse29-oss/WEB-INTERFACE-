import { useState } from "react";
import "./attendance.css";

function Attendance() {
  const [students, setStudents] = useState([
    { id: 1, name: "Shree", present: false },
    { id: 3, name: "Sai", present: false },
    { id: 4, name: "Anil", present: false },
    { id: 2, name: "Deva", present: false },
    { id: 5, name: "Kavi", present: false },
    { id: 6, name: "Yoga", present: false },
    { id: 7, name: "Magi", present: false },
    { id: 8, name: "Vetri", present: false },
    { id: 9, name: "Dhana", present: false },
    { id: 10, name: "Udhi", present: false }
  ]);

  const markAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  const presentCount = students.filter(
    (student) => student.present
  ).length;

  const absentCount = students.length - presentCount;

  const attendancePercentage =
    (presentCount / students.length) * 100;

  return (
    <div className="container">
      <h1>Attendance Tracker</h1>

      <div className="summary">
        <p>Total: {students.length}</p>
        <p>Present: {presentCount}</p>
        <p>Absent: {absentCount}</p>
        <p>Attendance: {attendancePercentage.toFixed(2)}%</p>
      </div>

      <div className="student-list">
        {students.map((student) => (
          <div className="student" key={student.id}>
            <h3>{student.name}</h3>

            <p>
              Status:{" "}
              {student.present ? "Present" : "Absent"}
            </p>

            <button
              onClick={() => markAttendance(student.id)}
            >
              {student.present
                ? "Mark Absent"
                : "Mark Present"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attendance;