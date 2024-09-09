import "./introStyles.css";
import LinkedInIcon from "../../icons/LinkedInIcon";
import GithubIcon from "../../icons/GithubIcon";
import MailIcon from "../../icons/MailIcon";

export default function About() {
  return (
    <>
      <div className="intro-container">
        <div className="intro-pic">
          <img src="/dp1_square.JPG" alt="Portfolio Display Picture" />
        </div>
        <div className="intro-desc">
          <h1>Rahul Pavithran</h1>
          <h3>Senior Software Engineer</h3>
          <p>
            I love building creative software solutions, currently exploring the
            beauty of Machine Learning.
          </p>
          <a className="intro-url" target="__blank" href="/Rahul_Pavithran___Resume.pdf">
            <span>View Resume &#8594;</span>
          </a>
          <ul className="contact-list">
            <li>
              <a
                target="__blank"
                rel="noopener noreferrer"
                title="LinkedIn Icon"
                href="https://www.linkedin.com/in/rahulpavithranglobal/"
              >
                <LinkedInIcon isDark={true} />
              </a>
            </li>
            <li>
              <a
                target="__blank"
                rel="noopener noreferrer"
                title="Github Icon"
                href="https://github.com/alpha2303"
              >
                <GithubIcon isDark={true} />
              </a>
            </li>
            <li>
              <a
                target="__blank"
                rel="noopener noreferrer"
                title="Email Icon"
                href="mailto:rahul.pavi@outlook.com"
              >
                <MailIcon isDark={true} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
