import React from "react";
import Waving from "../../assets/waving.1bae5fcfb51082b5c2b4.png";
import resume from "../../assets/James-Wong-Resume.pdf"

const skills = [
    "Java", "TypeScript", "Python", "Go", "JavaScript",
    "Spring Boot", "React", "Next.js", "Node.js", "Flask",
    "AWS", "Docker", "Kubernetes", "Kafka", "MongoDB", "Firebase"
];

export default function Intro() {
    return (
      <>
        <section id="home" className="hero">
          <div className="container">
            <div className="content">
              <div className="hero-main">
                <div className="hero-text">
                  <h1>Full-Stack Software Engineer</h1>
                  <img src={Waving} alt="waving_hand" />
                  <p>
                    Hi! I'm James Wong. I'm a Full-Stack Software Engineer at BNY Mellon, building scalable distributed systems and enterprise microservices. I love creating impactful software that solves real-world problems.
                  </p>
                  <span>
                    <a
                      aria-label="linkedin"
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/in/james-wong03/"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a
                      aria-label="github"
                      rel="noreferrer"
                      target="_blank"
                      href="https://github.com/jameswong2003"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                      aria-label="resume"
                      rel="noreferrer"
                      target="_blank"
                      href={resume}
                    >
                      <i className="fa-solid fa-file"></i>
                    </a>
                  </span>
                </div>

                <div className="hero-img"></div>
              </div>

              <div className="skills">
                <p>Tech Stack</p>
                <div className="skill-tags">
                  {skills.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
