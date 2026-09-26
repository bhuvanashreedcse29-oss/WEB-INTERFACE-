function Header({ collegeName }) {
  return (
    <header className="header">
      <div className="header-badge">EST. 1992</div>
      <h1 className="college-name">{collegeName}</h1>
      <p className="dashboard-title">Student Dashboard</p>
    </header>
  );
}

export default Header;
