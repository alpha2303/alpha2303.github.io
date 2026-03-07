import { useState, useEffect } from "react";
import "./darkModeToggleStyles.css";

const THEME_KEY = "theme";
const THEME_DARK = "dark";
const THEME_LIGHT = "light";

function getInitialTheme(): "light" | "dark" {
  if (typeof document === "undefined" || typeof localStorage === "undefined") {
    return THEME_DARK;
  }
  const stored = localStorage.getItem(THEME_KEY);
  return stored === THEME_LIGHT ? THEME_LIGHT : THEME_DARK;
}

function applyTheme(theme: "light" | "dark") {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
}

export default function DarkModeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === THEME_DARK ? THEME_LIGHT : THEME_DARK));
  };

  return (
    <div className="dark-mode-toggle">
      <button
        type="button"
        onClick={toggleTheme}
        className="dark-mode-toggle__button"
        aria-label={theme === THEME_DARK ? "Switch to light mode" : "Switch to dark mode"}
        title={theme === THEME_DARK ? "Switch to light mode" : "Switch to dark mode"}
      >
        {theme === THEME_DARK ? (
          <span className="dark-mode-toggle__icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </span>
        ) : (
          <span className="dark-mode-toggle__icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </span>
        )}
      </button>
    </div>
  );
}
