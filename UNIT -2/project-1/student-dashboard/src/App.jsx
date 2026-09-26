import Header from './components/Header.jsx';
import StudentCard from './components/StudentCard.jsx';
import SubjectList from './components/SubjectList.jsx';
import Footer from './components/Footer.jsx';

// Task 4: subjects array
const subjects = ['React', 'Java', 'Python', 'SQL', 'DBMS','Data Structures'];

function App() {
  // Student data — in a real app this would come from an API/database
  const student = {
    name: 'Bhuvana',
    registerNo: 101,
    department: 'CSE',
    year: 'III',
    cgpa: 9.0,
    attendance: 82,
    grade:"A",
    photo: 'https://ui-avatars.com/api/?name=Bhuvana+Shree&background=1E293B&color=F8FAFC&size=256',
  };

  const semester = 6;

  return (
    <div className="app">
      <Header collegeName="St. Xavier's College of Engineering" />

      <main className="main-content">
        <StudentCard
          name={student.name}
          registerNo={student.registerNo}
          department={student.department}
          year={student.year}
          cgpa={student.cgpa}
          attendance={student.attendance}
          grade={student.grade}
          photo={student.photo}
        />

        <SubjectList subjects={subjects} semester={semester} year={student.year} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
