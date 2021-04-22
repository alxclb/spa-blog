import React from "react";
import './response.scss';

export const Response = ({ statusText }) => {
    return (
        statusText ? (
            <div className="response">
                <h3>Status: {statusText}</h3>
            </div>
        ):null
    );
};
