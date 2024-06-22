import About from "./components/about/About";
import NavBar from "./components/navbar/Navbar";
import "./App.css";
import Intro from "./components/intro/Intro";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Intro />
        <div className="main-container">
          <About />
        </div>
      </div>
    </>
  );
}
