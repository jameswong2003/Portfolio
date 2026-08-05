import React from "react";
import location_svg from "../../assets/svg/location-pin-svgrepo-com.svg";
import phone_svg from "../../assets/svg/phone-call-svgrepo-com.svg";
import mail_svg from "../../assets/svg/email-svgrepo-com.svg";

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-info">
                        <h1>Contact Me</h1>
                        <div className="contact-row">
                            <img src={location_svg} alt="location"/>
                            <div className="contact-sub">New York, New York</div>
                        </div>
                        <div className="contact-row">
                            <img src={phone_svg} alt="phone"/>
                            <div className="contact-sub">(646) 384-5349</div>
                        </div>
                        <div className="contact-row">
                            <img src={mail_svg} alt="email"/>
                            <div className="contact-sub">wong.james2003@gmail.com</div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <h1>Reach Out</h1>
                        <p className="contact-blurb">
                            Whether you're looking to collaborate, have a question, or just want to connect — feel free to reach out!
                        </p>
                        <div className="contact-links">
                            <a
                                href="https://www.linkedin.com/in/james-wong03/"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-btn"
                            >
                                <i className="fa-brands fa-linkedin"></i> LinkedIn
                            </a>
                            <a
                                href="mailto:wong.james2003@gmail.com"
                                className="contact-btn contact-btn-outline"
                            >
                                <i className="fa-solid fa-envelope"></i> Email Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
