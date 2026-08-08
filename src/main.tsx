import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./Index.css";

// Apply saved theme and nav-rail state before first paint to avoid flash
let savedTheme: string | null = null;
let savedNavCollapsed: string | null = null;
try {
  if (typeof window !== "undefined" && window.localStorage) {
    savedTheme = window.localStorage.getItem("theme");
    savedNavCollapsed = window.localStorage.getItem("navCollapsed");
  }
} catch {
  // Ignore storage errors and fall back to defaults
}
if (savedTheme === "light") {
  document.documentElement.setAttribute("data-theme", "light");
}
document.documentElement.setAttribute(
  "data-nav",
  savedNavCollapsed === "true" ? "collapsed" : "expanded"
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
