export const GRADE_POINTS = { O: 10, "A+": 9, A: 8, "B+": 7, B: 6, C: 5, F: 0 };
export function getGrade(percentage) {
  if (percentage >= 90) return "O";
  if (percentage >= 80) return "A+";
  if (percentage >= 70) return "A";
  if (percentage >= 60) return "B+";
  if (percentage >= 50) return "B";
  if (percentage >= 40) return "C";
  return "F";
}
export function getSubjectResult(subject) {
  const total = subject.internal + subject.external;
  const grade = getGrade(total);
  const result = grade === "F" ? "Fail" : "Pass";
  return { ...subject, total, grade, result };
}
export function getStudentSummary(student) {
  const subjectResults = student.subjects.map(getSubjectResult);
  const totalMarks = subjectResults.reduce((sum, s) => sum + s.total, 0);
  const maxMarks = subjectResults.length * 100;
  const percentage = round(( totalMarks / maxMarks) * 100);
  const averageMarks = round(totalMarks / subjectResults.length);
  const cgpa = round(
    subjectResults.reduce((sum, s) => sum + GRADE_POINTS[s.grade], 0) /
      subjectResults.length
  );
  const overallGrade = getGrade(percentage);
  const hasFailedSubject = subjectResults.some((s) => s.result === "Fail");
  const status = hasFailedSubject ? "Fail" : "Pass";
  const attendance = round(
    student.subjects.reduce((sum, s) => sum + s.attendance, 0) /
      student.subjects.length
  );
  return {
    subjectResults,
    totalMarks,
    maxMarks,
    percentage,
    averageMarks,
    cgpa,
    overallGrade,
    status,
    attendance,
  };
}
export function getAttendanceLevel(pct) {
  if (pct >= 85) return "excellent";
  if (pct >= 75) return "good";
  if (pct >= 65) return "average";
  return "low";
}
export function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
function round(n) {
  return Math.round(n * 100) / 100;
}
