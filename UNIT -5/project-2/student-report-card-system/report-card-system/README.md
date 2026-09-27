# Student Report Card Management System

A professional, animated student report card dashboard built with
React 18, Vite, React Router DOM, and Recharts. No backend — all data
lives in `src/data/students.js`, and grades/CGPA/attendance are
calculated automatically from it.

## Run it

This zip already includes `node_modules`, so you can go straight to:

```
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

If `node_modules` is removed, or you're on a different OS/CPU
architecture than it was installed on, reinstall first:

```
npm install
npm run dev
```

## Build for production

```
npm run build
```

Outputs a static site to `dist/` — deployable to Netlify, Vercel,
GitHub Pages, etc.

## Routes

| Path | Page |
|---|---|
| `/` | Dashboard — stat cards, recent students, grade distribution |
| `/students` | Student list — search, filters, grid of cards |
| `/students/:id` | Student details / profile summary |
| `/report-card/:id` | Full printable report card |
| `/analytics` | Class-wide performance analytics |
| `/about` | About the system |

## Folder structure

```
src/
├── components/   Navbar, Sidebar, Layout, StatCard, StudentCard,
│                 StudentTable, MarksTable, AttendanceCard,
│                 PerformanceChart, Footer
├── pages/        Home, Students, StudentDetails, ReportCard,
│                 Analytics, About
├── data/         students.js — 8 sample students with subjects,
│                 marks and attendance
├── utils/        calculations.js — grade, CGPA, percentage,
│                 attendance-level helpers (nothing hard-coded)
├── App.jsx       Route definitions
├── main.jsx      Entry point (BrowserRouter mounted here)
└── index.css     Design tokens, layout, animations, print rules
```

## Notable behavior

- **Grading**: 90–100 → O, 80–89 → A+, 70–79 → A, 60–69 → B+,
  50–59 → B, 40–49 → C, below 40 → F. CGPA is the average grade
  point across subjects (O=10 … F=0).
- **Faculty remarks** are editable per student and persisted to
  `localStorage` under `remarks-<id>`.
- **Print Report / Download PDF** both trigger the browser's native
  print dialog (choose "Save as PDF" as the destination for a PDF).
  Print styles hide the sidebar, navbar and action buttons so only
  the report card prints.
- Responsive down to mobile: the sidebar collapses into a hamburger
  menu, and data tables become stacked cards below 760px.

## Customizing

- Add/edit students in `src/data/students.js`.
- Change the color palette or fonts via the CSS variables at the
  top of `src/index.css` (`--navy-950`, `--blue-500`, etc.).
- Add a new page: create it in `src/pages/`, then add a `<Route>`
  for it in `src/App.jsx` and a link in `src/components/Sidebar.jsx`.
