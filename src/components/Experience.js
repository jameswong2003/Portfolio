import React from "react";

import timelineElements from "./timelineElements";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css"

export default function Experience() {
    return(
        <section id="experience" className="experience">
            <div className="container">
                <div className="experience-content">
                    <h1>WHAT HAVE I DONE SO FAR:</h1>
                    <h2>WORK EXPERIENCE.</h2>

                    <VerticalTimeline className="verticalTimeline" lineColor="#8e8e8e">
                        {
                            timelineElements.map(element => {
                                return (
                                    <VerticalTimelineElement
                                        contentStyle={{ backgroundColor: "#f9f9f9" }}
                                        className="verticalTimelineElement"
                                        key={element.key}
                                        date={element.date}
                                        dateClassName="date"
                                        iconStyle={{
                                            backgroundImage: `url(${element.icon})`,
                                            backgroundColor: "#22223b",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center center"
                                        }}
                                    >
                                        <h3 className="vertical-timeline-element-title">{element.title}</h3>
                                        <h5 className="vertical-timeline-element-subtitle">{element.company}</h5>
                                        <p className="vertical-timeline-element-description" style={{ fontSize: '18px' }}>{element.description}</p>
                                    </VerticalTimelineElement>
                                )
                            })
                        }
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    )
}