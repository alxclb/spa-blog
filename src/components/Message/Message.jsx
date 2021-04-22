import React, { useState } from 'react'
import './messages.scss'

export const Message = ({message ="Container for showing application messages"}) => {
    const [display, setDisplay] = useState(true);

    function handleClick() {
        setDisplay(!display)
    }
    
    return (
         <section className={"messages " + (!display&&"hide")}>
            <h3>{message}</h3>
            <button onClick={handleClick}>X</button>
        </section>
    )
}



