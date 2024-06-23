import About from "./components/about/About";
import NavBar from "./components/navbar/Navbar";
import "./AppStyles.css";
import Intro from "./components/intro/Intro";
import Experiences from "./components/experience/Experiences";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Intro />
        <div className="main-container">
          <About />
          <Experiences />
        </div>
      </div>
    </>
  );
}
