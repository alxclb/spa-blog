import React, { useState } from 'react'
import { HamIcon } from './HamIcon';
import './navbar.scss';

export const Navbar = () => {
    const [display, setDisplay] = useState(true)
    function handleClick(e){
        e.preventDefault()
        setDisplay(!display)
    }
    return (
        <nav className="navbar">
            <div className="ham-wrapper"  onClick={handleClick}><HamIcon width="50" height="50"/></div>
            <ul className={"menu " + (display?"show":"hide")} >
                <li><a href="www">Link 1</a></li>
                <li><a href="www">Link 2</a></li>
                <li><a href="www">Link 3</a></li>
                <li><a href="www">My profile</a></li>
                <li><a href="www">Logout</a></li>
            </ul>
        </nav>
    )
}
