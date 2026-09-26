# Student Dashboard

A React dashboard for a college that displays student details, subjects, attendance, and placement eligibility.

## Project Structure

```
student-dashboard/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx          # Root component, holds data, passes props down
│   ├── App.css           # External stylesheet (rgb color palette)
│   └── components/
│       ├── Header.jsx
│       ├── StudentCard.jsx
│       ├── SubjectList.jsx
│       └── Footer.jsx
```

## How to Run

1. Install [Node.js](https://nodejs.org/) (v18+) if you don't have it.
2. Open a terminal in this folder and install dependencies:
   ```
   npm install
   ```
3. Start the dev server:
   ```
   npm run dev
   ```
4. Open the URL shown in the terminal (usually `http://localhost:5173`).

## What each requirement maps to

| Requirement | Where |
|---|---|
| Components: App, Header, StudentCard, SubjectList, Footer | `src/App.jsx`, `src/components/*.jsx` |
| Header shows college name + "Student Dashboard" | `Header.jsx` |
| StudentCard props (name, register no, department, year, CGPA, attendance, photo) | `StudentCard.jsx`, passed from `App.jsx` |
| Subjects array rendered as `<ul>` | `SubjectList.jsx` |
| JSX expressions: semester, year, subjects.length | `SubjectList.jsx` |
| Conditional rendering: attendance ≥ 75% / CGPA ≥ 8 | `StudentCard.jsx` (ternary expressions + `<>...</>` Fragments) |
| Inline styling: name (blue), CGPA (green), attendance (orange) | `StudentCard.jsx` (`nameStyle`, `cgpaStyle`, `attendanceStyle` objects) |
| External CSS, rgb() color palette | `src/App.css` |

## Customizing the student shown

Edit the `student` object and `semester` value inside `src/App.jsx` — every value flows down through props, so the whole page updates automatically.
