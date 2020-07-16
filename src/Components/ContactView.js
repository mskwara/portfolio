import React from "react";

import "./ContactView.scss";
import ContactTile from "./ContactTile";

const contactView = (props) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div id="contactView">
            <ContactTile />
            <img
                className="arrow"
                src={require("../assets/back.svg")}
                alt="Back"
                onClick={scrollToTop}
            />
        </div>
    );
};

export default contactView;
