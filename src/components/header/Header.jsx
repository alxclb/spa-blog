import React from "react";
import { Logo } from "./components/Logo";
import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";
import './header.scss'

export const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Search />
            <Navbar />
        </header>
    );
};
