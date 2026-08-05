import React from "react";
import openpollImg from "../../assets/openpoll.png"

const projects = [
    {
        name: "SoleSync",
        image: null,
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        description: "Revenue SaaS platform used by 10+ users, automating pricing and inventory syncing across marketplaces. Scaled to $1.2M in GMV with 7,500+ sales since launch.",
        tech: ["TypeScript", "Next.js", "AWS", "Flask", "MongoDB"],
        link: "https://solesync-app.vercel.app/"
    },
    {
        name: "OpenPoll",
        image: openpollImg,
        gradient: null,
        description: "Open-source live-polling app integrated in 5+ classrooms, providing students a free solution for tracking grades and attendance in real time.",
        tech: ["Next.js", "TypeScript", "Firebase"],
        link: "https://github.com/s-alad/openpoll"
    },
    {
        name: "MapReduce & RAFT",
        image: null,
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        description: "Fault-tolerant distributed system processing hundreds of gigabytes of data, with RAFT consensus algorithm verified by the MIT 6.824 distributed systems test suite.",
        tech: ["Go", "Distributed Systems"],
        link: "https://github.com/jameswong2003"
    }
];

function Project() {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="project-content">
                    <h1>WHAT HAVE I CREATED SO FAR:</h1>
                    <h2>PROJECTS:</h2>
                    <div className="project-list">
                        {projects.map(project => (
                            <ProjectItem key={project.name} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function ProjectItem({ image, gradient, name, description, tech, link }) {
    const bgStyle = image
        ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }
        : { background: gradient };

    return (
        <a className="project-link" href={link} target="_blank" rel="noreferrer">
            <div className="project-item">
                <div className="bgImage" style={bgStyle} />
                <div className="project-info">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <div className="project-tech">
                        {tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                    </div>
                </div>
            </div>
        </a>
    );
}

export default Project;
