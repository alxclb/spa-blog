import React from 'react'
import './controls.scss'

export const Controls = ({minWindow, maxWindow, closeWindow}) => {

    return (
        <div className="controls">
            <button onClick={minWindow}>_</button>
            <button onClick={maxWindow}>[]</button>
            <button onClick={closeWindow}>X</button>
        </div>
    )
}
