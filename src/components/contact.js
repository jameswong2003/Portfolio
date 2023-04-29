import React from "react";
import location_svg from "../assets/svg/location-pin-svgrepo-com.svg";
import phone_svg from "../assets/svg/phone-call-svgrepo-com.svg";
import mail_svg from "../assets/svg/email-svgrepo-com.svg";

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-info">
                        <h1>Contact Me</h1>
                        <div className="contact-row">
                            <img src={location_svg} alt="contact_img"/>
                            <div className="contact-sub">Boston, Massachusetts</div>
                        </div>
                        <div className="contact-row">
                            <img src={phone_svg} alt="(contact_img)"/>
                            <div className="contact-sub">(646) 384-5349</div>
                        </div>
                        <div className="contact-row">
                            <img src={mail_svg} alt="contact_img"/>
                            <div className="contact-sub">wong.james2003@gmail.com</div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <h1>Reach Out</h1>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}