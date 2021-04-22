import React from "react";
import "./button.scss";

export const Button = ({ title, onClick, className = "" }) => {
    return (
        <div className={"btn-wrapper " + className}>
            <button type="button" onClick={onClick}>
                {title}
            </button>
        </div>
    );
};
