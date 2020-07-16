import React from "react";
import "./TechBox.scss";

const techBox = (props) => {
    const path = require(`../assets/tech/${props.image}`);

    const skill = [];
    for (let i = 0; i < props.skill; i++) {
        skill.push(<div className="dot active" />);
    }
    for (let i = 0; i < 5 - props.skill; i++) {
        skill.push(<div className="dot" />);
    }

    return (
        <div id="techBox">
            <img src={path} alt={props.name} />
            <div className="skillWrap">{skill}</div>
            <div className="name">
                <p>{props.name}</p>
            </div>
        </div>
    );
};

techBox.defaultProps = {
    showName: true,
};

export default techBox;
