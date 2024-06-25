import "./wrappersStyles.css";

interface CardProps {
  duration: string,
  title: string,
  subtitle: string,
  desc: string,
  descList: Array<string>,
  url: string,
}

export default function CVCard(props: CardProps) {
  return (
    <>
      <div className="exp-card-container">
        <div className="exp-duration">
          {props.duration}
        </div>
        <div className="exp-desc">
          <h2>{props.title}</h2>
          <h3>
            <a href={props.url.length > 0 ? props.url: '#'}>{props.subtitle}</a>
          </h3>
          <p>{props.desc}</p>
          <ul className="exp-skill-list">
            {props.descList.map((skill: string, skillIndex: number) => (
              <li key={skillIndex} className="exp-skill">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
