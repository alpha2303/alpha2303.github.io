import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./Index.css";

// Apply saved theme before first paint to avoid flash
let savedTheme: string | null = null;
try {
  if (typeof window !== "undefined" && window.localStorage) {
    savedTheme = window.localStorage.getItem("theme");
  }
} catch {
  // Ignore storage errors and fall back to defaults
}
if (savedTheme === "light") {
  document.documentElement.setAttribute("data-theme", "light");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
