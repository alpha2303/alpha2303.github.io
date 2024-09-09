import "./aboutStyles.css";
import { aboutSection } from "../../content";

export default function About() {
  return (
    <>
      <div id="about" className="about-container">
        <section className="about-section">
          <h1>Hi There!</h1>
          {aboutSection.map((paraText: string) => (
            <p>{paraText}</p>
          ))}
        </section>
      </div>
    </>
  );
}
