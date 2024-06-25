import "./IntroStyles.css";
import LinkedInIcon from "../../icons/LinkedInIcon";
import GithubIcon from "../../icons/GithubIcon";
import MailIcon from "../../icons/MailIcon";

export default function About() {
  return (
    <>
      <div className="intro-container">
        <div className="intro-desc">
          <div className="intro-pic">
            <img src="src/assets/dp1_square.jpg" />
          </div>
          <h1>Rahul Pavithran</h1>
          <h3>Senior Software Engineer</h3>
          <ul className="contact-list">
            <li>
              <a target="__blank" href="https://www.linkedin.com/in/rahulpavithranglobal/">
                <LinkedInIcon isDark={true} />
              </a>
            </li>
            <li>
              <a target="__blank" href="https://github.com/alpha2303">
                <GithubIcon isDark={true} />
              </a>
            </li>
            <li>
              <a target="__blank" href="mailto:rahul.pavi@outlook.com">
                <MailIcon isDark={true} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
