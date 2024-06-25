import { Experience } from "../../types/Data";
import { expArray } from "../../../content";
import "./experienceStyles.css";
import CVCard from "../wrappers/CVCard";

export default function Experiences() {
  return (
    <>
      <div id="experience" className="exp-container">
        <section className="exp-section">
          <h3>Experience</h3>
          <div>
            {expArray.map((exp: Experience, expIndex: number) => (
              <CVCard
                key={expIndex}
                duration={`${exp.dateFrom} - ${exp.dateTo}`}
                title={exp.title}
                subtitle={`${exp.company} | ${exp.location}`}
                desc={exp.desc}
                descList={exp.skills}
                url={exp.url}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
