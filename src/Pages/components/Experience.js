import React from "react";
import timelineElements from "./timelineElements";

export default function Experience() {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <div className="experience-content">
                    <h1>WHAT HAVE I DONE SO FAR:</h1>
                    <h2>WORK EXPERIENCE.</h2>
                    <div className="exp-list">
                        {timelineElements.map((element, index) => (
                            <ExperienceCard key={element.id} element={element} isCurrent={index === 0} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ExperienceCard({ element, isCurrent }) {
    const hasDarkBg = element.company === "BNY Mellon" || element.company === "BostonHacks";

    return (
        <div className={`exp-card ${isCurrent ? "exp-card--current" : ""}`}>
            <div className="exp-card-header">
                <div className={`exp-logo-wrap ${hasDarkBg ? "exp-logo-wrap--dark" : "exp-logo-wrap--light"}`}>
                    <img src={element.icon} alt={element.company} />
                </div>
                <div className="exp-meta">
                    <div className="exp-top-row">
                        <div className="exp-name-group">
                            <span className="exp-company">{element.company}</span>
                            {isCurrent && <span className="exp-badge exp-badge--current">● Current</span>}
                        </div>
                        <span className="exp-date-badge">{element.date}</span>
                    </div>
                    <h3 className="exp-job-title">{element.title}</h3>
                </div>
            </div>

            <ul className="exp-bullets">
                {element.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                ))}
            </ul>
        </div>
    );
}
