import "./AboutStyles.css";
import { about_section } from "../../../content";

export default function About() {
  return (
    <>
      <div id="about" className="about-container">
        <section className="about-section">
          <h3>About Me</h3>
          <p>
            {about_section}
          </p>
        </section>
      </div>
    </>
  );
}
