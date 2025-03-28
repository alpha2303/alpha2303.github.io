import "./AppStyles.css";
import NavBar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Experiences from "./components/experience/Experiences";
import Educations from "./components/education/Educations";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Intro />
        <div className="main-container">
          <About />
          <Experiences />
          <Projects />
          <Educations />
          <Footer />
        </div>
      </div>
    </>
  );
}
