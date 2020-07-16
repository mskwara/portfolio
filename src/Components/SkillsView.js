import React from "react";

import "./SkillsView.scss";
import TechBox from "./TechBox";
import technologies from "../data/technologies";
import Button from "./Button";

const skillsView = (props) => {
    const scroll = () => {
        document
            .getElementById("projectsView")
            .scrollIntoView({ behavior: "smooth", block: "end" });
    };

    const techBoxes = technologies.map((tech) => {
        return (
            <TechBox
                name={tech.name}
                image={tech.image}
                skill={tech.skill}
                key={tech.name}
            />
        );
    });

    return (
        <div id="skillsView">
            <div className="techBoxes">{techBoxes}</div>
            <Button
                className="buttonProjects"
                title="Projects"
                click={scroll}
            />
        </div>
    );
};

export default skillsView;
