import { Project } from "../../types/Data";
import { projArray } from "../../content";
import "./projectStyles.css";
import CVCard from "../wrappers/CVCard";

export default function Projects() {
  return (
    <>
      <div id="projects" className="proj-container">
        <section className="proj-section">
          <h3>Projects</h3>
          <div>
            {projArray.map((proj: Project, projIndex: number) => (
              <CVCard
                key={projIndex}
                duration={null}
                title={proj.title}
                subtitle={proj.subtitle}
                desc={proj.desc}
                descList={proj.skills}
                url={proj.url}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
