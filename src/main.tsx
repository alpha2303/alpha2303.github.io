import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./Index.css";

// Apply saved theme before first paint to avoid flash (default: dark)
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.documentElement.setAttribute("data-theme", "light");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
