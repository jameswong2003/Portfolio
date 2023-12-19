import React from "react";
import CriticalRaceImg from "../../assets/CriticalRaceImg.png";
import FinCheckerImg from "../../assets/FinCheckerImg.png";
import ToDoImg from "../../assets/TodoImg.png";
import WeatherPlannerImg from "../../assets/WeatherPlannerImg.png";

function Project() {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="project-content">
                    <h1>WHAT HAVE I CREATED SO FAR:</h1>
                    <h2>PROJECTS:</h2>
                    <div className="project-list">
                        <ProjectItem name="Weather Planner" image={WeatherPlannerImg} link={"https://github.com/jameswong2003/WeatherPlanner"} />
                        <ProjectItem name="FinChecker" image={FinCheckerImg} link={"https://github.com/jameswong2003/FinChecker"}/>
                        <ProjectItem name="To-Do Flask" image={ToDoImg} link={"https://github.com/jameswong2003/Flask-Introduction"} />
                        <ProjectItem name="Critical Race Project" image={CriticalRaceImg} link={"https://jameswong2003.github.io/Critical-Race-Project/"}/>

                    </div>
                </div>
            </div>
        </section>
    )
}

function ProjectItem( {image, name, link }) {
    return (
        <a className="project-link" href={link} >
            <div className="project-item">
                <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
                <h1> {name} </h1>
            </div>
        </a>
    );
}

export default Project;