import React, { useEffect } from "react";

import "./WelcomeView.scss";
import { Parallax } from "react-scroll-parallax";
import { withController } from "react-scroll-parallax";
import Button from "./Button";

const WelcomeView = (props) => {
    const handleLoad = () => {
        // updates cached values after image dimensions have loaded
        props.parallaxController.update();
    };
    useEffect(() => {
        handleLoad();
    });

    const scroll = () => {
        document
            .getElementById("aboutView")
            .scrollIntoView({ behavior: "smooth", block: "end" });
    };

    return (
        <Parallax className="parallax" y={[-40, 40]}>
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
        </Parallax>
    );
};

export default withController(WelcomeView);
