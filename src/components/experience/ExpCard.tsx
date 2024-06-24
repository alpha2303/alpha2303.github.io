import { Experience } from "../../types/Data";
import "./experienceStyles.css";

interface ExpCardProps {
  experience: Experience;
}

export default function ExpCard(props: ExpCardProps) {
  const exp: Experience = props.experience;

  return (
    <>
      <div className="exp-card-container">
        <span className="exp-duration">
          {exp.dateFrom} - {exp.dateTo}
        </span>
        <div className="exp-desc">
          <h2>{exp.title}</h2>
          <h3>
            {exp.company} | {exp.location}
          </h3>
          <p>{exp.desc}</p>
          <ul className="exp-skill-list">
            {exp.skills.map((skill: string) => (
              <li className="exp-skill">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
