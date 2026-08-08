import "./wrappersStyles.css";
import useInView from "../../hooks/useInView";

interface CardProps {
  duration: string | null;
  title: string;
  subtitle: string;
  desc: string;
  descList: Array<string>;
  url: string;
}

export default function CVCard(props: CardProps) {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <>
      <div
        ref={ref}
        className={`exp-card-container${isInView ? " in-view" : ""}`}
      >
        <div className="exp-duration">{props.duration}</div>
        <div className="exp-desc">
          <h2>{props.title}</h2>
          <h3>
            <a
              href={props.url.length > 0 ? props.url : "#"}
              target="__blank"
              rel="noopener noreferrer"
            >
              <span>{props.subtitle}</span>
            </a>
          </h3>
          <p>{props.desc}</p>
          <ul className="exp-skill-list">
            {props.descList.map((skill: string, skillIndex: number) => (
              <li key={skillIndex} className="exp-skill">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
