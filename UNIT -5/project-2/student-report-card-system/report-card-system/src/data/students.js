const SUBJECT_LIST = [
  { code: "CS301", name: "Data Structures" },
  { code: "CS302", name: "Database Management Systems" },
  { code: "CS303", name: "Web Interface Design" },
  { code: "CS304", name: "Computer Networks" },
  { code: "CS305", name: "Data Science" },
  { code: "CS306", name: "Discrete Mathematics" },
];
function subjects(marks, attendance) {
  return SUBJECT_LIST.map((s, i) => ({
    ...s,
    internal: marks[i][0],
    external: marks[i][1],
    attendance: attendance[i],
  }));
}
export const students = [
  {
    id: 1,
    name: "Bhuvana Shree",
    registerNumber: "23CSE101",
    department: "Computer Science and Engineering",
    semester: 3,
    academicYear: "2025-2026",
    dob: "2005-04-12",
    email: "bhuvana.shree@example.edu",
    phone: "9876543210",
    subjects: subjects(
      [
        [28, 58],
        [27, 55],
        [29, 61],
        [26, 52],
        [28, 57],
        [25, 54],
      ],
      [92, 88, 95, 86, 90, 89]
    ),
  },
  {
    id: 2,
    name: "Kavi Sri",
    registerNumber: "23CSE102",
    department: "Computer Science and Engineering",
    semester: 3,
    academicYear: "2025-2026",
    dob: "2005-01-22",
    email: "arjun.mehta@example.edu",
    phone: "9876543211",
    subjects: subjects(
      [
        [22, 44],
        [20, 38],
        [24, 46],
        [19, 35],
        [21, 40],
        [18, 33],
      ],
      [78, 72, 80, 68, 74, 70]
    ),
  },
  {
    id: 3,
    name: "Anil",
    registerNumber: "23ECE145",
    department: "Electronics and Communication",
    semester: 5,
    academicYear: "2025-2026",
    dob: "2004-09-03",
    email: "priya.nair@example.edu",
    phone: "9876543212",
    subjects: subjects(
      [
        [29, 63],
        [28, 60],
        [30, 65],
        [27, 59],
        [29, 62],
        [28, 61],
      ],
      [96, 94, 97, 93, 95, 96]
    ),
  },
  {
    id: 4,
    name: "Sai Saran",
    registerNumber: "23MEC078",
    department: "Mechanical Engineering",
    semester: 4,
    academicYear: "2025-2026",
    dob: "2004-11-17",
    email: "rahul.verma@example.edu",
    phone: "9876543213",
    subjects: subjects(
     [
        [26, 54],
        [25, 50],
        [27, 56],
        [24, 49],
        [26, 52],
        [23, 48],
      ],
      [88, 84, 90, 82, 86, 83]
    ),
  },
  {
    id: 5,
    name: "Vijay",
    registerNumber: "23ITE063",
    department: "Information Technology",
    semester: 3,
    academicYear: "2025-2026",
    dob: "2005-06-29",
    email: "sneha.reddy@example.edu",
    phone: "9876543214",
    subjects: subjects(
      [
        [26, 54],
        [25, 50],
        [27, 56],
        [24, 49],
        [26, 52],
        [23, 48],
      ],
      [88, 84, 90, 82, 86, 83]
    ),
  },
  {
    id: 6,
    name: "Ashwini",
    registerNumber: "23CSE110",
    department: "Computer Science and Engineering",
    semester: 3,
    academicYear: "2025-2026",
    dob: "2005-02-14",
    email: "karthik.iyer@example.edu",
    phone: "9876543215",
    subjects: subjects(
      [
        [24, 48],
        [23, 45],
        [25, 50],
        [22, 44],
        [24, 47],
        [21, 43],
      ],
      [81, 77, 84, 75, 79, 76]
    ),
  },
  {
    id: 7,
    name: "Mageswari",
    registerNumber: "23ECE152",
    department: "Electronics and Communication",
    semester: 5,
    academicYear: "2025-2026",
    dob: "2004-08-08",
    email: "ananya.das@example.edu",
    phone: "9876543216",
    subjects: subjects(
      [
        [27, 57],
        [26, 53],
        [28, 59],
        [25, 51],
        [27, 55],
        [24, 50],
      ],
      [90, 85, 92, 83, 87, 84]
    ),
  },
  {
    id: 8,
    name: "Deva",
    registerNumber: "23ITE071",
    department: "Information Technology",
    semester: 3,
    academicYear: "2025-2026",
    dob: "2005-03-30",
    email: "vikram.singh@example.edu",
    phone: "9876543217",
    subjects: subjects(
      [
        [17, 30],
        [15, 27],
        [19, 33],
        [16, 28],
        [14, 24],
        [18, 31],
      ],
      [65, 60, 70, 62, 58, 66]
    ),
  },
];
export default students;
