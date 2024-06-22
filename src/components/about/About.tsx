import "./About.css";
import content from "../../../content.json";

export default function About() {
  return (
    <>
      <div id="about" className="about-container">
        <section className="about-section">
          <h3>About Me</h3>
          <p>
            {content["about-section"]}
          </p>
        </section>
      </div>
    </>
  );
}
