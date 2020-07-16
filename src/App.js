import React from "react";
import "./App.scss";
import Topbar from "./Components/Topbar";
import WelcomeView from "./Components/WelcomeView";
import AboutView from "./Components/AboutView";
import SkillsView from "./Components/SkillsView";
import ProjectsView from "./Components/ProjectsView";
import ContactView from "./Components/ContactView";

const app = (props) => {
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80
        ) {
            document.getElementById("topbar").classList.remove("solid");
            document.getElementById("topbar").classList.add("transparent");
        } else {
            document.getElementById("topbar").classList.remove("transparent");
            document.getElementById("topbar").classList.add("solid");
        }

        const screenHeight = window.innerHeight;
        var activeNavs = document.getElementsByClassName(
            "nav-dynamic-link active"
        );
        while (activeNavs.length > 0) {
            activeNavs[0].classList.remove("active");
        }
        if (
            document.body.scrollTop >= 4 * screenHeight ||
            document.documentElement.scrollTop >= 4 * screenHeight
        ) {
            document.getElementById("nav-contact").classList.add("active");
        } else if (
            document.body.scrollTop >= 3 * screenHeight ||
            document.documentElement.scrollTop >= 3 * screenHeight
        ) {
            document.getElementById("nav-projects").classList.add("active");
        } else if (
            document.body.scrollTop >= 2 * screenHeight ||
            document.documentElement.scrollTop >= 2 * screenHeight
        ) {
            document.getElementById("nav-tech").classList.add("active");
        } else if (
            document.body.scrollTop >= screenHeight ||
            document.documentElement.scrollTop >= screenHeight
        ) {
            document.getElementById("nav-about").classList.add("active");
        } else {
            document.getElementById("nav-home").classList.add("active");
        }
    }

    return (
        <div id="App">
            <Topbar className="transparent" />
            <div>
                <WelcomeView />
            </div>
            <div>
                <AboutView />
            </div>
            <SkillsView />
            <ProjectsView />
            <ContactView />
        </div>
    );
};

export default app;
