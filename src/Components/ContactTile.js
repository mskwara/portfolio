import React from "react";

import "./ContactTile.scss";
// import Button from "./Button";

const contactTile = (props) => {
    const redirect = (link) => {
        var win = window.open(link, "_blank");
        win.focus();
    };

    return (
        <div id="contactTile">
            <div className="name">
                <img
                    src={require("../assets/avatar.jpg")}
                    alt="avatar"
                    className="avatar"
                />
                <p>Michał Skwara</p>
            </div>
            <div className="contact">
                <p>If I have interested you, please let me know!</p>
                <span>
                    <img
                        src={require("../assets/email.svg")}
                        alt="email"
                        className="icon"
                    />
                    <p>michalskwara28@gmail.com</p>
                </span>
                <span className="connections">
                    <img
                        src={require("../assets/linkedin.svg")}
                        alt="linkedin"
                        className="connect"
                        onClick={redirect.bind(
                            this,
                            "https://www.linkedin.com/in/michalskwara"
                        )}
                    />
                    <img
                        src={require("../assets/github.svg")}
                        alt="github"
                        className="connect"
                        onClick={redirect.bind(
                            this,
                            "https://github.com/mskwara?tab=repositories"
                        )}
                    />
                </span>
            </div>
        </div>
    );
};

export default contactTile;
