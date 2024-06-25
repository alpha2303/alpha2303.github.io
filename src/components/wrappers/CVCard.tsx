import "./wrappersStyles.css";

interface CardProps {
  duration: string,
  title: string,
  subtitle: string,
  desc: string,
  descList: Array<string>,
}

export default function EduCard(props: CardProps) {

  return (
    <>
      <div className="exp-card-container">
        <span className="exp-duration">
          {props.duration}
        </span>
        <div className="exp-desc">
          <h2>{props.title}</h2>
          <h3>
            {props.subtitle}
          </h3>
          <p>{props.desc}</p>
          <ul className="exp-skill-list">
            {props.descList.map((skill: string) => (
              <li className="exp-skill">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
