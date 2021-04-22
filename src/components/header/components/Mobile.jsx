import React, { useState } from "react";
import { HamIcon } from "./HamIcon";
import { List } from "./List";
import './mobile.scss';

export const Mobile = () => {
    const [active, setActive] = useState(false);
    return (
        <>
            <button className="mobile" onClick={() => setActive(!active)}>
                <HamIcon width="50" height="50" />
            </button>
            {active && <List />}
        </>
    );
};
