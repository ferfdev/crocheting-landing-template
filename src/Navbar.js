import React from 'react';
import logo from './img/logo_stretto.png';
import instagram from './img/instagram-rose.png';
import mail from './img/mail-rose.png'
import './styles/Navbar.css';
import { content } from './dropdown-content';

const Navbar = () => {
    return (
        <nav className="navbar" id='nav-top'>
            <div className="logo">
                <img src={logo} alt="Logo"/>
            </div>
                <ul className="menu">
                    {content.map((cell) => {
                        return <Dropdown 
                        key = {cell.selection.toLowerCase()}
                        selection = {cell.selection} 
                        content = {cell.content} />
                    })}
                        
                </ul> 
                <div className="social">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram" /></a>
                    <a href="mailto:example@gmail.com"><img src={mail} alt="instagram" /></a>
                </div>
        </nav>
    )
}

export const Dropdown = ({selection, content}) => {
    return(
        <div className="dropdown">
            <a href=""><li>{selection}
                <div className="underline"></div></li></a>
            <div className="dropdown-content">
                <a href=""><p>{content}</p></a>
            </div>
        </div>  
    )
}

export default Navbar
