import React from "react";
export default function MarksTable({ subjectResults }) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            <th>Subject Code</th>
            <th>Subject Name</th>
            <th>Internal</th>
            <th>External</th>
            <th>Total</th>
            <th>Grade</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {subjectResults.map((s, i) => (
            <tr key={s.code} style={{ animationDelay: `${i * 50}ms` }}>
              <td data-label="Code">{s.code}</td>
              <td data-label="Subject">{s.name}</td>
              <td data-label="Internal">{s.internal} / 30</td>
              <td data-label="External">{s.external} / 70</td>
              <td data-label="Total">{s.total} / 100</td>
              <td data-label="Grade">
                <span className="grade-chip">{s.grade}</span>
              </td>
              <td data-label="Result">
                <span className={`badge ${s.result === "Pass" ? "badge-pass" : "badge-fail"}`}>
                  {s.result}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
