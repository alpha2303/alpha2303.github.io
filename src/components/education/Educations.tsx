import { Education } from "../../types/Data";
import EduCard from "../wrappers/EduCard";
import { eduArray } from "../../../content";
import "./educationStyles.css";

export default function Educations() {
  return (
    <>
      <div id="education" className="edu-container">
        <section className="edu-section">
          <h3>Education</h3>
          <div>
            {eduArray.map((exp: Education) => (
              <EduCard education={exp} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
