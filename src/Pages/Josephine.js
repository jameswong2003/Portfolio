import React, { useState } from "react";
import photo1 from "../assets/Photo1.png"
import photo2 from "../assets/Photo2.png"
import photo3 from "../assets/Photo3.png"
import photo4 from "../assets/Photo4.png"
import photo5 from "../assets/Photo5.png"
import photo6 from "../assets/Photo6.png"
import photo7 from "../assets/Photo7.png"
import photo8 from "../assets/Photo8.png"

const Josephine = () => {
  const [envelopeText, setEnvelopeText] = useState("Click on Me");

  const envelopeClicked = () => {
    setEnvelopeText(
        <div>
        Happy Valentines! <br />
        I hope that you had a great time yesterday. I love and care for you every single day. You're beautiful, cute, and caring and I can't ask for anything more. I did this this morning because I feel like this would be special and not everyone can make a website so you deserve it. < br />
        I'm sorry I couldn't get you your valentines card. I thought it would be okay because all I wanted to do was spend time with you no matter what. I will try my best to remember next time. I love you very much and I still do care. <br />
        Best, <br />
        James &lt;3 <br />
        P.S. Stop complaining that I kiss too much. It's a luxury that not all girls have
      </div>
    );
  };

  return (
    <div className="josephineContainer">
        <div className="photoContainer">
            <img src={photo1} alt="" />
        </div>
        <div className="photoContainer">
            <img src={photo2} alt="" />
        </div>
        <div className="photoContainer">
            <img src={photo3} alt="" />
        </div>
        <div className="photoContainer">
            <img src={photo4} alt="" />
        </div>
        <div className="photoContainer">
            <img src={photo5} alt="" />
        </div>
        <div className="photoContainer">
            <img src={photo6} alt="" />
        </div>
        <div className="photoContainer">
            <img src={photo7} alt="" />
        </div>
        <div className="photoContainer">
            <img src={photo8} alt="" />
        </div>
        <div className="envelope" onClick={envelopeClicked}>
            <div>{envelopeText}</div>
        </div>
    </div>
  );
};

export default Josephine;
