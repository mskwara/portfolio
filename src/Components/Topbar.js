import React from "react";
import "./Topbar.scss";

const topbar = (props) => {
    const scroll = (link) => {
        document
            .getElementById(link)
            .scrollIntoView({ behavior: "smooth", block: "end" });
    };

    return (
        <div id="topbar">
            <div className="name">Michał Skwara</div>
            <div className="nav">
                <p
                    id="nav-home"
                    className="nav-dynamic-link active"
                    onClick={scroll.bind(this, "welcomeView")}
                >
                    Home
                </p>
                <p
                    id="nav-about"
                    className="nav-dynamic-link"
                    onClick={scroll.bind(this, "aboutView")}
                >
                    About
                </p>
                <p
                    id="nav-tech"
                    className="nav-dynamic-link"
                    onClick={scroll.bind(this, "skillsView")}
                >
                    Technologies
                </p>
                <p
                    id="nav-projects"
                    className="nav-dynamic-link"
                    onClick={scroll.bind(this, "projectsView")}
                >
                    Projects
                </p>
                <p
                    id="nav-contact"
                    className="nav-dynamic-link"
                    onClick={scroll.bind(this, "contactView")}
                >
                    Contact
                </p>
            </div>
        </div>
    );
};

export default topbar;
