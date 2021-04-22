import React from "react";
import { Logo } from "./components/Logo";
import { Nav } from "./components/Nav";
import { Search } from "./components/Search";
import "./header.scss";

export const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Search />
            <Nav />
        </header>
    );
};
