import { Education } from "../../types/Data";
import { eduArray } from "../../../content";
import "./educationStyles.css";
import CVCard from "../wrappers/CVCard";

export default function Educations() {
  return (
    <>
      <div id="education" className="edu-container">
        <section className="edu-section">
          <h3>Education</h3>
          <div>
            {eduArray.map((edu: Education) => (
              <CVCard
              duration={`${edu.dateFrom} - ${edu.dateTo}`}
              title={edu.title}
              subtitle={`${edu.institute} | ${edu.location}`}
              desc={`GPA: ${edu.gpa} / ${edu.maxGpa}`}
              descList={edu.relevantCourses}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
