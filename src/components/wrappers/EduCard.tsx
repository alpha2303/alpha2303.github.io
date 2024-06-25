import { Education } from "../../types/Data";
import "./wrappersStyles.css";

interface EduCardProps {
  education: Education;
}

export default function EduCard(props: EduCardProps) {
  const exp: Education = props.education;

  return (
    <>
      <div className="exp-card-container">
        <span className="exp-duration">
          {exp.dateFrom} - {exp.dateTo}
        </span>
        <div className="exp-desc">
          <h2>{exp.title}</h2>
          <h3>
            {exp.institute} | {exp.location}
          </h3>
          <p>GPA: {exp.gpa} / {exp.maxGpa}</p>
          <ul className="exp-skill-list">
            {exp.relevantCourses.map((skill: string) => (
              <li className="exp-skill">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
