import React from "react";

import "./Button.scss";

const Button = (props) => {
    return (
        <div id="Button" className={props.className} onClick={props.click}>
            <p>{props.title}</p>
        </div>
    );
};

export default Button;
