import "./aboutStyles.css";
import { aboutSection, aboutFocusAreas } from "../../content";

export default function About() {
  return (
    <>
      <div id="about" className="about-container">
        <section className="about-section">
          <h1>Hi There!</h1>
          <ul className="about-focus-tags">
            {aboutFocusAreas.map((area: string, key: number) => (
              <li key={key} className="about-focus-tag">
                {area}
              </li>
            ))}
          </ul>
          {aboutSection.map((paraText: string, key: number) => (
            <p key={key}>{paraText}</p>
          ))}
        </section>
      </div>
    </>
  );
}
