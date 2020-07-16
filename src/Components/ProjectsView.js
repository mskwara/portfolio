import React from "react";

import "./ProjectsView.scss";
import Project from "./Project";
import Button from "./Button";
import projects from "../data/projects";

const projectsView = (props) => {
    const scroll = () => {
        document
            .getElementById("contactView")
            .scrollIntoView({ behavior: "smooth", block: "end" });
    };

    const projectTiles = projects.map((project) => {
        return (
            <Project
                title={project.title}
                description={project.description}
                techUsedImages={project.techUsedImages}
                link={project.link}
            />
        );
    });

    const goToGit = () => {
        var win = window.open(
            "https://github.com/mskwara?tab=repositories",
            "_blank"
        );
        win.focus();
    };

    return (
        <div id="projectsView">
            <div class="main">
                {projectTiles}
                <img
                    className="arrow"
                    src={require("../assets/next.svg")}
                    alt="Github"
                    onClick={goToGit}
                />
            </div>
            <Button className="buttonContact" title="Contact" click={scroll} />
        </div>
    );
};

export default projectsView;
