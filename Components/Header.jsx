import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const [isDark, setIsDark] = useTheme();

  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the World</a>
        </h2>
        <p
          className="ld-logo"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDark", !isDark);
          }}>
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`}></i>
          &nbsp; {isDark ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  );
}
