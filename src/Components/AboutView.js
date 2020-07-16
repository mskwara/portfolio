import React from "react";

import "./AboutView.scss";
import Button from "./Button";

const aboutView = (props) => {
    const scroll = () => {
        document
            .getElementById("skillsView")
            .scrollIntoView({ behavior: "smooth", block: "end" });
    };

    return (
        <div id="aboutView">
            <div className="card">
                <p className="smallText">About me</p>
                <p className="name">Michał Skwara</p>
            </div>
            <div className="about">
                <img
                    src={require("../assets/avatar.jpg")}
                    alt="avatar"
                    className="avatar"
                />
                <p>
                    I am a second-year student of Computer Science at Faculty of
                    Computer Science, Electronics and Telecommunications at AGH
                    University of Science and Technology in Krakow. Designing
                    modern web applications is my passion, but I am also open to
                    other fields of programming. I am interested in an
                    internship in the position of Frontend Developer, which
                    would let me broaden my skills and gain an essential job
                    experience. I will gladly send you your CV if you are
                    interested.
                </p>
            </div>
            <Button className="skills" title="My skills" click={scroll} />
        </div>
    );
};

export default aboutView;
