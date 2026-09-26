function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {year} St. Xavier's College of Engineering. All rights reserved.</p>
      <p className="footer-sub">Office of Academic Affairs</p>
    </footer>
  );
}

export default Footer;
