import "./IntroStyles.css";
import LinkedInIcon from "../../icons/LinkedInIcon";
import GithubIcon from "../../icons/GithubIcon";
import MailIcon from "../../icons/MailIcon";

export default function About() {
  return (
    <>
      <div className="intro-container">
        <div className="intro-pic">
          <img src="src/assets/dp1_square.jpg" />
        </div>
        <div className="intro-desc">
          <h1>Rahul Pavithran</h1>
          <h3>Senior Software Engineer</h3>
          <p>
            I love building creative software solutions, currently exploring the
            beauty of Machine Learning.
          </p>
          <a
            className="intro-url"
            href="src/assets/RahulP_Resume.pdf"
            target="__blank"
          >
            <span>View Resume &#8594;</span>
          </a>
          <ul className="contact-list">
            <li>
              <a
                target="__blank"
                href="https://www.linkedin.com/in/rahulpavithranglobal/"
              >
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
