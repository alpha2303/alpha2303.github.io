import "./aboutStyles.css";
import { aboutSection } from "../../content";

export default function About() {
  return (
    <>
      <div id="about" className="about-container">
        <section className="about-section">
          <h1>Hi There!</h1>
          {aboutSection.map((paraText: string, key: number) => (
            <p key={key}>{paraText}</p>
          ))}
        </section>
      </div>
    </>
  );
}
