import React, { useState, useEffect } from "react";
import { List } from "./List";
import { Mobile } from "./Mobile";
import "./nav.scss";

export const Nav = () => {
    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width:820px)").matches
    );

    useEffect(() => {
        window.addEventListener("resize", () => {
            setIsMobile(window.matchMedia("(max-width:820px)").matches);
        });
    }, []);

    return <nav className="navbar">{isMobile ? <Mobile /> : <List />}</nav>;
};
