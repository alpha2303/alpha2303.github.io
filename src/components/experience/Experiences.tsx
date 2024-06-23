import { Experience } from "../../types/Data";
import ExpCard from "./ExpCard";
import { expArray } from "../../../content";
import "./experienceStyles.css";

export default function Experiences() {
  return (
    <>
      <div id="experiences" className="exp-container">
        <section className="exp-section">
          <h3>Experience</h3>
          <div>
            {expArray.map((exp: Experience) => (
              <ExpCard experience={exp} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
