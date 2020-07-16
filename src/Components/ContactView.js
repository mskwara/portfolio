import React from "react";

import "./ContactView.scss";
import ContactTile from "./ContactTile";

const contactView = (props) => {
    const scroll = () => {
        document
            .getElementById("welcomeView")
            .scrollIntoView({ behavior: "smooth", block: "end" });
    };

    return (
        <div id="contactView">
            <ContactTile />
            <img
                className="arrow"
                src={require("../assets/back.svg")}
                alt="Back"
                onClick={scroll}
            />
        </div>
    );
};

export default contactView;
