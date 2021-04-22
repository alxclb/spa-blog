import React from 'react'
import { Header } from '../header/Header'
import { Wrapper } from './Wrapper'
import './layout.scss';

export const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header/>
            <Wrapper>
                {children}
            </Wrapper>
        </div>
    )
}
