import React from "react";

import "./Project.scss";
import Button from "./Button";

const project = (props) => {
    const images = props.techUsedImages.map((image) => {
        const src = require(`../assets/tech/${image}`);
        return <img className="techImage" src={src} alt={image} key={image} />;
    });

    const redirect = () => {
        var win = window.open(props.link, "_blank");
        win.focus();
    };

    return (
        <div id="project" onClick={redirect}>
            <p className="title">{props.title}</p>
            <div className="divider" />
            <p className="description">{props.description}</p>
            <div className="imagesWrap">{images}</div>
            <Button
                className="buttonCheck"
                title="Check out"
                click={redirect}
            />
        </div>
    );
};

export default project;
