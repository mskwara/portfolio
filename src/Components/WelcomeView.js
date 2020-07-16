import React from "react";

import "./WelcomeView.scss";
import Button from "./Button";

const welcomeView = (props) => {
    const scroll = () => {
        document
            .getElementById("aboutView")
            .scrollIntoView({ behavior: "smooth", block: "end" });
    };

    return (
        <div id="welcomeView">
            <h1 className="title">
                Front-end Web
                <br />
                Developer
            </h1>
            <Button
                className="checkButton"
                title="Check this guy"
                click={scroll}
            />
        </div>
    );
};

export default welcomeView;
