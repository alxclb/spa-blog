import React from "react";
import "./created.scss";

export const Created = ({ date }) => {
    let d = new Date(date);
    let dt = d.toLocaleString();
    const arr = dt.split(",");
    return (
        <p className="created">
            <span>Posted date: </span>
            <span>{arr[0]}</span> at <span>{arr[1]}</span> by Some person
        </p>
    );
};
