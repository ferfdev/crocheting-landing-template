import React from 'react'
import './styles/Navbar.css';
import { content } from './dropdown-content';
import { Dropdown } from './Navbar';

const NavbarFoot = () => {
    return (
        <div className="navbar" id='nav-foot'
        style={{bottom:'0', height:'8vh', justifyContent:'center'}}>
            <ul className="menu">
                {content.map((cell) => {
                    return <Dropdown 
                    key = {cell.selection.toLowerCase()}
                    selection = {cell.selection} 
                    content = {cell.content} />
                })}
                    
            </ul> 
        </div>
    )
}

export default NavbarFoot
