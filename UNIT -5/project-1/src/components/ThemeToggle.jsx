import { useTheme } from "../context/ThemeContext";
function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <button
      className="theme-button"
      onClick={toggleTheme}
      title="Toggle theme"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}
export default ThemeToggle;