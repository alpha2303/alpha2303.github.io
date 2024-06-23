import {Experience} from "../../types/Data";
import ExpCard from "./ExpCard";
import { expArray } from "../../../content";
import "./experienceStyles.css";

export default function Experiences() {
  return (
    <>
      <h3>Experience</h3>
      <div>
        {expArray.map((exp: Experience) => (
          <ExpCard experience={exp} />
        ))}
      </div>
    </>
  );
}
