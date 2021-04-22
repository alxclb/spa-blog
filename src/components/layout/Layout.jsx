import React from "react";
import { Header } from "../Header/Header";
import { Wrapper } from "./Wrapper";
import "./layout.scss";

export const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <Wrapper>{children}</Wrapper>
        </div>
    );
};
