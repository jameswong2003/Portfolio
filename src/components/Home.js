import React from "react";
import python_svg from "../assets/svg/python-svgrepo-com.svg";
import java_svg from "../assets/svg/java-svgrepo-com.svg";
import Waving from "../assets/waving.1bae5fcfb51082b5c2b4.png";
import react_svg from "../assets/svg/reactjs-svgrepo-com.svg"
import mongodb_svg from "../assets/svg/mongodb-svgrepo-com.svg"

export default function Home() {
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
                    Hi! I'm James Wong. I'm an aspiring Full-Stack Software Engineer that loves to tackle innovative, fun, and explorative challenges to bring solutions to life!
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
                  </span>
                </div>
  
                <div className="hero-img"></div>
              </div>
  
              {/*  */}
              <div className="skills">
                <p>Tech Stack</p>
                <div className="logos">
                  <ul>
                    <li>
                      <img src={python_svg} title="Python" alt="program_img" />
                    </li>
                    <li>
                      <img src={java_svg} title="Java" alt="program_img" />
                    </li>
                    <li>
                      <img src={react_svg} title="React JS" alt="program_img" />
                    </li>
                    <li>
                      <img src={mongodb_svg} title="MongoDB" alt="program_img" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  